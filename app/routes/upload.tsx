import { useState } from "react";

export default function UploadPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
        <h1 className="mb-4 text-center text-2xl font-semibold">
          Upload d&apos;image (Netlify Blobs)
        </h1>

        <form
          className="space-y-4"
          method="post"
          action="/api/upload-image"
          encType="multipart/form-data"
          onSubmit={() => {
            setMessage(null);
            setError(null);
            setPending(true);
          }}
        >
          <div>
            <label className="mb-1 block text-sm">Fichier image</label>
            <input
              type="file"
              name="file"
              accept="image/*"
              required
              className="w-full text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-2 w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-400 disabled:opacity-60"
          >
            {pending ? "Upload en cours..." : "Uploader"}
          </button>
        </form>

        {message && (
          <p className="mt-3 text-center text-sm text-emerald-400">
            {message}
          </p>
        )}
        {error && (
          <p className="mt-3 text-center text-sm text-rose-400">{error}</p>
        )}
      </div>
    </div>
  );
}

