import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { auth } from "~/lib/auth";
import { ensureDb, pool } from "~/lib/db";

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

  const result = await pool.query(
    `
      SELECT id, type, data, metadata, blob_key, created_at, updated_at
      FROM items
      WHERE user_id = $1
      ORDER BY created_at DESC
      LIMIT 500
    `,
    [userId],
  );

  return Response.json({ items: result.rows });
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

  const result = await pool.query(
    `
      INSERT INTO items (id, user_id, type, data, metadata, blob_key)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (id) DO UPDATE SET
        type = EXCLUDED.type,
        data = EXCLUDED.data,
        metadata = EXCLUDED.metadata,
        blob_key = EXCLUDED.blob_key,
        updated_at = NOW()
      RETURNING id, type, data, metadata, blob_key, created_at, updated_at
    `,
    [itemId, userId, type, data, metadata ?? null, blobKey ?? null],
  );

  return Response.json({ item: result.rows[0] }, { status: 201 });
}

