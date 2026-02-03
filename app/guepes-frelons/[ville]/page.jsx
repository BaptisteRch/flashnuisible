// app/guepes-frelons/[ville]/page.jsx
import { notFound } from "next/navigation";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";
import { buildLocalMetadata } from "../../lib/seo";
import { getCity, generateCityParams } from "../../lib/cities";

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
    serviceLabel: "Guêpes & Frelons",
    cityName: city.name,
    area: city.area || "Auvergne-Rhône-Alpes",
    slugPath: `guepes-frelons/${city.slug}`,
  });
}

export default async function GuepesFrelonsVillePage({ params }) {
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
          { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guêpes & Frelons",
            item: "/guepes-frelons",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Guêpes et frelons à ${VILLE}`,
            item: `/guepes-frelons/${city.slug}`,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Flash Nuisible",
        telephone: "+33770353341",
        email: "contact@flashnuisible.fr",
        areaServed: AREA,
        url: "/",
        image: "/images/og.jpg",
      },
      {
        "@type": "Service",
        name: `Destruction de nid de guêpes et frelons à ${VILLE}`,
        serviceType: "Destruction de nids de guêpes et frelons",
        provider: { "@type": "LocalBusiness", name: "Flash Nuisible" },
        areaServed: VILLE,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Intervenez-vous rapidement à ${VILLE} pour un nid de guêpes ou de frelons ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Un diagnostic et un devis sont réalisés par téléphone, et l’intervention est généralement possible sous 48h selon l’urgence, avec disponibilité 7j/7 et 24h/24.",
            },
          },
          {
            "@type": "Question",
            name: "Faut-il que le nid soit visible pour intervenir ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Idéalement, oui. À défaut, un point d’entrée identifié avec des allées et venues régulières de guêpes ou de frelons permet d’organiser une intervention adaptée.",
            },
          },
          {
            "@type": "Question",
            name: "Pourquoi ne faut-il pas détruire un nid soi-même ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Une tentative par soi-même est fortement déconseillée : elle augmente le risque de piqûres multiples et peut aggraver la situation. Une intervention professionnelle permet de sécuriser les occupants.",
            },
          },
          {
            "@type": "Question",
            name: "Jusqu’à quelle hauteur pouvez-vous intervenir ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Flash Nuisible peut intervenir sur des nids situés jusqu’à 45 mètres de hauteur, notamment en toiture ou dans des zones difficiles d’accès.",
            },
          },
          {
            "@type": "Question",
            name: "Y a-t-il une garantie après intervention ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Les interventions bénéficient d’une garantie jusqu’à la fin de l’année en cours, selon les conditions définies lors du devis.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="page">
      <SeoJsonLd json={jsonLd} />

      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Guêpes et frelons à {VILLE}
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Destruction de nids de guêpes et frelons – Intervention rapide et
              sécurisée
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Flash Nuisible est une entreprise spécialisée dans la
                destruction de nids de guêpes et de frelons à{" "}
                <strong>{VILLE}</strong>, intervenant principalement auprès des
                particuliers, mais également chez les professionnels lorsque la
                situation l’exige.
              </p>

              <p>
                La présence d’un nid de guêpes, d’un nid de frelons européens ou
                d’un nid de frelons asiatiques représente un danger réel pour
                les occupants. Les piqûres peuvent être multiples, douloureuses
                et parfois graves. Une intervention rapide à{" "}
                <strong>{VILLE}</strong> est essentielle pour sécuriser les
                lieux et éviter une aggravation.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
              <a href="/guepes-frelons" className="btn btn-ghost">
                Page Guêpes & Frelons
              </a>
            </div>
          </div>

          {/* POURQUOI */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Pourquoi intervenir rapidement contre les guêpes et frelons à{" "}
              {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                À {VILLE}, les guêpes et frelons peuvent s’installer dans des
                zones très variées : toiture, sous tuiles, combles, façades,
                arbres, haies, coffrets ou encore au sol. Certains nids sont
                visibles, d’autres beaucoup plus discrets, mais restent tout
                aussi dangereux.
              </p>

              <p>
                Plus un nid reste en place, plus la colonie se développe et plus
                le risque de piqûres augmente, notamment en période estivale.
                Toute tentative d’intervention par soi-même est fortement
                déconseillée.
              </p>
            </div>
          </div>

          {/* DEROULEMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule une intervention guêpes / frelons à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                Chaque intervention de destruction de nid à {VILLE} commence par
                un diagnostic et un devis réalisés par téléphone, afin
                d’identifier rapidement la situation.
              </p>

              <p>
                Pour intervenir, il est nécessaire d’avoir soit un nid visible,
                soit un point d’entrée identifié, avec des allées et venues
                régulières de guêpes ou de frelons.
              </p>

              <p>L’intervention repose sur :</p>

              <ul className="list-disc pl-5 space-y-2 text-muted">
                <li>un traitement professionnel ciblé</li>
                <li>l’élimination complète du nid</li>
                <li>une intervention sécurisée pour les occupants</li>
                <li>
                  l’utilisation de matériel et de produits professionnels, avec
                  une application de poudre exclusivement à l’intérieur du nid,
                  dans une logique de respect de l’environnement
                </li>
              </ul>

              <p>
                Flash Nuisible est en mesure d’intervenir sur des nids situés
                jusqu’à <strong>45 mètres</strong> de hauteur, y compris sur des
                zones difficiles d’accès comme les toitures.
              </p>
            </div>
          </div>

          {/* URGENCE */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Urgence guêpes et frelons à {VILLE}
            </div>

            <p className="mt-3 text-muted">
              Les interventions sont assurées avec une forte réactivité :
            </p>

            <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
              <li>intervention généralement sous 48h</li>
              <li>urgence possible</li>
              <li>disponibilité 7j/7 et 24h/24</li>
            </ul>

            <p className="mt-3 text-muted">
              👉 En présence d’un nid actif, il ne faut pas attendre. Ne pas y
              toucher et contacter un professionnel au plus vite permet d’éviter
              une situation dangereuse.
            </p>
          </div>

          {/* TOITURE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Traitement de toiture : prévention et curatif à {VILLE}
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                En complément de la destruction de nids, Flash Nuisible propose
                un traitement de toiture contre les guêpes et frelons, en
                préventif comme en curatif.
              </p>
              <p>
                Ce traitement permet de limiter l’installation future de nids
                sous les tuiles et dans les zones sensibles du bâti.
              </p>
            </div>
          </div>

          {/* TARIFS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tarifs destruction de nids à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Les prestations de destruction de nids de guêpes et frelons à{" "}
              {VILLE} sont proposées avec :
            </p>

            <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
              <li>un devis gratuit par téléphone</li>
              <li>des tarifs annoncés à l’avance</li>
              <li>
                une intervention à partir de <strong>70 €</strong>, selon
                l’accessibilité, la hauteur et le type de nid
              </li>
            </ul>

            <p className="mt-4 text-muted">
              Les interventions bénéficient d’une garantie jusqu’à la fin de
              l’année en cours.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Guêpes et frelons à {VILLE} – Flash Nuisible
            </div>

            <p className="mt-3 text-muted">
              Pour toute destruction de nid de guêpes ou de frelons à {VILLE},
              Flash Nuisible vous accompagne avec une approche professionnelle,
              sécurisée et réactive.
            </p>

            <p className="mt-3 text-muted">
              📍 Intervention à <strong>{VILLE}</strong>, dans{" "}
              <strong>{AREA}</strong>
            </p>

            <p className="mt-3 text-muted">
              📞 Contactez Flash Nuisible pour une intervention rapide guêpes /
              frelons
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
