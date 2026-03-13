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
    serviceLabel: "Xylophages",
    cityName: city.name,
    area: city.area || "Auvergne-Rhône-Alpes",
    slugPath: `xylophages/${city.slug}`,
  });
}

export default async function XylophagesVillePage({ params }) {
  const { ville } = await params;
  const city = getCity(ville);

  if (!city) notFound();

  const VILLE = city.name;
  const AREA = city.area || "Auvergne-Rhône-Alpes";
  const SITE_URL = "https://www.flashnuisible.com";
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
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Xylophages",
            item: `${SITE_URL}/xylophages`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Xylophages à ${VILLE}`,
            item: `${SITE_URL}/xylophages/${city.slug}`,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Flash Nuisible",
        telephone: "+33770353341",
        email: "contact@flashnuisible.fr",
        areaServed: AREA,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/images/og.jpg`,
      },
      {
        "@type": "Service",
        name: `Traitement des insectes xylophages à ${VILLE}`,
        serviceType: "Traitement des insectes xylophages",
        provider: {
          "@type": "LocalBusiness",
          name: "Flash Nuisible",
          url: `${SITE_URL}/`,
        },
        areaServed: VILLE,
        url: `${SITE_URL}/xylophages/${city.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Quels insectes xylophages traitez-vous à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Flash Nuisible intervient selon le diagnostic pour différents insectes xylophages affectant les bois et charpentes.",
            },
          },
          {
            "@type": "Question",
            name: "Quand faut-il traiter ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dès l’apparition de signes comme des trous, sciures, fragilisation du bois ou traces d’activité.",
            },
          },
          {
            "@type": "Question",
            name: "Proposez-vous un devis ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, un devis gratuit peut être établi après premier échange et diagnostic.",
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
              Xylophages à {VILLE}
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Traitement des insectes xylophages – Protection du bois et des
              charpentes
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Flash Nuisible est une entreprise spécialisée dans le traitement
                des insectes xylophages à <strong>{VILLE}</strong>, intervenant
                auprès des particuliers pour protéger durablement le bois, les
                charpentes et les structures contre les attaques d’insectes.
              </p>

              <p>
                Les insectes xylophages s’attaquent directement au bois et
                peuvent fragiliser une structure sans signes visibles immédiats.
                Une intervention rapide à <strong>{VILLE}</strong> permet de
                stopper l’infestation avant que les dégâts ne deviennent
                importants.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
              <a href="/xylophages" className="btn btn-ghost">
                Page Xylophages
              </a>
            </div>
          </div>

          {/* POURQUOI */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Pourquoi traiter les xylophages rapidement à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                À {VILLE}, les charpentes, poutres, solives et autres éléments
                en bois peuvent être exposés aux insectes xylophages, aussi bien
                dans les bâtiments anciens que récents. Les dégâts sont souvent
                progressifs et invisibles au début.
              </p>

              <p>
                Sans traitement professionnel des xylophages, les conséquences
                peuvent être sérieuses : affaiblissement du bois, perte de
                résistance mécanique et, à terme, dégradations structurelles.
              </p>

              <p className="font-semibold">
                👉 Plus on attend, plus la structure est fragilisée.
              </p>
            </div>
          </div>

          {/* DEROULEMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule un traitement xylophages à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                Chaque traitement des xylophages à {VILLE} commence par un
                diagnostic sur place, indispensable pour évaluer l’état réel du
                bois.
              </p>

              <p>
                Flash Nuisible se déplace systématiquement afin d’identifier les
                zones infestées et de proposer un devis gratuit, établi après
                inspection.
              </p>

              <p>
                Le traitement repose sur une méthode complète, réalisée avec des
                produits professionnels, respectueuse du bâtiment et sécurisée
                pour les occupants :
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>brossage du bois pour éliminer la couche de bois mort</li>
                <li>
                  perçage des éléments bois afin de traiter le bois en
                  profondeur
                </li>
                <li>injection du produit au cœur des poutres et structures</li>
                <li>
                  pulvérisation de surface, réalisée deux fois, avec un passage
                  principal puis un retour le lendemain pour assurer une
                  protection optimale
                </li>
              </ul>

              <p>
                Cette approche permet d’agir à la fois en profondeur et en
                surface, condition essentielle pour un traitement efficace des
                insectes xylophages.
              </p>
            </div>
          </div>

          {/* CURATIF / PREVENTIF */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Curatif et prévention à {VILLE}
            </div>

            <p className="mt-3 text-muted">
              Le traitement des xylophages peut être réalisé :
            </p>

            <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
              <li>en curatif, lorsque le bois est déjà attaqué</li>
              <li>
                en préventif, pour protéger une structure saine exposée au
                risque
              </li>
            </ul>

            <p className="mt-3 text-muted">
              Dans tous les cas, l’objectif est de stopper l’évolution des
              dégâts et de préserver le bâti sur le long terme.
            </p>
          </div>

          {/* INTERVENTION */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Intervention xylophages à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible intervient pour le traitement des xylophages à{" "}
              {VILLE} avec une organisation souple et réactive.
            </p>

            <p className="mt-3 text-muted">
              Les interventions sont possibles <strong>7j/7</strong>, selon
              l’urgence et l’état du bois, afin d’éviter toute aggravation.
            </p>

            <p className="mt-3 text-muted">
              Les tarifs sont établis sur devis, après diagnostic sur place,
              afin de proposer une solution réellement adaptée à la situation.
            </p>
          </div>

          {/* DOUTE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Un doute sur la présence d’insectes xylophages à {VILLE} ?
            </h2>

            <p className="mt-4 text-muted">
              Des trous dans le bois, de la sciure ou un bois qui sonne creux
              peuvent être des signes d’infestation.
            </p>

            <p className="mt-3 text-muted">
              👉 En cas de doute, le plus simple est de faire diagnostiquer la
              situation afin d’éviter des dégâts plus importants.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Traitement des xylophages à {VILLE} – Flash Nuisible
            </div>

            <p className="mt-3 text-muted">
              Pour toute intervention contre les insectes xylophages à {VILLE},
              Flash Nuisible vous accompagne avec une approche professionnelle,
              rigoureuse et orientée protection du bâti.
            </p>

            <p className="mt-3 text-muted">
              📍 Intervention à <strong>{VILLE}</strong>, dans{" "}
              <strong>{AREA}</strong>
            </p>

            <p className="mt-3 text-muted">
              📞 Contactez Flash Nuisible pour un diagnostic xylophages sur
              place
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
