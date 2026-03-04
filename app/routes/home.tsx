import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moody – extension pour suivre ton humeur" },
    {
      name: "description",
      content:
        "Moody t’aide à capturer ton humeur et tes pensées au fil de la journée, directement depuis ton navigateur.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Extension de navigateur
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Moody, un petit carnet d&apos;humeur{" "}
            <span className="text-indigo-400">toujours sous la main</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            Note ton humeur, capture des pensées rapides et garde une trace des
            moments importants directement depuis ton navigateur. Simple,
            doux, sans prise de tête.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[2fr,1.2fr] items-start">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-medium text-slate-200">
              Ce que tu peux faire avec Moody
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Noter rapidement ton humeur du moment.</li>
              <li>• Garder des traces de situations ou pensées importantes.</li>
              <li>
                • Revenir plus tard sur ce que tu as ressenti, sans journal
                compliqué.
              </li>
            </ul>
            <p className="text-xs text-slate-400">
              Moody est encore en V1, l&apos;outil va évoluer doucement avec
              toi.
            </p>
          </div>

          <aside className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm">
            <p className="font-medium text-slate-100">
              Installer l&apos;extension
            </p>
            <p className="text-slate-300">
              Dès que l&apos;extension sera publiée, tu trouveras ici un lien
              direct vers le Chrome Web Store.
            </p>
            <div className="h-[1px] bg-slate-800" />
            <p className="text-xs text-slate-400">
              En attendant, tu peux déjà utiliser cette page pour te connecter
              à ton compte Moody et gérer tes données.
            </p>
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-400"
            >
              Accéder à l&apos;espace de connexion
            </a>
          </aside>
        </section>

        <footer className="flex items-center justify-between text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Moody</span>
          <a href="/privacy" className="hover:text-indigo-300 underline">
            Politique de confidentialité
          </a>
        </footer>
      </div>
    </main>
  );
}
