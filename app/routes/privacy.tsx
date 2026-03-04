export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Moody
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Politique de confidentialité
          </h1>
          <p className="text-sm text-slate-400">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-slate-200">
          <p>
            Moody est une extension de navigateur et un petit service web
            pensé pour t&apos;aider à collecter et organiser tes inspirations
            visuelles et textuelles au quotidien, tout en respectant au maximum
            ta vie privée. Cette page explique quelles données sont collectées,
            comment elles sont utilisées et quels sont tes droits.
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            1. Responsable du traitement
          </h2>
          <p>
            Moody est un projet personnel développé par Sophie Margnes. Pour
            toute question liée à la confidentialité ou à tes données, tu peux
            me contacter à l&apos;adresse suivante :
          </p>
          <p className="text-slate-300">
            <span className="font-medium">Email :</span>{" "}
            sophie@sulkastudio.fr
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            2. Données collectées
          </h2>
          <p>Moody collecte uniquement les informations nécessaires :</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>
              <span className="font-medium">Compte utilisateur :</span> adresse
              email et mot de passe (hashé) pour te permettre de te connecter.
            </li>
            <li>
              <span className="font-medium">Contenu que tu saisis :</span> tes
              notes, inspirations et autres informations que tu choisis
              d&apos;enregistrer dans Moody.
            </li>
            <li>
              <span className="font-medium">Éventuelles images :</span> si tu
              utilises une fonctionnalité d&apos;upload, les fichiers sont
              stockés dans un espace de stockage associé à ton compte.
            </li>
          </ul>
          <p>
            Moody ne collecte pas de données de navigation en dehors de ce que
            tu saisis explicitement dans l&apos;extension ou sur le site.
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            3. Finalités des traitements
          </h2>
          <p>Les données sont utilisées uniquement pour :</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>
              Créer et gérer ton compte utilisateur (authentification, sessions
              actives).
            </li>
            <li>
              Enregistrer et afficher tes inspirations, notes et contenus liés à
              Moody.
            </li>
            <li>
              Assurer le bon fonctionnement technique du service (sécurité,
              prévention d&apos;abus, maintenance).
            </li>
          </ul>
          <p>
            Tes données ne sont ni revendues ni utilisées pour du ciblage
            publicitaire.
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            4. Base légale
          </h2>
          <p>
            Le traitement de tes données repose sur ton{" "}
            <span className="font-medium">consentement</span> et sur{" "}
            <span className="font-medium">l&apos;exécution du service</span>{" "}
            que tu demandes en utilisant Moody (création et gestion de ton
            compte, enregistrement de ton contenu).
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            5. Hébergement et sous‑traitants
          </h2>
          <p>
            Moody utilise les services de la plateforme{" "}
            <span className="font-medium">Netlify</span> pour l&apos;hébergement
            du site et de l&apos;API, ainsi qu&apos;une base de données
            PostgreSQL et un stockage de fichiers :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>
              <span className="font-medium">Netlify :</span> hébergement du
              site et des fonctions serveur.
            </li>
            <li>
              <span className="font-medium">Base de données PostgreSQL :</span>{" "}
              stockage des comptes et des contenus (inspirations, notes…).
            </li>
            <li>
              <span className="font-medium">Netlify Blobs :</span> stockage
              d&apos;éventuelles images associées à ton compte.
            </li>
          </ul>
          <p>
            Ces prestataires peuvent être basés dans l&apos;Union européenne
            ou aux États‑Unis. Ils s&apos;engagent contractuellement à assurer
            un niveau de sécurité adapté.
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            6. Cookies et sessions
          </h2>
          <p>
            Moody utilise des <span className="font-medium">cookies</span> ou
            mécanismes similaires uniquement pour :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Maintenir ta session ouverte lorsque tu es connecté(e).</li>
            <li>Sécuriser l&apos;accès à ton compte.</li>
          </ul>
          <p>
            Il n&apos;y a pas de cookies de suivi publicitaire ni de trackers
            tiers dans Moody.
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            7. Durée de conservation
          </h2>
          <p>
            Tes données sont conservées tant que ton compte Moody existe. Tu
            peux demander à tout moment la suppression de ton compte et de tes
            contenus (voir section &quot;Tes droits&quot;).
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            8. Tes droits
          </h2>
          <p>Conformément à la réglementation applicable (notamment RGPD), tu disposes des droits suivants :</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>
              <span className="font-medium">Droit d&apos;accès :</span> obtenir
              une copie des données te concernant.
            </li>
            <li>
              <span className="font-medium">Droit de rectification :</span>{" "}
              corriger des données inexactes ou incomplètes.
            </li>
            <li>
              <span className="font-medium">Droit à l&apos;effacement :</span>{" "}
              demander la suppression de ton compte et de tes contenus.
            </li>
            <li>
              <span className="font-medium">Droit d&apos;opposition et de
              limitation :</span> limiter ou t&apos;opposer à certains
              traitements, dans les limites prévues par la loi.
            </li>
          </ul>
          <p>
            Pour exercer ces droits, tu peux envoyer un email à{" "}
            <span className="font-medium">sophie@sulkastudio.fr</span>. Une
            réponse te sera apportée dans un délai raisonnable.
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            9. Évolutions de cette politique
          </h2>
          <p>
            Moody est un projet vivant : les fonctionnalités peuvent évoluer,
            et cette politique de confidentialité pourra être mise à jour en
            conséquence. En cas de changement important, une information sera
            affichée sur le site ou dans l&apos;extension.
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            10. Contact
          </h2>
          <p>
            Pour toute question, remarque ou demande liée à la protection de
            ta vie privée, tu peux écrire à :
          </p>
          <p className="text-slate-300">
            <span className="font-medium">Email :</span>{" "}
            sophie@sulkastudio.fr
          </p>
        </section>
      </div>
    </main>
  );
}

