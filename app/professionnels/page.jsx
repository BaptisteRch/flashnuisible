// app/professionnels/page.jsx
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

export default function ProfessionnelsPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Professionnels
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Lutte contre les nuisibles & contrats de sanitation
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                Flash Nuisible accompagne les professionnels dans la lutte
                contre les nuisibles, avec une approche structurée, conforme aux
                exigences réglementaires et adaptée aux réalités du terrain.
              </p>

              <p className="text-muted">
                L’objectif est simple : assurer des locaux{" "}
                <strong>sains, conformes et protégés</strong>, sans perturber
                l’activité.
              </p>

              <p className="text-muted">
                Flash Nuisible intervient auprès de tous types de
                professionnels, avec une expertise particulièrement développée
                pour les{" "}
                <strong>
                  commerces de bouche (restaurants, bars, boulangeries,
                  pâtisseries)
                </strong>
                , mais également pour les commerces, bureaux, entrepôts, syndics
                et autres structures professionnelles.
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
                src="/images/flash/action-bw-coffee.webp"
                alt="Intervention en environnement professionnel"
                width={1200}
                height={900}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problématiques */}
      <Split
        title="Problématiques traitées chez les professionnels"
        image={
          <Image
            src="/images/flash/pro3.webp"
            alt="Interventions nuisibles - locaux professionnels"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Les interventions concernent principalement :
        </p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>
            la <strong>dératisation</strong> (rats, souris, rongeurs)
          </li>
          <li>
            la <strong>désinsectisation</strong>, notamment cafards / blattes,
            mouches
          </li>
          <li>
            les <strong>moustiques</strong>, en particulier pour les terrasses
            de restaurants
          </li>
        </ul>

        <p className="mt-4 text-muted">
          Chaque situation est analysée afin de proposer une solution adaptée au
          site, à l’activité et aux contraintes réglementaires.
        </p>
      </Split>

      {/* Interventions / contrats */}
      <Split
        reverse
        title="Interventions ponctuelles et contrats de suivi"
        image={
          <Image
            src="/images/flash/action-machine (1).webp"
            alt="Sanitation et suivi - matériel professionnel"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">Flash Nuisible propose :</p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>
            des <strong>interventions ponctuelles</strong>, en cas de problème
            identifié
          </li>
          <li>
            des <strong>contrats de sanitation</strong> contre les nuisibles,
            avec un suivi régulier
          </li>
        </ul>

        <p className="mt-4 text-muted">
          Les contrats sont entièrement adaptés à la problématique : fréquence
          des passages, zones à traiter, type de nuisible, niveau de risque.
        </p>

        <p className="mt-4 text-muted">
          Un contrat de sanitation peut être mis en place{" "}
          <strong>à partir de 25 € HT / mois</strong>, selon les besoins du
          site.
        </p>
      </Split>

      {/* Conformité + Réactivité + Tarifs + Conclusion (pleine largeur) */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Conformité, traçabilité et cadre réglementaire
              </h2>

              <p className="mt-4 text-muted">
                Les prestations professionnelles sont réalisées dans un cadre
                strictement conforme :
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="card p-6">
                  <div className="font-extrabold">Certibiocide</div>
                  <p className="mt-2 text-muted">
                    Interventions encadrées et réglementation maîtrisée.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">Normes HACCP</div>
                  <p className="mt-2 text-muted">
                    Méthodes et pratiques adaptées aux exigences sanitaires.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">Traçabilité complète</div>
                  <p className="mt-2 text-muted">
                    Historique des interventions et suivi des actions.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">Rapports & attestations</div>
                  <p className="mt-2 text-muted">
                    Rapports d’intervention fournis, attestations disponibles en
                    cas de contrôle.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-muted">
                Cette approche permet aux professionnels de répondre sereinement
                aux exigences sanitaires et aux contrôles.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">Réactivité et disponibilité</div>
              <p className="mt-3 text-muted">
                Flash Nuisible se distingue par une forte réactivité et une
                disponibilité constante. Les interventions peuvent être
                réalisées rapidement, avec une disponibilité{" "}
                <strong>24h/24 et 7j/7</strong>, y compris en cas d’urgence.
              </p>
              <p className="mt-3 text-muted">
                Les professionnels apprécient une relation claire et directe,
                avec du dialogue, des explications compréhensibles et des
                décisions adaptées à la réalité du terrain.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Tarification claire
              </h2>
              <p className="mt-4 text-muted">
                Les prestations sont proposées avec :
              </p>
              <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
                <li>
                  un <strong>devis gratuit</strong>
                </li>
                <li>des tarifs adaptés à l’activité et au site</li>
                <li>aucune grille standard imposée aux professionnels</li>
              </ul>
              <p className="mt-4 text-muted">
                L’objectif est de proposer une solution cohérente, efficace et
                conforme, sans surcoût inutile.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">
                Un prestataire fiable sur qui compter
              </div>
              <p className="mt-3 text-muted">
                Flash Nuisible s’inscrit dans une logique de partenariat durable
                avec les professionnels. Réactivité, disponibilité, sérieux et
                efficacité sont les bases d’une collaboration de confiance.
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
