import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moody – collecteur d’inspirations" },
    {
      name: "description",
      content:
        "Moody t’aide à capturer et organiser tes inspirations visuelles et textuelles pour créer des moodboards plus facilement.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[#f8f5f0] text-[#181818] dark:bg-[#0f1014] dark:text-[#f7f7fb]">
      <div className="max-w-4xl w-full space-y-10">
        <header className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,0,0,0.06)] bg-white/80 px-4 py-2 shadow-sm dark:border-[rgba(255,255,255,0.08)] dark:bg-[rgba(21,23,31,0.98)]">
              <img
                src="/moody-logo.svg"
                alt="Logo Moody"
                className="h-6 w-auto"
              />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.7)]">
                Extension de navigateur
              </span>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[rgba(0,0,0,0.45)] dark:text-[rgba(255,255,255,0.5)]">
            Collecte d&apos;inspirations et moodboards
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Moody, un petit collecteur{" "}
            <span className="text-[#5E8254] dark:text-[#5E8254]">
              d&apos;inspirations toujours sous la main
            </span>
          </h1>
          <p className="text-sm md:text-base text-[rgba(0,0,0,0.7)] dark:text-[rgba(255,255,255,0.7)] max-w-xl mx-auto">
            Capture les pages, images, couleurs et petits bouts de texte qui
            t&apos;inspirent pendant que tu navigues. Moody te permet de les
            rassembler en un endroit doux et clair, prêt pour tes moodboards
            et tes projets créatifs.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-[1.4fr,1.6fr] items-start">
          <div className="space-y-4 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/90 p-5 shadow-sm dark:border-[rgba(255,255,255,0.06)] dark:bg-[rgba(21,23,31,0.98)]">
            <h2 className="text-sm font-medium text-[#181818] dark:text-[#f7f7fb]">
              Ce que tu peux faire avec Moody
            </h2>
            <ul className="space-y-2 text-sm text-[rgba(0,0,0,0.7)] dark:text-[rgba(255,255,255,0.7)]">
              <li>• Garder sous la main les images qui t&apos;inspirent.</li>
              <li>• Sauvegarder des pages, couleurs et petits textes utiles.</li>
              <li>
                • Préparer plus facilement des moodboards et des pistes
                visuelles pour tes projets.
              </li>
            </ul>
            <p className="text-xs text-[rgba(0,0,0,0.45)] dark:text-[rgba(255,255,255,0.5)]">
              Moody est encore en V1, l&apos;outil va évoluer doucement avec
              toi.
            </p>
          </div>

          <aside className="space-y-4 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/90 p-5 text-sm shadow-sm dark:border-[rgba(255,255,255,0.06)] dark:bg-[rgba(21,23,31,0.98)]">
            <div className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[#f3efe7] p-3 dark:border-[rgba(255,255,255,0.08)] dark:bg-[#171821]">
              <img
                src="/moody-screenshot.png"
                alt="Aperçu de l’extension Moody"
                className="w-full h-auto rounded-xl shadow-sm"
              />
            </div>
            <p className="font-medium text-[#181818] dark:text-[#f7f7fb]">
              Installer l&apos;extension
            </p>
            <p className="text-[rgba(0,0,0,0.7)] dark:text-[rgba(255,255,255,0.7)]">
              Dès que l&apos;extension sera publiée, tu trouveras ici un lien
              direct vers le Chrome Web Store.
            </p>
            <div className="h-[1px] bg-[rgba(0,0,0,0.08)] dark:bg-[rgba(255,255,255,0.12)]" />
            <p className="text-xs text-[rgba(0,0,0,0.45)] dark:text-[rgba(255,255,255,0.5)]">
              En attendant, tu peux déjà utiliser cette page pour te connecter
              à ton compte Moody et gérer tes données.
            </p>
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-md bg-[#5E8254] px-3 py-2 text-xs font-medium text-white hover:bg-[#4b6743]"
            >
              Accéder à l&apos;espace de connexion
            </a>
          </aside>
        </section>

        <footer className="flex items-center justify-between text-xs text-[rgba(0,0,0,0.45)] dark:text-[rgba(255,255,255,0.5)]">
          <span>© {new Date().getFullYear()} Moody</span>
          <a
            href="/privacy"
            className="underline hover:text-emerald-500 dark:hover:text-emerald-400"
          >
            Politique de confidentialité
          </a>
        </footer>
      </div>
    </main>
  );
}
