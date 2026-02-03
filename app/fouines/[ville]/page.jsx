// app/fouines/[ville]/page.jsx
import { notFound } from "next/navigation";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";
import { buildLocalMetadata } from "../../lib/seo";
import { getCity, generateCityParams } from "../../lib/cities";

import SeoJsonLd from "../../components/SeoJsonLd"; // ✅ AJOUT

export function generateStaticParams() {
  return getFeaturedCities().map((c) => ({ ville: c.slug }));
}

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return { title: "Flash Nuisible" };

  return buildLocalMetadata({
    serviceLabel: "Fouines", // ✅ FIX
    cityName: city.name,
    area: city.area || "Auvergne-Rhône-Alpes",
    slugPath: `fouines/${city.slug}`, // ✅ FIX
  });
}

export default async function FouinesVillePage({ params }) {
  const { ville } = await params;
  const city = getCity(ville);

  if (!city) notFound();

  const VILLE = city.name;
  const AREA = city.area || "Auvergne-Rhône-Alpes";

  // ✅ AJOUT : JSON-LD (invisible, pour Google)
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
            name: "Fouines",
            item: "/fouines",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Fouines à ${VILLE}`,
            item: `/fouines/${city.slug}`,
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
        name: `Protection contre les fouines à ${VILLE}`,
        serviceType: "Protection contre les fouines",
        provider: { "@type": "LocalBusiness", name: "Flash Nuisible" },
        areaServed: VILLE,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "La fouine est-elle protégée ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. La fouine est un animal protégé : il est interdit de la capturer ou de la tuer. L’intervention vise à la faire quitter les lieux puis à sécuriser durablement les accès.",
            },
          },
          {
            "@type": "Question",
            name: `En combien de temps intervenez-vous à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un diagnostic et un devis sont réalisés par téléphone, et l’intervention est généralement possible sous 48h selon l’urgence, 7j/7.",
            },
          },
          {
            "@type": "Question",
            name: "Pourquoi deux passages sont-ils nécessaires ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le premier passage permet d’éloigner l’animal avec un répulsif adapté. Le second passage installe des protections physiques (barrières, rebouchage des accès) pour éviter la récidive.",
            },
          },
          {
            "@type": "Question",
            name: "Le répulsif suffit-il pour empêcher le retour ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Non. Sans protection physique des points d’accès (tout en conservant une aération fonctionnelle), la fouine peut revenir. La sécurisation est la clé d’un résultat durable.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="page">
      <SeoJsonLd json={jsonLd} /> {/* ✅ AJOUT */}
      <SiteHeader />
      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Fouines à {VILLE}
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Protection contre les fouines – Sécurisation des combles et
              toitures
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Flash Nuisible est une entreprise spécialisée dans la protection
                contre les fouines à <strong>{VILLE}</strong>, intervenant
                auprès des particuliers pour prévenir et stopper les dégâts
                causés par les fouines dans les habitations.
              </p>

              <p>
                La fouine est un animal protégé. À ce titre, il est interdit de
                la capturer ou de la tuer. L’objectif d’une intervention contre
                les fouines n’est donc pas d’éliminer l’animal, mais de protéger
                durablement le bâtiment en empêchant tout accès aux combles,
                toitures et zones sensibles.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Contacter Flash Nuisible
              </a>
              <a href="/fouines" className="btn btn-ghost">
                Page Fouines
              </a>
            </div>
          </div>

          {/* POURQUOI */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Pourquoi agir rapidement en cas de fouine à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                À {VILLE}, les fouines s’installent fréquemment dans les
                combles, sous les toitures, au niveau des tuiles, des aérations
                ou des points d’accès du bâti.
              </p>

              <p>
                Leur présence entraîne souvent des bruits nocturnes, des
                dégradations de l’isolation, des détériorations de gaines et des
                nuisances liées aux déjections.
              </p>

              <p>
                Sans protection adaptée, la fouine revient systématiquement.
                Plus on attend, plus les dégâts peuvent s’aggraver.
              </p>
            </div>
          </div>

          {/* DEROULEMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule une intervention fouine à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                Chaque intervention contre les fouines à {VILLE} commence par un
                diagnostic et un devis gratuits par téléphone, afin d’intervenir
                rapidement, généralement sous <strong>48h</strong>,{" "}
                <strong>7j/7</strong>.
              </p>

              <p>
                L’intervention se déroule en deux passages fixes, selon une
                méthode <strong>100 % légale et préventive</strong> :
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Premier passage :</strong> mise en place d’un répulsif
                  naturel professionnel, permettant de faire quitter les lieux à
                  la fouine sans violence, sans capture et sans élimination.
                </li>
                <li>
                  <strong>Second passage (15 jours plus tard) :</strong>{" "}
                  installation de barrières physiques au niveau des tuiles et
                  des points d’accès, rebouchage des entrées potentielles, tout
                  en conservant une aération fonctionnelle du bâtiment.
                </li>
              </ul>

              <p>
                Cette protection physique est indispensable : le répulsif seul
                ne suffit pas à empêcher le retour de la fouine.
              </p>
            </div>
          </div>

          {/* SOLUTION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Une solution durable et préventive
            </div>

            <p className="mt-3 text-muted">
              L’objectif du traitement fouine est de bloquer durablement l’accès
              aux combles et à la toiture.
            </p>

            <p className="mt-3 text-muted">
              La mise en place de barrières physiques adaptées permet d’éviter
              toute récidive et de protéger le bâtiment sur le long terme.
            </p>

            <p className="mt-3 text-muted">
              Les interventions sont proposées avec un forfait annoncé à
              l’avance, sans surprise.
            </p>
          </div>

          {/* BATIMENTS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tous types de bâtiments à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible intervient contre les fouines à {VILLE} sur tous
              types de bâtiments : maisons individuelles, bâtiments anciens ou
              récents, dépendances et autres structures.
            </p>
          </div>

          {/* DOUTE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Un doute sur la présence d’une fouine à {VILLE} ?
            </h2>

            <p className="mt-4 text-muted">
              Des bruits dans les combles ou des dégradations visibles peuvent
              indiquer la présence d’une fouine.
            </p>

            <p className="mt-3 text-muted">
              👉 En cas de doute, le plus simple est d’appeler afin de confirmer
              la situation et de mettre en place une solution légale et
              efficace.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Fouines à {VILLE} – Flash Nuisible
            </div>

            <p className="mt-3 text-muted">
              Pour toute protection contre les fouines à {VILLE}, Flash Nuisible
              vous accompagne avec une approche professionnelle, réglementaire
              et orientée prévention.
            </p>

            <p className="mt-3 text-muted">
              📍 Intervention à <strong>{VILLE}</strong>, dans{" "}
              <strong>{AREA}</strong>
            </p>

            <p className="mt-3 text-muted">
              📞 Contactez Flash Nuisible pour un diagnostic rapide fouines
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
