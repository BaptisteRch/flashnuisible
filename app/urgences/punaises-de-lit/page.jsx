// app/urgences/punaises-de-lit/page.jsx
import Link from "next/link";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";

export const metadata = {
  alternates: { canonical: "/urgences/punaises-de-lit" },
  title:
    "Urgence punaises de lit — Intervention rapide et discrète | Flash Nuisible",
  description:
    "Urgence punaises de lit : prise en charge rapide, traitement professionnel, consignes claires et suivi. Devis gratuit sur demande.",
  alternates: { canonical: "/urgences/punaises-de-lit" },
};

export default function UrgencePunaisesDeLitPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <header className="space-y-4">
            <div className="badge">⚡ Urgence</div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Urgence punaises de lit – intervention rapide et discrète
            </h1>

            <p className="text-muted font-semibold text-lg">
              Stopper la prolifération et traiter le problème à la source.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn btn-primary">
                Demander une intervention
              </a>
              <Link href="/desinsectisation" className="btn btn-ghost">
                Page Désinsectisation
              </Link>
              <Link href="/problemes/punaises-de-lit" className="btn btn-ghost">
                Problématiques
              </Link>
            </div>
          </header>

          <section className="space-y-4 text-muted">
            <p>
              La présence de punaises de lit est une situation particulièrement
              stressante. Piqûres répétées, démangeaisons, traces sur les draps
              ou sensation d’insectes la nuit sont souvent les premiers signes
              d’une infestation. Contrairement aux idées reçues, les punaises de
              lit se propagent très vite et ne disparaissent jamais seules.
            </p>
            <p>
              Dans ce type de situation, une intervention rapide est
              indispensable. Flash Nuisible intervient rapidement pour stopper
              la prolifération et traiter le problème à la source.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Quand une infestation de punaises de lit devient urgente
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Une infestation doit être considérée comme urgente dès que les
                piqûres se répètent ou que des signes visibles apparaissent dans
                la literie, les meubles ou les textiles. Les punaises de lit se
                cachent dans les matelas, sommiers, plinthes et fissures, ce qui
                rend leur détection difficile au début. Plus l’intervention est
                retardée, plus elles se dispersent dans le logement ou vers
                d’autres appartements.
              </p>
              <p>
                En habitat collectif ou dans les établissements recevant du
                public, l’urgence est encore plus marquée en raison du risque de
                propagation.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Pourquoi les punaises de lit sont un vrai problème
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Les punaises de lit ne transmettent pas de maladies, mais leurs
                piqûres provoquent des démangeaisons importantes, des réactions
                cutanées et parfois des troubles du sommeil ou un stress
                important. Leur résistance et leur capacité à survivre longtemps
                sans se nourrir rendent les traitements amateurs inefficaces,
                voire contre-productifs.
              </p>
              <p>
                Une prise en charge professionnelle permet d’éviter
                l’aggravation de l’infestation et les traitements à répétition.
              </p>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Délais d’intervention et prise en charge
            </h2>
            <p className="text-muted">
              Chaque situation est analysée afin de proposer une réponse adaptée
              au niveau d’infestation et à la configuration des lieux. Selon le
              contexte, une intervention est possible sous{" "}
              <strong>24 à 48 heures</strong>. Les urgences en logement
              collectif, hébergement temporaire ou contexte sensible sont
              traitées en priorité.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule un traitement en urgence contre les punaises de
              lit
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                L’intervention commence par une évaluation précise de la
                situation afin d’identifier les zones infestées et le niveau de
                propagation. Un traitement professionnel est ensuite mis en
                place, ciblant les zones de refuge des punaises de lit.
                L’objectif est de réduire rapidement leur activité tout en
                préparant une élimination durable.
              </p>
              <p>
                Des consignes claires sont données avant et après
                l’intervention, notamment concernant le linge, les textiles et
                l’organisation du logement. Un suivi est généralement nécessaire
                afin de garantir l’efficacité du traitement.
              </p>
              <p>
                Les méthodes utilisées sont professionnelles et conformes à la
                réglementation en vigueur.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Ce qui est inclus dans une intervention d’urgence punaises de lit
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>diagnostic de la situation et évaluation de l’infestation</li>
              <li>mise en place d’un traitement professionnel adapté</li>
              <li>
                utilisation de produits et méthodes réservés aux professionnels
              </li>
              <li>consignes précises avant et après intervention</li>
              <li>suivi si nécessaire pour sécuriser le résultat</li>
            </ul>
          </section>

          <section className="space-y-4 text-muted">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Intervention locale et zones couvertes
            </h2>
            <p>
              Flash Nuisible intervient rapidement sur l’ensemble de son
              secteur. Des pages locales permettent de détailler les
              interventions selon votre zone, notamment pour Saint-Étienne,
              Saint-Just-Saint-Rambert, Montbrison et Saint-Chamond, afin
              d’adapter la prise en charge aux contraintes du logement et de
              l’environnement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Questions fréquentes sur une urgence punaises de lit
            </h2>
            <div className="space-y-3">
              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Faut-il quitter le logement ?
                </summary>
                <p className="mt-3 text-muted">
                  Il n’est pas toujours nécessaire de quitter le logement, cela
                  dépend du type de traitement mis en place et de la
                  configuration des lieux.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Les résultats sont-ils rapides ?
                </summary>
                <p className="mt-3 text-muted">
                  Les premiers résultats peuvent être observés rapidement, mais
                  un traitement en plusieurs étapes est souvent indispensable
                  pour éliminer totalement l’infestation.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Combien coûte une intervention ?
                </summary>
                <p className="mt-3 text-muted">
                  Le coût dépend du nombre de pièces et du niveau d’infestation.
                  Un devis précis est établi après diagnostic.
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
              réactive, discrète et professionnelle. Chaque situation est
              traitée avec méthode, en tenant compte des contraintes humaines,
              techniques et réglementaires, afin d’obtenir un résultat durable.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Besoin d’une intervention rapide
            </h2>
            <p className="text-muted">
              Si vous suspectez la présence de punaises de lit, il est important
              d’agir sans attendre. Une prise en charge rapide permet de limiter
              la propagation et de retrouver un environnement sain.
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
