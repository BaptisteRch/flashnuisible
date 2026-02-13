// app/urgences/cafards-blattes/page.jsx
import Link from "next/link";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";

export const metadata = {
  alternates: { canonical: "/urgences/cafard-blattes" },
  title: "Urgence cafards / blattes — Intervention rapide | Flash Nuisible",
  description:
    "Urgence cafards/blattes : désinsectisation rapide et ciblée. Diagnostic, traitement professionnel, conseils de prévention. Devis gratuit sur demande.",
  alternates: { canonical: "/urgences/cafards-blattes" },
};

export default function UrgenceCafardsBlattesPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <header className="space-y-4">
            <div className="badge">⚡ Urgence</div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Urgence blattes / cafards – intervention rapide et ciblée
            </h1>

            <p className="text-muted font-semibold text-lg">
              Stopper la prolifération et sécuriser les lieux.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn btn-primary">
                Demander une intervention
              </a>
              <Link href="/desinsectisation" className="btn btn-ghost">
                Page Désinsectisation
              </Link>
              <Link href="/problemes/cafards-blattes" className="btn btn-ghost">
                Problématiques
              </Link>
            </div>
          </header>

          <section className="space-y-4 text-muted">
            <p>
              La présence de blattes ou de cafards dans un logement ou un local
              professionnel est toujours le signe d’un problème sérieux.
              Lorsqu’ils sont visibles en journée, qu’ils apparaissent dans la
              cuisine ou les sanitaires, ou que leur nombre semble augmenter
              rapidement, il s’agit très souvent d’une infestation déjà bien
              installée.
            </p>
            <p>
              Dans ce type de situation, une intervention rapide est
              indispensable. Flash Nuisible intervient rapidement pour stopper
              la prolifération et sécuriser les lieux.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Quand une infestation de blattes devient urgente
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Une infestation de cafards doit être traitée en urgence dès que
                leur présence devient régulière ou visible. Les blattes se
                déplacent principalement la nuit, mais lorsqu’elles sortent en
                journée, cela signifie que les zones de refuge sont saturées.
                Dans les logements collectifs comme dans les commerces,
                l’infestation peut alors se propager très rapidement.
              </p>
              <p>
                Dans les restaurants, cuisines professionnelles et locaux
                alimentaires, la situation devient critique en raison des normes
                sanitaires et du risque immédiat de non-conformité.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Pourquoi les blattes représentent un risque sanitaire
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Les cafards sont porteurs de bactéries et de germes qu’ils
                disséminent sur les surfaces, les plans de travail et les
                denrées alimentaires. Ils peuvent être à l’origine de
                contaminations, d’odeurs persistantes et de réactions
                allergiques. Leur capacité à se cacher dans les moindres
                interstices rend les traitements amateurs inefficaces et
                favorise la résistance si l’intervention n’est pas adaptée.
              </p>
              <p>
                Une prise en charge rapide permet de limiter la reproduction et
                d’éviter une infestation durable.
              </p>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Délais d’intervention et prise en charge
            </h2>
            <p className="text-muted">
              Chaque situation est analysée afin de proposer une réponse adaptée
              au niveau d’infestation. Selon le contexte, une intervention est
              possible sous <strong>24 à 48 heures</strong>. Les urgences en
              milieu professionnel ou en habitat collectif sont traitées en
              priorité, compte tenu des risques sanitaires et réglementaires.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule une désinsectisation en urgence
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                L’intervention débute par un diagnostic précis permettant
                d’identifier les zones infestées, les points de passage et les
                sources favorables à la prolifération. Un traitement ciblé est
                ensuite mis en place, adapté à l’environnement et au niveau
                d’infestation. L’objectif est de réduire rapidement l’activité
                des blattes tout en assurant la sécurité des occupants.
              </p>
              <p>
                À l’issue de l’intervention, des recommandations claires sont
                données pour limiter les conditions favorables au retour des
                cafards. Un suivi peut être proposé si la situation l’exige.
              </p>
              <p>
                Les traitements sont réalisés avec des méthodes professionnelles
                conformes à la réglementation en vigueur.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Ce qui est inclus dans une intervention d’urgence contre les
              cafards
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>
                diagnostic de la situation et identification des zones à risque
              </li>
              <li>mise en place d’un traitement professionnel adapté</li>
              <li>
                utilisation de produits certifiés et réservés aux professionnels
              </li>
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
              notamment pour la désinsectisation à Saint-Étienne,
              Saint-Just-Saint-Rambert, Montbrison et Saint-Chamond. Ces pages
              permettent d’adapter le traitement aux contraintes locales et au
              type de bâtiment concerné.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Questions fréquentes sur une urgence cafards / blattes
            </h2>
            <div className="space-y-3">
              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Faut-il quitter le logement pendant l’intervention ?
                </summary>
                <p className="mt-3 text-muted">
                  Il n’est généralement pas nécessaire de quitter le logement
                  pendant l’intervention, les traitements étant appliqués de
                  manière ciblée et sécurisée.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Quand voit-on les premiers résultats ?
                </summary>
                <p className="mt-3 text-muted">
                  Les premiers résultats peuvent être observés rapidement, mais
                  un traitement en plusieurs étapes est parfois nécessaire selon
                  le niveau d’infestation.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Intervenez-vous aussi chez les professionnels ?
                </summary>
                <p className="mt-3 text-muted">
                  Flash Nuisible intervient aussi bien chez les particuliers que
                  chez les professionnels, en tenant compte des exigences
                  sanitaires propres à chaque activité.
                </p>
              </details>

              <details className="glass rounded-2xl p-5">
                <summary className="font-extrabold cursor-pointer">
                  Combien coûte une intervention ?
                </summary>
                <p className="mt-3 text-muted">
                  Le coût dépend de la surface, du type de local et du degré
                  d’infestation. Un devis précis est établi après diagnostic.
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
              manière raisonnée, dans le respect des contraintes sanitaires et
              réglementaires, afin d’obtenir un résultat durable.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Besoin d’une intervention rapide
            </h2>
            <p className="text-muted">
              Si vous constatez la présence de blattes ou de cafards, il est
              préférable d’agir sans attendre. Une désinsectisation en urgence
              permet de limiter la prolifération et d’éviter une installation
              durable de l’infestation.
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
