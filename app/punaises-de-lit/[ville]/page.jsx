import Link from "next/link";
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
    serviceLabel: "Punaises de lit",
    cityName: city.name,
    area: city.area || "Auvergne-Rhône-Alpes",
    slugPath: `punaises-de-lit/${city.slug}`,
  });
}

export default async function PunaisesVillePage({ params }) {
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
            item: "https://www.flashnuisible.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Punaises de lit",
            item: "https://www.flashnuisible.com/punaises-de-lit",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Punaises de lit à ${VILLE}`,
            item: `https://www.flashnuisible.com/punaises-de-lit/${city.slug}`,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Flash Nuisible",
        telephone: "+33770353341",
        url: "https://www.flashnuisible.com",
        areaServed: AREA,
      },
      {
        "@type": "Service",
        name: `Traitement des punaises de lit à ${VILLE}`,
        provider: { "@type": "LocalBusiness", name: "Flash Nuisible" },
        areaServed: VILLE,
        serviceType: "Désinsectisation",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Intervenez-vous rapidement pour un traitement des punaises de lit à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Un diagnostic et un devis gratuits par téléphone permettent d’intervenir rapidement, généralement sous 48h, selon l’urgence.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de passages sont nécessaires pour traiter les punaises de lit ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Deux passages sont réalisés, espacés de 15 jours, afin de traiter l’ensemble du cycle de vie des punaises de lit et limiter les risques de recontamination.",
            },
          },
          {
            "@type": "Question",
            name: `Dois-je préparer le logement avant l’intervention à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Un protocole précis avec des consignes claires est communiqué avant, pendant, entre les deux passages et après le traitement, pour optimiser l’efficacité et éviter les récidives.",
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
              Punaises de lit à {VILLE}
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Traitement des punaises de lit – Désinsectisation professionnelle
              rapide
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Flash Nuisible est une entreprise spécialisée dans le traitement
                des punaises de lit à <strong>{VILLE}</strong>, intervenant
                auprès des particuliers confrontés à une infestation de punaises
                de lit dans leur logement.
              </p>

              <p>
                Les punaises de lit sont des insectes nuisibles particulièrement
                difficiles à éliminer. Elles se cachent dans la literie, les
                meubles, les plinthes et les recoins, et se déplacent facilement
                d’une pièce à l’autre. Une intervention rapide à{" "}
                <strong>{VILLE}</strong> est indispensable pour éviter une
                propagation de l’infestation.
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
              Pourquoi traiter les punaises de lit rapidement à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                À {VILLE}, les infestations de punaises de lit concernent aussi
                bien les appartements que les maisons. Une infestation non
                traitée peut rapidement devenir envahissante et affecter le
                confort de vie.
              </p>

              <p>
                Sans traitement professionnel des punaises de lit, les
                conséquences peuvent être :
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>une multiplication rapide des insectes</li>
                <li>des piqûres répétées, souvent nocturnes</li>
                <li>une dégradation du sommeil et du quotidien</li>
                <li>
                  une infestation difficile à éliminer avec des solutions non
                  professionnelles
                </li>
              </ul>

              <p>
                Plus l’intervention est tardive, plus le traitement peut
                s’allonger.
              </p>
            </div>
          </div>

          {/* DEROULEMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule un traitement punaises de lit à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                Chaque traitement de punaises de lit à {VILLE} commence par un
                diagnostic et un devis gratuits par téléphone, permettant
                d’identifier la situation et d’intervenir rapidement,
                généralement sous <strong>48h</strong>.
              </p>

              <p>
                Le traitement repose sur une méthode professionnelle adaptée au
                niveau d’infestation, combinant selon les cas :
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>un traitement chimique</li>
                <li>et/ou un traitement vapeur</li>
              </ul>

              <p>
                Deux passages sont réalisés, espacés de{" "}
                <strong>15 jours</strong>, afin de traiter l’ensemble du cycle
                de vie des punaises de lit.
              </p>

              <p>
                Un protocole précis est communiqué, avec des consignes à
                respecter avant l’intervention, pendant le traitement, entre les
                deux passages et après le second passage. Ce cadre est essentiel
                pour garantir l’efficacité du traitement et éviter toute
                recontamination.
              </p>
            </div>
          </div>

          {/* ACCOMPAGNEMENT */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Accompagnement et suivi à {VILLE}
            </div>

            <p className="mt-3 text-muted">
              Le traitement des punaises de lit nécessite rigueur et méthode.
              Flash Nuisible assure un accompagnement complet, avec :
            </p>

            <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
              <li>des explications claires</li>
              <li>un suivi entre les passages</li>
              <li>une adaptation du traitement si nécessaire</li>
            </ul>

            <p className="mt-3 text-muted">
              Cet accompagnement permet de sécuriser le résultat et de limiter
              les risques de récidive.
            </p>
          </div>

          {/* RAPIDITE */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Intervention rapide punaises de lit à {VILLE}
            </div>
            <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
              <li>intervention généralement sous 48h</li>
              <li>disponibilité 7j/7 et 24h/24</li>
              <li>prise en charge efficace des situations urgentes</li>
            </ul>
            <p className="mt-3 text-muted">
              La réactivité est un élément clé dans la lutte contre les punaises
              de lit.
            </p>
          </div>

          {/* TARIFS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tarifs de traitement punaises de lit à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Les prestations de traitement des punaises de lit à {VILLE} sont
              proposées avec :
            </p>

            <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
              <li>un devis gratuit par téléphone</li>
              <li>des tarifs forfaitaires annoncés à l’avance</li>
              <li>une solution adaptée à chaque situation</li>
            </ul>

            <p className="mt-4 text-muted">
              Aucun traitement n’est engagé sans validation préalable.
            </p>
          </div>

          {/* DOUTE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Un doute sur la présence de punaises de lit à {VILLE} ?
            </h2>

            <p className="mt-4 text-muted">
              Des piqûres, des traces ou des insectes visibles peuvent faire
              naître un doute.
            </p>

            <p className="mt-3 text-muted">
              👉 En cas de suspicion, contacter une entreprise spécialisée dans
              le traitement des punaises de lit à {VILLE} permet d’évaluer
              rapidement la situation et d’éviter une propagation de
              l’infestation.
            </p>
          </div>

          {/* PRO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Traitement punaises de lit pour les professionnels à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible intervient également pour le traitement des
              punaises de lit chez les professionnels à {VILLE}, avec des
              solutions adaptées.{" "}
              <Link href="/professionnels" className="underline font-semibold">
                Une page dédiée présente les prestations professionnelles
              </Link>
              .
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Traitement des punaises de lit à {VILLE} – Flash Nuisible
            </div>

            <p className="mt-3 text-muted">
              Pour toute désinsectisation punaises de lit à {VILLE}, Flash
              Nuisible vous accompagne avec une approche professionnelle,
              réactive et efficace.
            </p>

            <p className="mt-3 text-muted">
              📍 Intervention à <strong>{VILLE}</strong>, dans{" "}
              <strong>{AREA}</strong>
            </p>

            <p className="mt-3 text-muted">
              📞 Contactez Flash Nuisible pour un diagnostic rapide punaises de
              lit
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
