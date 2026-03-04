import { useState, type FormEvent } from "react";
import { authClient } from "~/lib/auth-client";

export default function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage(null);
    setError(null);
    setPending(true);

    try {
      console.log("Submitting auth form", { mode, email });

      if (mode === "signup") {
        await authClient.signUp.email({
          email,
          password,
          name: name || undefined,
        });

        setMessage(
          "Compte créé. Si une vérification par email est nécessaire, vérifie ta boîte mail.",
        );
      } else {
        await authClient.signIn.email({
          email,
          password,
        });

        setMessage("Connexion réussie.");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
        <h1 className="mb-4 text-center text-2xl font-semibold">
          {mode === "signin" ? "Connexion à Moody" : "Créer un compte Moody"}
        </h1>

        <div className="mb-4 flex gap-2 rounded-lg bg-slate-900 p-1">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`flex-1 rounded-md px-3 py-2 text-sm ${
              mode === "signin"
                ? "bg-slate-50 text-slate-900"
                : "text-slate-300"
            }`}
          >
            Connexion
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-md px-3 py-2 text-sm ${
              mode === "signup"
                ? "bg-slate-50 text-slate-900"
                : "text-slate-300"
            }`}
          >
            Inscription
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="mb-1 block text-sm">Nom (optionnel)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              />
            </div>
          )}

          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-2 w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-400 disabled:opacity-60"
          >
            {pending
              ? "Patiente..."
              : mode === "signin"
                ? "Se connecter"
                : "Créer le compte"}
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

