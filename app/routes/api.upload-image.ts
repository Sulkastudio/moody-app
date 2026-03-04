import type { ActionFunctionArgs } from "react-router";
import { getStore } from "@netlify/blobs";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return new Response("Bad Request", { status: 400 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return new Response("File is required", { status: 400 });
    }

    const store = getStore({ name: "images" });
    const key = `image-${Date.now()}-${file.name}`;

    const arrayBuffer = await file.arrayBuffer();

    await store.set(key, arrayBuffer, {
      metadata: {
        contentType: file.type,
      },
    });

    return Response.json({ key });
  } catch (error) {
    console.error("Upload error", error);
    return new Response("Upload failed", { status: 500 });
  }
}

