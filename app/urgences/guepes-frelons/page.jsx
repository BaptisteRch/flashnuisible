// app/urgences/guepes-frelons/page.jsx
import Link from "next/link";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";

export const metadata = {
  alternates: { canonical: "/urgences/guepes-frelons" },
  title:
    "Urgence guêpes / frelons — Intervention rapide et sécurisée | Flash Nuisible",
  description:
    "Urgence nid de guêpes ou frelons : intervention rapide, sécurisée et professionnelle. Évaluation, traitement, conseils. Devis sur demande.",
  alternates: { canonical: "/urgences/guepes-frelons" },
};

export default function UrgenceGuepesFrelonsPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <header className="space-y-4">
            <div className="badge">⚡ Urgence</div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Urgence guêpes / frelons – intervention rapide et sécurisée
            </h1>

            <p className="text-muted font-semibold text-lg">
              Ne pas intervenir soi-même : sécuriser les lieux rapidement.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn btn-primary">
                Demander une intervention
              </a>
              <Link href="/guepes-frelons" className="btn btn-ghost">
                Page Guêpes & Frelons
              </Link>
              <Link href="/problemes/guepes-frelons" className="btn btn-ghost">
                Problématiques
              </Link>
            </div>
          </header>

          <section className="space-y-4 text-muted">
            <p>
              La présence d’un nid de guêpes ou de frelons à proximité d’une
              habitation ou d’un local professionnel constitue une urgence
              potentiellement dangereuse. Agressivité accrue, va-et-vient
              incessant d’insectes, piqûres à répétition ou nid visible sont
              autant de signaux à ne pas ignorer.
            </p>
            <p>
              Dans ce type de situation, il ne faut jamais intervenir soi-même.
              Flash Nuisible intervient rapidement pour neutraliser le danger et
              sécuriser les lieux.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Quand une intervention devient urgente
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Une intervention contre les guêpes ou les frelons doit être
                considérée comme urgente dès lors que le nid se situe à
                proximité immédiate des zones de passage. Un nid sous toiture,
                dans un coffrage, une haie, un garage ou un mur expose
                directement les occupants, les voisins ou les clients à un
                risque de piqûres.
              </p>
              <p>
                La vigilance doit être maximale en présence d’enfants, de
                personnes allergiques ou lorsque le site concerné est un
                établissement recevant du public.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Pourquoi les guêpes et frelons sont dangereux
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Les guêpes et frelons défendent activement leur nid. Une simple
                vibration ou tentative de destruction peut provoquer une attaque
                collective. Les piqûres sont douloureuses et peuvent entraîner
                des réactions graves chez certaines personnes, allant jusqu’au
                choc allergique.
              </p>
              <p>
                Les frelons, notamment lorsqu’ils sont installés en hauteur ou
                dans des zones difficiles d’accès, représentent un danger
                supplémentaire en raison de leur taille et de leur agressivité.
                Une prise en charge professionnelle permet d’éliminer le risque
                sans exposition inutile.
              </p>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Délais d’intervention et prise en charge
            </h2>
            <p className="text-muted">
              Chaque demande est évaluée afin de proposer une intervention
              adaptée à la localisation du nid et au niveau de danger. Selon la
              situation, une intervention est possible sous{" "}
              <strong>24 à 48 heures</strong>. Les situations présentant un
              risque immédiat pour les personnes sont traitées en priorité.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule une intervention en urgence
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                L’intervention débute par une analyse précise de l’emplacement
                du nid et de l’activité des insectes. Un traitement
                professionnel est ensuite mis en œuvre, en tenant compte de
                l’accessibilité, de l’environnement et de la sécurité des
                occupants. L’objectif est de neutraliser le nid de manière
                efficace tout en évitant toute propagation ou réaction
                agressive.
              </p>
              <p>
                Des consignes claires sont données avant et après l’intervention
                afin de garantir la sécurité. Les méthodes utilisées sont
                professionnelles et conformes à la réglementation en vigueur.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Ce qui est inclus dans une intervention d’urgence guêpes / frelons
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>évaluation du danger et localisation du nid</li>
              <li>mise en place d’un traitement professionnel sécurisé</li>
              <li>utilisation de produits et équipements adaptés</li>
              <li>sécurisation de la zone d’intervention</li>
              <li>conseils après intervention pour éviter les récidives</li>
            </ul>
          </section>

          <section className="space-y-4 text-muted">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Intervention locale et zones couvertes
            </h2>
            <p>
              Flash Nuisible intervient rapidement sur l’ensemble de son
              secteur. Des pages locales détaillent les interventions selon
              votre zone, notamment pour Saint-Étienne,
              Saint-Just-Saint-Rambert, Montbrison et Saint-Chamond, afin
              d’adapter l’intervention aux contraintes du site et à
              l’environnement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Questions fréquentes sur une urgence guêpes / frelons
            </h2>
            <div className="space-y-3">
              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Peut-on détruire un nid soi-même ?
                </summary>
                <p className="mt-3 text-muted">
                  Il est fortement déconseillé de tenter de détruire un nid
                  soi-même, même avec des produits du commerce.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Faut-il quitter le logement pendant l’intervention ?
                </summary>
                <p className="mt-3 text-muted">
                  L’intervention ne nécessite généralement pas de quitter le
                  logement, sauf consigne particulière liée à l’accessibilité du
                  nid.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Les résultats sont-ils immédiats ?
                </summary>
                <p className="mt-3 text-muted">
                  Les résultats sont immédiats après l’intervention, avec une
                  disparition rapide de l’activité.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Combien coûte l’intervention ?
                </summary>
                <p className="mt-3 text-muted">
                  Le coût dépend principalement de l’emplacement du nid et de la
                  complexité de l’intervention ; un devis précis est établi
                  après évaluation.
                </p>
              </details>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Pourquoi faire appel à Flash Nuisible
            </h2>
            <p className="text-muted">
              Faire appel à Flash Nuisible, c’est choisir une intervention
              rapide, sécurisée et réalisée par un interlocuteur unique. Chaque
              situation est traitée avec sérieux et méthode, dans le respect des
              règles de sécurité et de la réglementation, afin d’éliminer le
              danger durablement.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Besoin d’une intervention rapide
            </h2>
            <p className="text-muted">
              Si vous constatez la présence d’un nid de guêpes ou de frelons,
              n’attendez pas. Une intervention rapide permet d’éviter les
              piqûres et les situations à risque.
            </p>
            <p className="text-muted font-semibold">
              Contactez Flash Nuisible pour une intervention rapide — Devis et
              diagnostic sur demande
            </p>
            <div className="pt-2">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
            </div>
          </section>
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
