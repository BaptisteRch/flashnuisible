import { notFound } from "next/navigation";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";
import { buildLocalMetadata } from "../../lib/seo";
import { getCity, getFeaturedCities } from "../../lib/cities";
import SeoJsonLd from "../../components/SeoJsonLd";

export function generateStaticParams() {
  return getFeaturedCities().map((c) => ({ ville: c.slug }));
}

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return { title: "Flash Nuisible" };

  return buildLocalMetadata({
    serviceLabel: "Dératisation",
    cityName: city.name,
    area: city.area || "Auvergne-Rhône-Alpes",
    slugPath: `deratisation/${city.slug}`,
  });
}

export default async function MoustiquesVillePage({ params }) {
  const { ville } = await params;
  const city = getCity(ville);

  if (!city) notFound();

  const VILLE = city.name;
  const AREA = city.area || "Auvergne-Rhône-Alpes";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.flashnuisible.fr/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Moustiques",
            item: "https://www.flashnuisible.fr/moustiques",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Moustiques à ${VILLE}`,
            item: `https://www.flashnuisible.fr/moustiques/${city.slug}`,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Flash Nuisible",
        telephone: "+33770353341",
        url: "https://www.flashnuisible.fr",
        areaServed: AREA,
      },
      {
        "@type": "Service",
        name: `Traitement des moustiques à ${VILLE}`,
        provider: { "@type": "LocalBusiness", name: "Flash Nuisible" },
        areaServed: VILLE,
        serviceType: "Désinsectisation",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Intervenez-vous rapidement pour un traitement des moustiques à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Flash Nuisible intervient généralement sous 48h, avec une disponibilité 7j/7 et 24h/24, notamment en période estivale selon l’urgence.",
            },
          },
          {
            "@type": "Question",
            name: "Un traitement anti-moustiques élimine-t-il tous les moustiques ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Non. L’objectif est une réduction efficace et maîtrisée des nuisances afin d’améliorer le confort de vie, sans promettre une disparition totale.",
            },
          },
          {
            "@type": "Question",
            name: `Où se fait l’intervention anti-moustiques à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Les traitements moustiques sont réalisés exclusivement en extérieur : jardins, terrasses et abords des habitations, avec une approche curative et préventive selon les zones à risque.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="page">
      <SiteHeader />
      <SeoJsonLd json={jsonLd} />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Moustiques à {VILLE}
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Traitement des moustiques – Intervention extérieure ciblée
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Flash Nuisible est une entreprise spécialisée dans le traitement
                des moustiques à <strong>{VILLE}</strong>, intervenant
                principalement en extérieur, autour des habitations, jardins,
                terrasses et abords de bâtiments, afin de réduire durablement
                les nuisances liées aux moustiques.
              </p>

              <p>
                La présence de moustiques peut rapidement devenir envahissante,
                en particulier pendant les périodes chaudes. Une intervention
                ciblée à <strong>{VILLE}</strong> permet d’améliorer
                significativement le confort de vie, sans promettre
                l’impossible.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
              <a href="/desinsectisation" className="btn btn-ghost">
                Page Désinsectisation
              </a>
            </div>
          </div>

          {/* POURQUOI */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Pourquoi traiter les moustiques à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                À {VILLE}, les moustiques trouvent des conditions favorables à
                leur développement : zones humides, végétation dense, eaux
                stagnantes ou environnements extérieurs peu ventilés. Ils se
                reproduisent rapidement et peuvent rendre l’usage des terrasses
                ou jardins très inconfortable.
              </p>

              <p>
                Il est important d’être clair : un traitement anti-moustiques ne
                vise pas une disparition totale, mais une réduction efficace et
                maîtrisée de la population, suffisante pour retrouver un cadre
                de vie agréable.
              </p>
            </div>
          </div>

          {/* DEROULEMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule un traitement anti-moustiques à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                Chaque traitement des moustiques à {VILLE} commence par un
                diagnostic et un devis gratuits, afin d’identifier les zones à
                risque et les lieux de reproduction.
              </p>

              <p>
                L’intervention est réalisée exclusivement en extérieur et repose
                sur une approche combinée :
              </p>

              <ul className="list-disc pl-5 space-y-2 text-muted">
                <li>
                  un traitement curatif, pour réduire immédiatement la présence
                  des moustiques
                </li>
                <li>
                  des actions préventives, visant à limiter durablement leur
                  développement
                </li>
              </ul>

              <p>
                Cette méthode permet d’agir de manière ciblée, tout en
                respectant l’environnement et l’usage des espaces extérieurs.
              </p>
            </div>
          </div>

          {/* RAPIDITE */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Intervention rapide moustiques à {VILLE}
            </div>

            <p className="mt-3 text-muted">
              Flash Nuisible assure un traitement rapide contre les moustiques à{" "}
              {VILLE}, avec une organisation pensée pour la réactivité.
            </p>

            <p className="mt-3 text-muted">
              Les interventions sont généralement réalisées sous{" "}
              <strong>48h</strong>, avec une disponibilité <strong>7j/7</strong>{" "}
              et <strong>24h/24</strong>, notamment en période estivale.
            </p>
          </div>

          {/* TARIFS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tarifs traitement moustiques à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Les prestations de traitement des moustiques à {VILLE} sont
              proposées avec :
            </p>

            <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
              <li>un devis gratuit</li>
              <li>des tarifs annoncés à l’avance</li>
              <li>
                une solution adaptée à la configuration des lieux et au niveau
                de nuisance
              </li>
            </ul>

            <p className="mt-4 text-muted">
              Aucune intervention n’est engagée sans validation préalable.
            </p>
          </div>

          {/* PROBLEME */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Un problème de moustiques à {VILLE} ?
            </h2>

            <p className="mt-4 text-muted">
              Une forte présence de moustiques peut fortement impacter le
              quotidien.
            </p>

            <p className="mt-3 text-muted">
              👉 Contacter une entreprise spécialisée dans le traitement des
              moustiques à {VILLE} permet de mettre en place une solution
              efficace et adaptée à votre environnement extérieur.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Traitement des moustiques à {VILLE} – Flash Nuisible
            </div>

            <p className="mt-3 text-muted">
              Pour toute intervention anti-moustiques à {VILLE}, Flash Nuisible
              vous accompagne avec une approche professionnelle, réactive et
              orientée confort de vie.
            </p>

            <p className="mt-3 text-muted">
              📍 Intervention à <strong>{VILLE}</strong>, dans{" "}
              <strong>{AREA}</strong>
            </p>

            <p className="mt-3 text-muted">
              📞 Contactez Flash Nuisible pour un diagnostic rapide contre les
              moustiques
            </p>

            <div className="mt-4">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
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
