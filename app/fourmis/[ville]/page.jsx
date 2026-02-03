// app/fourmis/[ville]/page.jsx
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

export const revalidate = 60 * 60 * 24 * 30; // 30 jours

export async function generateMetadata({ params }) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return { title: "Flash Nuisible" };

  return buildLocalMetadata({
    serviceLabel: "Fourmis",
    cityName: city.name,
    area: city.area || "Auvergne-Rhône-Alpes",
    slugPath: `fourmis/${city.slug}`,
  });
}

export default async function FourmisVillePage({ params }) {
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
            name: "Désinsectisation",
            item: "/desinsectisation",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Fourmis à ${VILLE}`,
            item: `/fourmis/${city.slug}`,
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
        name: `Traitement des fourmis à ${VILLE}`,
        serviceType: "Traitement des fourmis",
        provider: { "@type": "LocalBusiness", name: "Flash Nuisible" },
        areaServed: VILLE,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Intervenez-vous rapidement pour un traitement de fourmis à ${VILLE} ?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Un diagnostic et un devis gratuits sont réalisés par téléphone, puis l’intervention est généralement possible sous 48h selon l’urgence, avec disponibilité 7j/7 et 24h/24.",
            },
          },
          {
            "@type": "Question",
            name: "Pourquoi les produits grand public ne suffisent pas ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ils agissent souvent uniquement sur les fourmis visibles. Sans traitement ciblant la colonie (la fourmilière), l’infestation revient rapidement, parfois de façon plus importante.",
            },
          },
          {
            "@type": "Question",
            name: "Traitez-vous aussi les fourmis charpentières ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. Flash Nuisible intervient sur tous types de fourmis, y compris les fourmis charpentières, avec une intervention adaptée aux zones de passage et à la localisation de la colonie.",
            },
          },
          {
            "@type": "Question",
            name: "Le traitement se fait-il en intérieur ou en extérieur ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Selon la situation, l’intervention peut être réalisée en intérieur, en extérieur, ou les deux, afin de traiter la source de l’infestation et limiter les récidives.",
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
              Fourmis à {VILLE}
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Traitement des fourmis – Désinsectisation professionnelle
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Flash Nuisible est une entreprise spécialisée dans le traitement
                des fourmis à <strong>{VILLE}</strong>, intervenant auprès des
                particuliers pour éliminer durablement les infestations de
                fourmis, aussi bien à l’intérieur qu’à l’extérieur des
                habitations.
              </p>

              <p>
                La présence de fourmis dans une maison ou un appartement est
                souvent banalisée. Pourtant, lorsqu’elles sont visibles en
                intérieur, cela signifie généralement que la fourmilière est
                déjà installée. Une intervention rapide à{" "}
                <strong>{VILLE}</strong> permet d’agir à la source et d’éviter
                les récidives.
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
              Pourquoi traiter une infestation de fourmis à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                À {VILLE}, les fourmis peuvent s’installer dans les cuisines,
                les murs, les terrasses, les jardins ou les abords des
                habitations. Elles suivent des chemins précis et exploitent la
                moindre ouverture pour pénétrer dans le logement.
              </p>

              <p>
                Les solutions grand public agissent rarement sur le fond du
                problème. Traiter uniquement les fourmis visibles ne suffit pas
                : sans action sur la colonie, l’infestation revient rapidement,
                parfois de manière plus importante.
              </p>
            </div>
          </div>

          {/* DEROULEMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule un traitement des fourmis à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                Chaque traitement des fourmis à {VILLE} commence par un
                diagnostic et un devis gratuits par téléphone, afin d’évaluer la
                situation et de proposer une intervention adaptée.
              </p>

              <p>
                Le traitement vise avant tout à cibler la fourmilière,
                responsable de l’infestation. L’intervention peut être réalisée
                en intérieur, en extérieur ou les deux, selon la localisation de
                la colonie et les zones de passage identifiées.
              </p>

              <p>
                Flash Nuisible intervient sur tous types de fourmis, y compris
                les <strong>fourmis charpentières</strong>, connues pour pouvoir
                provoquer des dégâts plus importants lorsqu’elles s’installent
                durablement.
              </p>
            </div>
          </div>

          {/* RAPIDITE */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Intervention rapide contre les fourmis à {VILLE}
            </div>

            <p className="mt-3 text-muted">
              Flash Nuisible assure un traitement rapide des fourmis à {VILLE},
              avec une organisation pensée pour la réactivité. Les interventions
              sont généralement réalisées sous <strong>48h</strong>, avec une
              disponibilité <strong>7j/7</strong> et <strong>24h/24</strong>, y
              compris lorsque la situation devient envahissante.
            </p>

            <p className="mt-3 text-muted">
              Cette rapidité permet de limiter l’extension de l’infestation et
              d’obtenir un résultat plus durable.
            </p>
          </div>

          {/* TARIFS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tarifs de traitement des fourmis à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Les prestations de traitement des fourmis à {VILLE} sont proposées
              avec un devis gratuit, des tarifs annoncés à l’avance et une
              solution adaptée à chaque situation.
            </p>

            <p className="mt-3 text-muted">
              Aucune intervention n’est engagée sans validation préalable.
            </p>
          </div>

          {/* DOUTE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Un doute sur une infestation de fourmis à {VILLE} ?
            </h2>

            <p className="mt-4 text-muted">
              Quelques fourmis visibles peuvent cacher une infestation plus
              importante.
            </p>

            <p className="mt-3 text-muted">
              👉 Contacter une entreprise spécialisée dans le traitement des
              fourmis à {VILLE} permet de confirmer rapidement la situation et
              d’éviter une propagation dans le logement.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Traitement des fourmis à {VILLE} – Flash Nuisible
            </div>

            <p className="mt-3 text-muted">
              Pour toute désinsectisation des fourmis à {VILLE}, Flash Nuisible
              vous accompagne avec une approche professionnelle, réactive et
              efficace, orientée résultat.
            </p>

            <p className="mt-3 text-muted">
              📍 Intervention à <strong>{VILLE}</strong>, dans{" "}
              <strong>{AREA}</strong>
            </p>

            <p className="mt-3 text-muted">
              📞 Contactez Flash Nuisible pour un diagnostic rapide contre les
              fourmis
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
