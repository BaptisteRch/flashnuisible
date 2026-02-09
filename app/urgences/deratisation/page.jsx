// app/urgences/deratisation/page.jsx
import Link from "next/link";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";

export const metadata = {
  title:
    "Urgence dératisation (rats & souris) — Intervention rapide | Flash Nuisible",
  description:
    "Urgence dératisation : intervention rapide rats et souris. Diagnostic, traitement professionnel, conseils de prévention. Devis gratuit sur demande.",
  alternates: { canonical: "/urgences/deratisation" },
};

export default function UrgenceDeratisationPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {/* HERO */}
          <header className="space-y-4">
            <div className="badge">⚡ Urgence</div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Urgence dératisation – intervention rapide rats et souris
            </h1>

            <p className="text-muted font-semibold text-lg">
              Stopper rapidement l’activité des rongeurs et sécuriser les lieux.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn btn-primary">
                Demander une intervention
              </a>
              <Link href="/deratisation" className="btn btn-ghost">
                Page Dératisation
              </Link>
              <Link href="/problemes/deratisation" className="btn btn-ghost">
                Problématiques
              </Link>
            </div>
          </header>

          {/* CONTENU */}
          <section className="space-y-4 text-muted">
            <p>
              La présence de rats ou de souris dans un logement ou un local
              professionnel doit toujours être prise au sérieux. Bruits dans les
              murs, traces visibles ou odeurs inhabituelles sont souvent les
              signes d’une infestation déjà installée. Dans ce type de
              situation, attendre ne fait qu’augmenter les risques sanitaires et
              les dégâts matériels.
            </p>
            <p>
              Flash Nuisible intervient rapidement afin de stopper l’activité
              des rongeurs et sécuriser les lieux.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Quand une dératisation devient urgente
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Une dératisation doit être considérée comme urgente lorsque
                certains signaux apparaissent clairement. Il peut s’agir de
                rongeurs visibles en journée, de bruits répétés dans les murs ou
                les plafonds, ou encore de traces laissées dans les zones de
                passage. Dans les commerces, restaurants et locaux
                professionnels, la situation devient critique en raison des
                obligations sanitaires et du risque de non-conformité.
              </p>
              <p>
                Dans tous les cas, plus l’intervention est tardive, plus
                l’infestation a le temps de se développer.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Les risques liés à une infestation de rongeurs
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Les rats et les souris représentent bien plus qu’une simple
                nuisance. Ils peuvent transmettre des maladies, contaminer les
                surfaces et les denrées alimentaires, et provoquer des dégâts
                matériels importants. Les câbles électriques, isolants et
                structures sont particulièrement exposés, avec parfois des
                conséquences coûteuses ou dangereuses.
              </p>
              <p>
                Une dératisation en urgence permet de reprendre rapidement le
                contrôle et d’éviter une aggravation de la situation.
              </p>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Délais d’intervention et prise en charge
            </h2>
            <p className="text-muted">
              Chaque demande est analysée afin de proposer une réponse adaptée.
              Selon le contexte, une intervention est possible sous{" "}
              <strong>24 à 48 heures</strong>. Les situations présentant un
              risque sanitaire ou réglementaire sont traitées en priorité, aussi
              bien pour les particuliers que pour les professionnels.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule une dératisation en urgence
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                L’intervention débute par un diagnostic rapide sur place afin
                d’identifier les zones de passage, les points d’entrée et le
                niveau d’infestation. Un dispositif de dératisation est ensuite
                mis en place, avec des postes d’appâtage sécurisés et adaptés à
                l’environnement. L’objectif est de réduire rapidement l’activité
                des rongeurs tout en protégeant les occupants et les zones
                sensibles.
              </p>
              <p>
                À l’issue de l’intervention, des recommandations précises sont
                fournies pour limiter les risques de réinfestation. Un suivi
                peut être proposé si la situation le nécessite.
              </p>
              <p>
                Toutes les interventions sont réalisées avec des méthodes
                professionnelles conformes à la réglementation en vigueur.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Ce qui est inclus dans une dératisation d’urgence
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>déplacement et diagnostic de la situation</li>
              <li>mise en place d’un traitement adapté</li>
              <li>utilisation de produits professionnels certifiés</li>
              <li>conseils de prévention personnalisés</li>
              <li>
                rapport d’intervention sur demande, notamment pour les
                professionnels et syndics
              </li>
            </ul>
          </section>

          <section className="space-y-4 text-muted">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Intervention locale et zones couvertes
            </h2>
            <p>
              Flash Nuisible intervient rapidement sur l’ensemble de son
              secteur. Pour une prise en charge locale détaillée, des pages
              spécifiques sont disponibles selon votre zone d’intervention,
              notamment pour la dératisation à Saint-Étienne,
              Saint-Just-Saint-Rambert, Montbrison et Saint-Chamond. Ces pages
              permettent d’adapter l’intervention aux contraintes locales et au
              type de bâtiment concerné.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Questions fréquentes sur la dératisation en urgence
            </h2>
            <div className="space-y-3">
              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Faut-il quitter le logement pendant l’intervention ?
                </summary>
                <p className="mt-3 text-muted">
                  Il n’est généralement pas nécessaire de quitter le logement
                  pendant l’intervention, les dispositifs étant sécurisés.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Quand voit-on les premiers résultats ?
                </summary>
                <p className="mt-3 text-muted">
                  Les premiers résultats sont souvent visibles rapidement, même
                  si un suivi peut être nécessaire selon l’ampleur de
                  l’infestation.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Intervenez-vous aussi pour les professionnels ?
                </summary>
                <p className="mt-3 text-muted">
                  Flash Nuisible intervient aussi bien pour les particuliers que
                  pour les professionnels, en tenant compte des exigences
                  sanitaires propres à chaque activité.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Combien coûte une dératisation en urgence ?
                </summary>
                <p className="mt-3 text-muted">
                  Le coût dépend de plusieurs facteurs comme la surface à
                  traiter et le niveau d’infestation. Un devis précis est établi
                  après diagnostic.
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
              réactive, avec un interlocuteur unique et des méthodes
              professionnelles éprouvées. Chaque situation est traitée de
              manière adaptée, dans le respect des contraintes sanitaires et
              réglementaires, aussi bien pour les particuliers que pour les
              professionnels.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Besoin d’une intervention rapide
            </h2>
            <p className="text-muted">
              Si vous suspectez la présence de rats ou de souris, il est
              préférable d’agir sans attendre. Une dératisation en urgence
              permet de limiter les dégâts et d’éviter une aggravation rapide de
              la situation.
            </p>
            <p className="text-muted font-semibold">
              Contactez Flash Nuisible pour une intervention rapide — Devis
              gratuit et diagnostic sur demande
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
