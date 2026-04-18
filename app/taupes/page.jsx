// app/taupes/page.jsx
import Image from "next/image";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

function Split({ reverse = false, title, children, image }) {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid gap-8 items-start md:grid-cols-2 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            {title ? (
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {title}
              </h2>
            ) : null}
            <div className={title ? "mt-4" : ""}>{children}</div>
          </div>

          <div className="grid gap-4">
            <div className="card overflow-hidden">{image}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TaupesPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Traitement des taupes
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Intervention professionnelle sans poison pour jardins et espaces
            extérieurs
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                Les taupes ne sont pas dangereuses pour l’homme, mais elles
                peuvent provoquer des dégâts visibles et durables sur un
                terrain. Pelouse abîmée, taupinières, galeries souterraines,
                affaissement du sol : une infestation de taupes devient
                rapidement gênante si elle n’est pas traitée.
              </p>

              <p className="text-muted">
                Flash Nuisible propose un{" "}
                <strong>traitement professionnel des taupes</strong>, basé sur
                une méthode moderne et ciblée, <strong>sans poison</strong>,
                adaptée aux jardins, terrains et espaces extérieurs.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Demander un devis
                </a>
                <a href="/#services" className="btn btn-ghost">
                  Voir les services
                </a>
              </div>
            </div>

            <div className="card overflow-hidden">
              <Image
                src="/images/flash/taupes1.webp"
                alt="Traitement professionnel des taupes"
                width={1200}
                height={900}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dégâts */}
      <Split
        title="Taupes dans le jardin : quels sont les dégâts ?"
        image={
          <Image
            src="/images/flash/taupes2.webp"
            alt="Taupinières dans un jardin"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Les taupes ne sont pas agressives, mais leur présence entraîne de
          nombreux désagréments sur un terrain ou dans un jardin.
        </p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>apparition de taupinières dans la pelouse</li>
          <li>dégradation esthétique du jardin</li>
          <li>affaissement du terrain</li>
          <li>fragilisation des racines</li>
          <li>difficulté d’entretien du terrain</li>
        </ul>

        <p className="mt-4 text-muted">
          Une infestation de taupes peut rapidement s’étendre si elle n’est pas
          traitée, notamment lorsque plusieurs galeries actives sont présentes.
        </p>
      </Split>

      {/* Méthode */}
      <Split
        reverse
        title="Traitement des taupes sans poison : méthode professionnelle"
        image={
          <Image
            src="/images/flash/taupes3.webp"
            alt="Traitement des taupes par méthode professionnelle"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Flash Nuisible utilise une méthode moderne basée sur la{" "}
          <strong>diffusion de CO₂ dans les galeries</strong>.
        </p>

        <p className="mt-3 text-muted">
          Le principe du traitement est le suivant :
        </p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>identification des galeries actives</li>
          <li>injection de CO₂ dans le réseau souterrain</li>
          <li>diffusion dans l’ensemble des galeries</li>
          <li>traitement ciblé des zones infestées</li>
        </ul>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <div className="font-extrabold">Sans poison</div>
            <p className="mt-2 text-muted">
              Aucun produit toxique diffusé dans le sol.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Sans contamination</div>
            <p className="mt-2 text-muted">
              Aucune contamination du terrain ou des zones traitées.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Méthode propre</div>
            <p className="mt-2 text-muted">
              Intervention ciblée, efficace et adaptée aux extérieurs.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">Respect de l’environnement</div>
            <p className="mt-2 text-muted">
              Une approche pensée pour traiter sans produits chimiques.
            </p>
          </div>
        </div>

        <p className="mt-5 text-muted">
          Cette approche permet de traiter efficacement les taupes tout en
          respectant l’environnement.
        </p>
      </Split>

      {/* Solution efficace */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Une solution efficace contre les taupes
              </h2>

              <p className="mt-4 text-muted">
                Contrairement aux solutions classiques comme les pièges ou les
                répulsifs, notre méthode agit directement{" "}
                <strong>au cœur du problème : le réseau de galeries</strong>.
              </p>

              <p className="mt-3 text-muted">Chaque intervention comprend :</p>

              <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
                <li>un diagnostic du terrain</li>
                <li>le repérage des zones actives</li>
                <li>le traitement du réseau de galeries</li>
                <li>des conseils après intervention</li>
              </ul>

              <p className="mt-4 text-muted">
                L’objectif est d’éliminer durablement la présence des taupes et
                de limiter les récidives sur le terrain.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Traitement des taupes à Saint-Étienne, Loire et Rhône
              </h2>

              <p className="mt-4 text-muted">
                Flash Nuisible intervient pour le traitement des taupes à
                Saint-Étienne et dans toute la région :
              </p>

              <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
                <li>Saint-Just-Saint-Rambert</li>
                <li>Andrézieux-Bouthéon</li>
                <li>Montbrison</li>
                <li>Firminy</li>
                <li>Lyon</li>
                <li>Vallée du Gier</li>
                <li>Plaine du Forez</li>
              </ul>

              <p className="mt-4 text-muted">
                Nous proposons une intervention rapide et adaptée à chaque
                situation.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">
                Prix d’un traitement contre les taupes
              </div>
              <p className="mt-3 text-muted">
                Le prix d’un traitement contre les taupes dépend :
              </p>
              <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
                <li>du nombre de galeries à traiter</li>
                <li>du niveau d’infestation</li>
                <li>de la configuration du terrain</li>
              </ul>
              <p className="mt-4 text-muted">
                Un devis est réalisé après diagnostic afin de proposer une
                solution adaptée et efficace.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">
                Pourquoi choisir Flash Nuisible ?
              </div>
              <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
                <li>intervention rapide</li>
                <li>traitement sans produit chimique</li>
                <li>méthode professionnelle</li>
                <li>un seul interlocuteur</li>
                <li>expérience terrain</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                FAQ – Traitement des taupes
              </h2>

              <div className="mt-6 grid gap-4">
                <div className="card p-6">
                  <div className="font-extrabold">
                    Comment enlever les taupes dans un jardin ?
                  </div>
                  <p className="mt-2 text-muted">
                    La solution la plus efficace consiste à traiter directement
                    les galeries. Les solutions superficielles comme les
                    répulsifs sont souvent insuffisantes.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">
                    Quel est le meilleur traitement contre les taupes ?
                  </div>
                  <p className="mt-2 text-muted">
                    Un traitement professionnel ciblant le réseau souterrain
                    permet d’éliminer les taupes durablement.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">
                    Les taupes sont-elles dangereuses ?
                  </div>
                  <p className="mt-2 text-muted">
                    Non, les taupes ne sont pas dangereuses pour l’homme, mais
                    elles causent des dégâts importants sur les terrains.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">
                    Combien coûte un traitement des taupes ?
                  </div>
                  <p className="mt-2 text-muted">
                    Le prix dépend du niveau d’infestation et du nombre de
                    galeries. Un diagnostic est nécessaire pour établir un devis
                    précis.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">
                    Peut-on traiter les taupes sans poison ?
                  </div>
                  <p className="mt-2 text-muted">
                    Oui, certaines méthodes professionnelles permettent
                    d’éliminer les taupes sans utiliser de produits chimiques.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">
                Besoin d’un traitement contre les taupes ?
              </div>
              <p className="mt-3 text-muted">
                Flash Nuisible intervient rapidement pour éliminer les taupes de
                votre terrain.
              </p>
              <div className="mt-4 space-y-2 text-muted">
                <div>
                  <strong>📞 07 70 35 33 41</strong>
                </div>
                <div>
                  <strong>📩 contact@flashnuisible.fr</strong>
                </div>
              </div>
            </div>

            <div className="text-xs">
              <h2 className="font-semibold mb-3">
                Intervention traitement des taupes dans la région
              </h2>

              <ul className="md:grid-cols-1 gap-3">
                <li>
                  <a href="/taupes/saint-etienne">Saint-Étienne</a>
                </li>
                <li>
                  <a href="/taupes/saint-just-saint-rambert">
                    Saint-Just-Saint-Rambert
                  </a>
                </li>
                <li>
                  <a href="/taupes/andrezieux-boutheon">Andrézieux-Bouthéon</a>
                </li>
                <li>
                  <a href="/taupes/montbrison">Montbrison</a>
                </li>
                <li>
                  <a href="/taupes/firminy">Firminy</a>
                </li>
                <li>
                  <a href="/taupes/lyon">Lyon</a>
                </li>
              </ul>
            </div>
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
