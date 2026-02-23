// app/xylophages/page.jsx
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

export default function XylophagesPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Insectes xylophages
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Traitement du bois, charpentes et structures infestées
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                Les insectes xylophages s’attaquent directement au bois et
                peuvent fragiliser une structure sans que les dégâts soient
                visibles immédiatement. Charpentes, poutres, solives ou autres
                éléments en bois peuvent être concernés, aussi bien dans les
                habitations que dans d’autres types de bâtiments.
              </p>

              <p className="text-muted">
                Chez Flash Nuisible, le traitement des xylophages vise un
                objectif clair :{" "}
                <strong>traiter le bois en profondeur et en surface</strong>,
                afin d’éliminer l’infestation et de préserver durablement la
                structure.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Demander un diagnostic
                </a>
                <a href="/#services" className="btn btn-ghost">
                  Voir les services
                </a>
              </div>
            </div>

            <div className="card overflow-hidden">
              <Image
                src="/images/flash/action-shirt.jpg"
                alt="Diagnostic et traitement du bois"
                width={1200}
                height={900}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signes */}
      <Split
        title="Quels sont les signes d’une infestation xylophage ?"
        image={
          <Image
            src="/images/flash/action-talk.jpg"
            alt="Repérage des signes d'infestation xylophage"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Une infestation d’insectes xylophages peut se manifester par :
        </p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>des trous visibles dans le bois</li>
          <li>de la sciure au sol ou sur les poutres</li>
          <li>un bois qui sonne creux</li>
          <li>une fragilisation progressive de la structure</li>
        </ul>

        <p className="mt-4 text-muted">
          Dans de nombreux cas, les dégâts sont invisibles au début. Plus
          l’intervention est tardive, plus la structure peut être impactée.
        </p>
      </Split>

      {/* Diagnostic sur place */}
      <Split
        reverse
        title="Une intervention sur mesure, après diagnostic sur place"
        image={
          <Image
            src="/images/flash/camion1.JPG"
            alt="Intervention sur site - diagnostic du bois"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Contrairement à d’autres traitements, une intervention xylophage
          nécessite une évaluation précise sur site. Flash Nuisible se déplace
          systématiquement afin de :
        </p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>analyser l’état réel du bois</li>
          <li>identifier les zones infestées</li>
          <li>déterminer le traitement le plus adapté</li>
        </ul>

        <p className="mt-4 text-muted">
          Un <strong>devis gratuit</strong> est réalisé sur place, après
          diagnostic.
        </p>
      </Split>

      {/* Déroulement (pleine largeur + encart listé) */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Déroulement du traitement des insectes xylophages
              </h2>
              <p className="mt-4 text-muted">
                Le traitement est réalisé de manière complète et
                professionnelle, avec une intervention structurée :
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="card p-6">
                  <div className="font-extrabold">Brossage du bois</div>
                  <p className="mt-2 text-muted">
                    Élimination de la couche de bois mort pour préparer le
                    support.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">Perçage</div>
                  <p className="mt-2 text-muted">
                    Perçage des éléments bois pour permettre un traitement en
                    profondeur.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">Injection</div>
                  <p className="mt-2 text-muted">
                    Injection du produit à l’intérieur des poutres et
                    structures, au cœur du bois.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">Pulvérisation de surface</div>
                  <p className="mt-2 text-muted">
                    Deux passages pour une protection optimale.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-muted">
                L’ensemble du traitement est effectué en un passage principal,
                avec un retour le lendemain pour réaliser une seconde
                pulvérisation et assurer une couverture complète.
              </p>

              <p className="mt-3 text-muted">
                Cette méthode permet d’agir à la fois en profondeur et en
                surface, condition indispensable pour un traitement efficace des
                xylophages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Curatif et prévention
              </h2>
              <p className="mt-4 text-muted">
                Le traitement peut être mis en place :
              </p>
              <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
                <li>en curatif, lorsque le bois est déjà attaqué</li>
                <li>
                  en préventif, pour protéger une structure saine exposée au
                  risque
                </li>
              </ul>
              <p className="mt-4 text-muted">
                Dans tous les cas, l’objectif est de stopper l’évolution des
                dégâts et de protéger le bâti dans le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cadre + réactivité + à retenir (pleine largeur) */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Cadre professionnel et sécurité
              </h2>
              <p className="mt-4 text-muted">
                Les interventions sont réalisées avec des produits
                professionnels, dans le respect du bâtiment et des occupants.
                Les traitements sont appliqués de manière contrôlée, avec une
                attention particulière portée à la sécurité, tout en assurant
                une efficacité maximale contre les insectes xylophages.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">Réactivité et organisation</div>
              <p className="mt-3 text-muted">
                Flash Nuisible intervient <strong>7j/7</strong>, avec une
                organisation flexible selon l’urgence et l’état du bois.
              </p>
              <p className="mt-3 text-muted">
                Les tarifs sont établis <strong>sur devis</strong>, après
                diagnostic sur place, afin de proposer une solution adaptée à
                chaque situation.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">À retenir</div>
              <p className="mt-3 text-muted">
                Avec les insectes xylophages, plus on attend, plus la structure
                est fragilisée. Une intervention précoce permet d’éviter des
                travaux lourds et coûteux.
              </p>
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
