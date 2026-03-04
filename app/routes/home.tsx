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
    <main className="min-h-screen flex items-center justify-center px-4 bg-[#f8f5f0] text-[#181818]">
      <div className="max-w-4xl w-full space-y-10">
        <header className="space-y-5 text-center">
          <div className="flex justify-center">
            <img
              src="/moody-logo.svg"
              alt="Logo Moody"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[rgba(0,0,0,0.55)]">
            Extension de navigateur
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#5E8254]">
            Collecteur d&apos;inspirations à portée de clic
          </h1>
          <p className="text-sm md:text-base text-[rgba(0,0,0,0.7)] max-w-xl mx-auto">
            Capture les pages, images, couleurs et petits bouts de texte qui
            t&apos;inspirent pendant que tu navigues. Moody te permet de les
            rassembler en un endroit doux et clair, prêt pour tes moodboards
            et tes projets créatifs.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-[1.4fr,1.6fr] items-start">
          {/* Colonne gauche : screenshot */}
          <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/90 p-4 shadow-sm">
            <div className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[#f3efe7] p-3">
              <img
                src="/moody-screenshot.png"
                alt="Aperçu de l’extension Moody"
                className="w-full h-auto rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Colonne droite : texte + tuto d’accès */}
          <div className="space-y-4">
            <div className="space-y-4 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/90 p-5 shadow-sm">
              <h2 className="text-sm font-medium text-[#181818]">
                Ce que tu peux faire avec Moody
              </h2>
              <ul className="space-y-2 text-sm text-[rgba(0,0,0,0.7)]">
                <li>• Garder sous la main les images qui t&apos;inspirent.</li>
                <li>• Sauvegarder des pages, couleurs et petits textes utiles.</li>
                <li>
                  • Préparer plus facilement des moodboards et des pistes
                  visuelles pour tes projets.
                </li>
              </ul>
              <p className="text-xs text-[rgba(0,0,0,0.45)]">
                Moody est encore en V1, l&apos;outil va évoluer doucement avec
                toi.
              </p>
            </div>

            <aside className="space-y-3 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/90 p-5 text-sm shadow-sm">
              <p className="font-medium text-[#181818]">
                Installer l&apos;extension
              </p>
              <p className="text-[rgba(0,0,0,0.7)]">
                Dès que l&apos;extension sera publiée, tu trouveras ici un lien
                direct vers le Chrome Web Store.
              </p>
              <div className="h-[1px] bg-[rgba(0,0,0,0.08)]" />
              <p className="text-xs text-[rgba(0,0,0,0.45)]">
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
          </div>
        </section>

        <footer className="flex items-center justify-between text-xs text-[rgba(0,0,0,0.45)]">
          <span>© {new Date().getFullYear()} Moody</span>
          <a
            href="/privacy"
            className="underline hover:text-[#5E8254]"
          >
            Politique de confidentialité
          </a>
        </footer>
      </div>
    </main>
  );
}
