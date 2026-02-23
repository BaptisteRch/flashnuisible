// app/actualites/page.jsx
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Actualités Flash Nuisible",
  description:
    "Retrouvez les actualités de Flash Nuisible : partenariats, jeux concours, interventions, événements et temps forts de l’entreprise.",
};

export const revalidate = 2592000;

export default function ActualitesPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section pt-10">
        <div className="mx-auto max-w-7xl px-6">
          {/* Background “blog/journal” clair */}
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-x-6 -top-10 -bottom-10 -z-10 rounded-[2rem]
              bg-[radial-gradient(900px_500px_at_18%_12%,rgba(255,106,0,0.10),transparent_60%),radial-gradient(900px_500px_at_82%_18%,rgba(255,176,0,0.10),transparent_55%),radial-gradient(900px_520px_at_50%_110%,rgba(0,0,0,0.06),transparent_55%),linear-gradient(180deg,#fbfbfc_0%,#f2f4f7_55%,#eef1f5_100%)]"
            />
          </div>

          {/* HERO */}
          <div className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-white/70 shadow-[0_30px_80px_rgba(2,6,23,0.10)]">
            <div className="pointer-events-none absolute -top-28 -left-40 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -top-28 -right-40 h-72 w-72 rounded-full bg-yellow-400/15 blur-3xl" />

            <div className="p-7 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-extrabold text-black/70">
                    <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(255,106,0,0.45)]" />
                    Actualités Flash Nuisible
                  </div>

                  <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-black">
                    Partenariats, concours{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                      & terrain
                    </span>
                  </h1>

                  <p className="mt-4 max-w-2xl text-black/70 leading-relaxed">
                    Retrouvez les actualités de Flash Nuisible : partenariats,
                    jeux concours, interventions, événements et temps forts. Une
                    marque en mouvement, sur le terrain comme en ligne.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-2.5 text-sm font-extrabold text-black shadow-[0_14px_34px_rgba(255,106,0,0.22)] hover:brightness-105 transition"
                    href="https://www.instagram.com/flashnuisible/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Suivre sur Instagram ↗
                  </a>

                  <a
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-5 py-2.5 text-sm font-extrabold text-black/80 shadow-[0_12px_28px_rgba(2,6,23,0.10)] hover:bg-white transition"
                    href="https://www.linkedin.com/company/flash-nuisible/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="mt-6 grid gap-4 md:gap-5 md:grid-cols-12">
            {/* 1 - A la une (8 colonnes) */}
            <article className="md:col-span-7 overflow-hidden rounded-2xl border border-black/10 bg-white/85 shadow-[0_14px_40px_rgba(2,6,23,0.10)]">
              <div className="relative">
                <div className="aspect-[16/9] bg-black">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/flash/accueil3.JPG"
                    alt="Instagram Flash Nuisible"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/35" />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-black/80 border border-black/10">
                  À la une
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-black/55">
                    Réseaux sociaux • Février 2026
                  </span>
                  <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-1 text-[11px] font-extrabold text-black/70">
                    Instagram
                  </span>
                </div>

                <h2 className="mt-3 text-xl md:text-2xl font-extrabold tracking-tight text-black">
                  Flash Nuisible franchit le cap des 1000 abonnés sur Instagram
                </h2>

                <p className="mt-2 text-black/70 leading-relaxed">
                  Flash Nuisible franchit un cap symbolique avec plus de 1000
                  abonnés sur son compte Instagram officiel. Cette étape marque
                  le développement continu de la marque et l’intérêt grandissant
                  autour de ses interventions, partenariats et projets.
                </p>

                <div className="mt-4 border-t border-black/10 pt-4">
                  <p className="text-sm font-extrabold text-black/85">
                    Sur Instagram, Flash Nuisible partage :
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-black/70 space-y-1">
                    <li>interventions terrain</li>
                    <li>dispositifs de dératisation et désinsectisation</li>
                    <li>partenariats sportifs</li>
                    <li>coulisses de l’entreprise</li>
                    <li>jeux concours réservés à la communauté</li>
                  </ul>

                  <div className="mt-4">
                    <a
                      className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-2.5 text-sm font-extrabold text-black hover:brightness-105 transition"
                      href="https://www.instagram.com/flashnuisible/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Suivre sur Instagram ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* 2 - Concours (4 colonnes) */}
            <article className="md:col-span-5 overflow-hidden rounded-2xl border border-black/10 bg-white/85 shadow-[0_14px_40px_rgba(2,6,23,0.10)]">
              <div className="relative">
                <div className="aspect-[16/9] bg-black">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/flash/concours2.png"
                    alt="Jeu concours"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/35" />
                <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-3 py-1 text-xs font-extrabold text-black">
                  LOT 200 €
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-black/55">
                    Jeu concours • Février 2026
                  </span>
                  <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-1 text-[11px] font-extrabold text-black/70">
                    Instagram
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold tracking-tight text-black">
                  Jeu concours Flash Nuisible : participez sur Instagram
                </h3>

                <p className="mt-2 text-black/70 leading-relaxed">
                  Le jeu concours actuellement en ligne permet de remporter un
                  lot d’une valeur de 200 €. Pour participer, il est nécessaire
                  de se rendre directement sur Instagram
                </p>

                <div className="mt-4 border-t border-black/10 pt-4">
                  <div>
                    <p className="text-sm font-extrabold text-black/85">
                      Une fois sur la plateforme : :
                    </p>
                    <ol className="mt-2 list-decimal pl-5 text-sm text-black/70 space-y-1">
                      <li>
                        S’abonner au compte{" "}
                        <a
                          href="https://www.instagram.com/flashnuisible/"
                          className="!text-orange-500 font-bold"
                          target="_blank"
                        >
                          @flashnuisible
                        </a>{" "}
                      </li>
                      <li>Liker la publication du jeu concours </li>
                      <li>Identifier deux personnes en commentaire </li>
                      <li>Partager la publication en story (bonus)</li>
                    </ol>
                  </div>
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-2 text-sm font-extrabold text-black hover:brightness-105 transition mt-4"
                    href="https://www.instagram.com/flashnuisible/p/DU5D5i_DjSq/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le jeu concours ↗
                  </a>
                  <p className="text-sm p-1 mt-3 !text-gray-500">
                    Les résultats sont annoncés exclusivement sur Instagram.
                    Aucune participation n’est possible depuis le site internet.
                    Il est impératif de passer par le compte Instagram
                    officiel.{" "}
                  </p>
                </div>
              </div>
            </article>

            {/* 3 - Partenariat (4) */}
            <article className="md:col-span-5 overflow-hidden rounded-2xl border border-black/10 bg-white/85 shadow-[0_14px_40px_rgba(2,6,23,0.10)]">
              <div className="relative">
                <div className="aspect-[16/9] bg-black">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80"
                    alt="Partenariat"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/35" />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-black/80 border border-black/10">
                  Partenariat
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-black/55">
                    Partenariat
                  </span>
                  <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-1 text-[11px] font-extrabold text-black/70">
                    SCABB
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold tracking-tight text-black">
                  Flash Nuisible partenaire du SCABB
                </h3>

                <p className="mt-2 text-black/70 leading-relaxed">
                  Ce partenariat reflète la volonté de s’associer à des
                  structures ambitieuses et exigeantes. Les temps forts et
                  événements liés à ce partenariat sont régulièrement publiés
                  sur les réseaux sociaux officiels :
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-2 text-sm font-extrabold text-black hover:brightness-105 transition"
                    href="https://www.instagram.com/flashnuisible/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram ↗
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-black/80 hover:bg-white/90 transition"
                    href="https://www.linkedin.com/company/flash-nuisible/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </div>
                <p className="text-sm p-1 mt-3 !text-gray-500">
                  Pour suivre les annonces, événements et actualités liées à ce
                  partenariat, ces plateformes sont à consulter directement
                </p>
              </div>
            </article>

            {/* 4 - Terrain (4) */}
            <article className="md:col-span-7 overflow-hidden rounded-2xl border border-black/10 bg-white/85 shadow-[0_14px_40px_rgba(2,6,23,0.10)]">
              <div className="relative">
                <div className="aspect-[16/9] bg-black">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/flash/20262.png"
                    alt="Intervention terrain"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/35" />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-black/80 border border-black/10">
                  Terrain
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-black/55">
                    Terrain • Interventions
                  </span>
                  <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-1 text-[11px] font-extrabold text-black/70">
                    Pro & particuliers
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold tracking-tight text-black">
                  Interventions professionnelles : suivez les actualités terrain
                </h3>

                <p className="mt-2 text-black/70 leading-relaxed">
                  Flash Nuisible intervient auprès de particuliers, commerces et
                  entreprises pour la mise en place de dispositifs de
                  dératisation et désinsectisation.
                </p>
                <p className="mt-2 text-black/70 leading-relaxed">
                  Des images et vidéos des interventions sont régulièrement
                  publiées sur les réseaux sociaux officiels.
                </p>
                <p className="mt-2 text-black/70 leading-relaxed">
                  Pour voir les installations, mises en place de dispositifs et
                  suivis professionnels :
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-2 text-sm font-extrabold text-black hover:brightness-105 transition"
                    href="https://www.instagram.com/flashnuisible/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram ↗
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-black/80 hover:bg-white/90 transition"
                    href="https://www.linkedin.com/company/flash-nuisible/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 text-center text-sm text-black/55">
            Besoin d’une intervention ? Retrouvez aussi des images et vidéos sur{" "}
            <a
              href="https://www.instagram.com/flashnuisible/"
              className="!text-orange-400 font-bold"
            >
              Instagram
            </a>{" "}
            et{" "}
            <a
              href="https://www.linkedin.com/company/flash-nuisible/"
              className="!text-blue-400 font-bold"
            >
              LinkedIn
            </a>
            .
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section className="section on-dark" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
