// components/ActualitesSection.jsx
import Link from "next/link";

export default function ActualitesSection() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#0b0b0d] shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -top-32 -left-40 h-80 w-80 rounded-full bg-orange-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-yellow-400/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />

          {/* subtle diagonal light */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

          <div className="relative p-7 md:p-10">
            {/* top line */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.7)]" />
                Actualités
              </span>
              <span className="text-xs text-white/40">
                Terrain • Partenariats • Concours
              </span>
            </div>

            {/* title + CTA */}
            <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                  Flash Nuisible —{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    temps forts & actus
                  </span>
                </h2>
                <p className="mt-3 max-w-2xl text-white/70">
                  Partenariats, jeux concours, interventions et événements.{" "}
                  <span className="text-white/85 font-semibold">
                    Une marque en mouvement
                  </span>
                  , sur le terrain comme en ligne.
                </p>
              </div>

              <Link
                href="/actualites"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-black shadow-sm hover:bg-white/90 transition"
              >
                Voir toutes les actualités
                <span className="inline-block translate-x-0 group-hover:translate-x-0.5 transition">
                  →
                </span>
              </Link>
            </div>

            {/* cards */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Card 1 */}
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-500/30">
                {/* border glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-white/55">
                      Réseaux sociaux • Février 2026
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-extrabold text-white/80">
                      Instagram
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg md:text-xl font-extrabold tracking-tight text-white">
                    Flash Nuisible franchit le cap des 1000 abonnés
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Un cap symbolique franchi sur Instagram avec plus de 1000
                    abonnés. Interventions, coulisses et jeux concours à
                    découvrir.
                  </p>

                  <div className="relative mt-2">
                    <div className="aspect-[16/9] bg-black">
                      <img
                        className="h-full w-full object-cover"
                        src="/images/flash/accueil3.webp"
                        alt="Intervention terrain"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/35" />
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-orange-400" />

                    <a
                      href="https://www.instagram.com/flashnuisible/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xl font-bold !text-orange-400 hover:text-orange-200 transition"
                    >
                      Suivre sur Instagram{" "}
                      <span className="text-white/40">↗</span>
                    </a>
                  </div>
                </div>
              </article>

              {/* Card 2 */}
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur transition hover:-translate-y-0.5 hover:border-yellow-400/30">
                {/* border glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400" />
                  <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-yellow-400/15 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-white/55">
                      Jeu concours • Février 2026
                    </span>
                    <span className="rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 px-2.5 py-1 text-[11px] font-extrabold text-black shadow-[0_10px_30px_rgba(249,115,22,0.25)]">
                      LOT 200 €
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg md:text-xl font-extrabold tracking-tight text-white">
                    Jeu concours Flash Nuisible — lot de 200 €
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Participez directement sur Instagram pour tenter de gagner
                    un lot d’une valeur de 200 €. Résultats annoncés sur
                    Instagram.
                  </p>

                  <div className="relative mt-2">
                    <div className="aspect-[16/9] bg-black">
                      <img
                        className="h-full w-full object-cover"
                        src="/images/flash/concours2.webp"
                        alt="Intervention terrain"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/35" />
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.instagram.com/flashnuisible/p/DU5D5i_DjSq/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 px-4 py-2 text-sm font-extrabold text-black shadow-[0_18px_50px_rgba(249,115,22,0.25)] hover:brightness-105 transition"
                    >
                      Voir le concours ↗
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-white/45">
                    Aucune participation possible depuis le site — uniquement
                    via Instagram.
                  </p>
                </div>
              </article>
            </div>

            {/* bottom quick links */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
              <p className="text-white/50">
                Les contenus (photos/vidéos) sont publiés régulièrement sur nos
                réseaux.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/flashnuisible/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold !text-orange-300 hover:!text-orange-200 transition"
                >
                  Instagram
                </a>
                <span className="h-1 w-1 rounded-full bg-white/25" />
                <a
                  href="https://www.linkedin.com/company/flash-nuisible/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold !text-yellow-300 hover:!text-yellow-200 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
