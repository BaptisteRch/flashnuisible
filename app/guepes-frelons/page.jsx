// app/guepes-frelons/page.jsx
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

export default function GuepesFrelonsPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Guêpes / Frelons
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Destruction de nids – Intervention rapide et sécurisée
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                La présence d’un nid de guêpes ou d’un nid de frelons représente
                un danger réel pour les occupants d’un logement ou d’un
                bâtiment. Les piqûres peuvent être multiples, douloureuses et
                parfois graves.
              </p>

              <p className="text-muted">
                Flash Nuisible intervient pour la destruction de nids de guêpes,
                la destruction de nids de frelons européens et de frelons
                asiatiques, en traitement curatif comme en préventif, avec des
                méthodes professionnelles ciblées.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Demander une intervention
                </a>
                <a href="/#services" className="btn btn-ghost">
                  Voir les services
                </a>
              </div>

              <p className="mt-2 text-m text-muted font-bold text-black">
                ⚠️ N’intervenez pas vous-même : la destruction d’un nid sans
                matériel adapté est fortement déconseillée.
              </p>
            </div>

            <div className="card overflow-hidden">
              <Image
                src="/images/flash/truck-basilique-wide.jpg"
                alt="Intervention guêpes et frelons"
                width={1400}
                height={1000}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Où se trouvent les nids */}
      <Split
        title="Où se trouvent les nids de guêpes et de frelons ?"
        image={
          <Image
            src="/images/flash/action-bw-rack.jpg"
            alt="Nid guêpes frelons - intervention en zone difficile"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Les nids peuvent être installés dans de nombreux endroits, visibles ou
          dissimulés : toiture, sous tuiles, combles, façade, coffret, arbre,
          haie, sol, terrasse ou balcon.
        </p>

        <div className="mt-4 glass rounded-2xl p-5">
          <div className="font-extrabold">Pour intervenir, il faut :</div>
          <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
            <li>soit un nid visible</li>
            <li>
              soit un point d’entrée identifié, avec des allées et venues
              régulières de guêpes ou de frelons
            </li>
          </ul>
        </div>

        <p className="mt-4 text-muted">
          Dans tous les cas, une tentative de destruction de nid par soi-même
          est fortement déconseillée.
        </p>
      </Split>

      {/* Déroulement pro */}
      <Split
        reverse
        title="Déroulement d’une intervention professionnelle"
        image={
          <Image
            src="/images/flash/action-machine.jpg"
            alt="Matériel professionnel guêpes frelons"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Chaque intervention de destruction de nid repose sur un{" "}
          <strong>traitement professionnel ciblé</strong>, réalisé dans des
          conditions de sécurité optimales.
        </p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>élimination complète du nid</li>
          <li>intervention sécurisée pour les occupants</li>
          <li>utilisation de matériel professionnel et de produits adaptés</li>
          <li>
            application d’une poudre insecticide{" "}
            <strong>exclusivement à l’intérieur du nid</strong>, dans une
            logique de respect de l’environnement
          </li>
        </ul>

        <p className="mt-4 text-muted">
          Flash Nuisible est en mesure d’intervenir sur des nids situés jusqu’à{" "}
          <strong>45 mètres</strong> de hauteur, notamment en toiture ou dans
          des zones difficiles d’accès.
        </p>
      </Split>

      {/* Urgence + toiture + tarification (pleine largeur) */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Urgence guêpes / frelons et délais d’intervention
              </h2>

              <p className="mt-4 text-muted">
                La destruction de nids de guêpes ou de frelons est souvent une
                urgence. Flash Nuisible intervient :
              </p>

              <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
                <li>sous 48h</li>
                <li>en urgence si nécessaire</li>
                <li>24h/24 et 7j/7</li>
              </ul>

              <p className="mt-4 text-muted">
                En présence d’un nid actif, il ne faut pas attendre :{" "}
                <strong>ne pas y toucher</strong> et contacter un professionnel
                au plus vite permet d’éviter une aggravation de la situation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Traitement de toiture
              </h2>
              <p className="mt-4 text-muted">
                En complément de la destruction de nids, Flash Nuisible propose
                un traitement de toiture contre les guêpes et frelons, en
                préventif comme en curatif. Ce traitement permet de limiter
                l’installation future de nids sous toiture, au niveau des
                tuiles, débords de toit et points d’accès sensibles.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">Tarification et garantie</div>
              <p className="mt-3 text-muted">
                Un diagnostic et un devis gratuits par téléphone permettent
                d’évaluer rapidement la situation avant intervention.
              </p>
              <p className="mt-3 text-muted">
                Les tarifs sont annoncés à l’avance, à partir de{" "}
                <strong>70 €</strong>, selon le type de nid, la hauteur et
                l’accessibilité.
              </p>
              <p className="mt-3 text-muted">
                Les interventions bénéficient d’une garantie{" "}
                <strong>jusqu’à la fin de l’année en cours</strong>, pour une
                tranquillité durable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Particuliers et professionnels
              </h2>
              <p className="mt-4 text-muted">
                Flash Nuisible intervient principalement chez les particuliers,
                mais également auprès des professionnels. La destruction de nids
                est réalisée avec le même niveau d’exigence, de sécurité et de
                réactivité, quel que soit le site.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">À retenir</div>
              <p className="mt-3 text-muted">
                Un nid de guêpes ou un nid de frelons est une urgence
                potentielle.
                <br />
                <strong>
                  👉 N’intervenez pas vous-même. Faites appel à un
                  professionnel.
                </strong>
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
