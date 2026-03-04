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
    <main className="min-h-screen flex items-center justify-center px-4 bg-[#f8f5f0] text-[#181818]">
      <div className="w-full max-w-md rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/95 p-6 shadow-sm space-y-6">
        <div className="text-center space-y-3">
          <img
            src="/moody-logo.svg"
            alt="Logo Moody"
            className="h-8 w-auto mx-auto"
          />
          <p className="text-xs uppercase tracking-[0.2em] text-[rgba(0,0,0,0.55)]">
            {mode === "signin" ? "Connexion" : "Création de compte"}
          </p>
          <h1 className="text-xl font-semibold">
            {mode === "signin"
              ? "Retrouve tes inspirations"
              : "Crée ton espace Moody"}
          </h1>
        </div>

        <div className="mb-2 flex gap-2 rounded-full bg-[rgba(0,0,0,0.03)] p-1 text-xs">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`flex-1 rounded-md px-3 py-2 text-sm ${
              mode === "signin"
                ? "bg-[#5E8254] text-white"
                : "text-[rgba(0,0,0,0.6)]"
            }`}
          >
            Connexion
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-md px-3 py-2 text-sm ${
              mode === "signup"
                ? "bg-[#5E8254] text-white"
                : "text-[rgba(0,0,0,0.6)]"
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
                className="w-full rounded-md border border-[rgba(0,0,0,0.12)] bg-white px-3 py-2 text-sm outline-none focus:border-[#5E8254]"
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
              className="w-full rounded-md border border-[rgba(0,0,0,0.12)] bg-white px-3 py-2 text-sm outline-none focus:border-[#5E8254]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-[rgba(0,0,0,0.12)] bg-white px-3 py-2 text-sm outline-none focus:border-[#5E8254]"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-2 w-full rounded-md bg-[#5E8254] px-3 py-2 text-sm font-medium text-white hover:bg-[#4b6743] disabled:opacity-60"
          >
            {pending
              ? "Patiente..."
              : mode === "signin"
                ? "Se connecter"
                : "Créer le compte"}
          </button>
        </form>

        {message && (
          <p className="mt-3 text-center text-sm text-[#5E8254]">
            {message}
          </p>
        )}
        {error && (
          <p className="mt-3 text-center text-sm text-rose-500">{error}</p>
        )}
      </div>
    </main>
  );
}

