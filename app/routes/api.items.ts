import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { desc, eq } from "drizzle-orm";
import { auth } from "~/lib/auth";
import { db, ensureDb } from "~/lib/db";
import { items } from "~/lib/schema";

type ItemType = "page" | "image" | "text" | "color";

const ITEM_TYPES: ItemType[] = ["page", "image", "text", "color"];

async function requireUserId(request: Request): Promise<string> {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const userId = (session as any)?.user?.id as string | undefined;
  if (!userId) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return userId;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  await ensureDb();

  const rows = await db
    .select({
      id: items.id,
      type: items.type,
      data: items.data,
      metadata: items.metadata,
      blobKey: items.blobKey,
      createdAt: items.createdAt,
      updatedAt: items.updatedAt,
    })
    .from(items)
    .where(eq(items.userId, userId))
    .orderBy(desc(items.createdAt))
    .limit(500);

  return Response.json({ items: rows });
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  await ensureDb();

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return new Response("Bad Request", { status: 400 });
  }

  const {
    id,
    type,
    data,
    metadata,
    blobKey,
  }: {
    id?: string;
    type?: string;
    data?: string;
    metadata?: unknown;
    blobKey?: string | null;
  } = body as any;

  if (!type || !ITEM_TYPES.includes(type as ItemType)) {
    return new Response("Invalid type", { status: 400 });
  }

  if (typeof data !== "string" || data.length === 0) {
    return new Response("Invalid data", { status: 400 });
  }

  const itemId =
    typeof id === "string" && id.length > 0
      ? id
      : `item_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

  const [item] = await db
    .insert(items)
    .values({
      id: itemId,
      userId,
      type,
      data,
      metadata: (metadata ?? null) as unknown | null,
      blobKey: blobKey ?? null,
    })
    .onConflictDoUpdate({
      target: items.id,
      set: {
        type,
        data,
        metadata: (metadata ?? null) as unknown | null,
        blobKey: blobKey ?? null,
        updatedAt: new Date(),
      },
    })
    .returning({
      id: items.id,
      type: items.type,
      data: items.data,
      metadata: items.metadata,
      blobKey: items.blobKey,
      createdAt: items.createdAt,
      updatedAt: items.updatedAt,
    });

  return Response.json({ item }, { status: 201 });
}

