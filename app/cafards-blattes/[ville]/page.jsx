import Link from "next/link";
import { notFound } from "next/navigation";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";

import { getCity, generateCityParams } from "../../lib/cities";

export function generateStaticParams() {
  return getFeaturedCities().map((c) => ({ ville: c.slug }));
}

export const revalidate = 2592000;

export async function generateMetadata({ params }) {
  const { ville } = await params;
  const city = getCity(ville);

  if (!city) return { title: "Cafards / Blattes" };

  return {
    title: `Cafards / Blattes à ${city.name} — Flash Nuisible`,
    description: `Traitement cafards et blattes à ${city.name} : désinsectisation professionnelle, intervention rapide, devis gratuit.`,
  };
}

export default async function CafardsVillePage({ params }) {
  const { ville } = await params;
  const city = getCity(ville);

  if (!city) notFound();

  const VILLE = city.name;
  const AREA = city.area || "Auvergne-Rhône-Alpes";

  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Cafards / Blattes à {VILLE}
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Traitement des cafards et blattes – Désinsectisation
              professionnelle
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Flash Nuisible est une entreprise spécialisée dans le traitement
                des cafards et blattes à <strong>{VILLE}</strong>, intervenant
                auprès des particuliers confrontés à une infestation de cafards
                dans leur logement.
              </p>

              <p>
                La présence de cafards ou blattes dans une habitation est un
                problème fréquent mais sérieux. Ces insectes nuisibles se
                reproduisent rapidement, se cachent efficacement et peuvent
                contaminer les lieux. Une désinsectisation rapide à{" "}
                <strong>{VILLE}</strong> permet d’éviter une infestation durable
                et des nuisances importantes.
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
              Pourquoi traiter les cafards rapidement à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                À {VILLE}, les cafards et blattes trouvent facilement refuge
                dans les cuisines, salles de bain, gaines techniques et zones
                humides. Même lorsqu’ils sont peu visibles, une infestation est
                souvent déjà installée.
              </p>

              <p>
                Sans traitement professionnel des cafards, les conséquences
                peuvent être :
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>une prolifération rapide</li>
                <li>des nuisances quotidiennes</li>
                <li>une contamination des surfaces et des aliments</li>
                <li>
                  une infestation difficile à éliminer avec des produits grand
                  public
                </li>
              </ul>

              <p>
                Plus l’intervention est tardive, plus le traitement devient long
                et contraignant.
              </p>
            </div>
          </div>

          {/* DEROULEMENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comment se déroule un traitement cafards / blattes à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-3 text-muted">
              <p>
                Chaque intervention de désinsectisation à {VILLE} débute par un
                diagnostic et un devis gratuits par téléphone, afin d’évaluer le
                niveau d’infestation et d’intervenir rapidement.
              </p>

              <p>Le traitement est ensuite adapté à la situation :</p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  En début d’infestation, une pose de gel insecticide
                  professionnel est généralement suffisante.
                </li>
                <li>
                  En cas d’infestation installée, deux poses de gel sont
                  réalisées, espacées de 30 jours, afin de traiter l’ensemble de
                  la colonie.
                </li>
                <li>
                  Pour une infestation durable et importante, un traitement par
                  pulvérisation insecticide est mis en place, suivi 15 jours
                  plus tard d’une pose de gel.
                </li>
              </ul>

              <p>
                Le gel insecticide agit par contamination : les cafards s’en
                nourrissent puis transmettent le produit au reste de la colonie,
                ce qui permet d’agir au-delà des insectes visibles.
              </p>

              <p>
                Un suivi, accompagné de recommandations d’hygiène et de
                prévention, permet de limiter les risques de récidive.
              </p>
            </div>
          </div>

          {/* INTERVENTION RAPIDE */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Intervention rapide contre les cafards à {VILLE}
            </div>
            <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
              <li>intervention généralement sous 48h</li>
              <li>disponibilité 7j/7 et 24h/24</li>
              <li>prise en charge efficace des situations urgentes</li>
            </ul>
            <p className="mt-3 text-muted">
              Cette réactivité permet d’éviter que l’infestation ne s’étende.
            </p>
          </div>

          {/* TARIFS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tarifs de traitement cafards à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Les prestations de traitement des cafards à {VILLE} sont proposées
              avec :
            </p>

            <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
              <li>un devis gratuit par téléphone</li>
              <li>des tarifs forfaitaires annoncés à l’avance</li>
              <li>une intervention adaptée au niveau d’infestation</li>
            </ul>

            <p className="mt-4 text-muted">
              Aucun traitement n’est engagé sans validation préalable.
            </p>
          </div>

          {/* DOUTE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Un doute sur la présence de cafards ou de blattes à {VILLE} ?
            </h2>

            <div className="mt-4 space-y-2 text-muted">
              <p>Un cafard visible est rarement seul.</p>
              <p>
                👉 En cas de doute, contacter une entreprise spécialisée dans le
                traitement des cafards à {VILLE} permet d’évaluer rapidement la
                situation et d’éviter une infestation plus importante.
              </p>
            </div>
          </div>

          {/* PRO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Traitement cafards pour les professionnels à {VILLE}
            </h2>

            <p className="mt-4 text-muted">
              Flash Nuisible intervient également pour le traitement des cafards
              et blattes chez les professionnels à {VILLE}, avec des solutions
              adaptées et la possibilité de contrats de suivi.{" "}
              <Link href="/professionnels" className="underline font-semibold">
                Une page dédiée présente les prestations professionnelles
              </Link>
              .
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">
              Traitement des cafards à {VILLE} – Flash Nuisible
            </div>

            <p className="mt-3 text-muted">
              Pour toute désinsectisation cafards à {VILLE}, Flash Nuisible vous
              accompagne avec une approche professionnelle, réactive et
              efficace.
            </p>

            <p className="mt-3 text-muted">
              📍 Intervention à <strong>{VILLE}</strong>, dans{" "}
              <strong>{AREA}</strong>
            </p>

            <p className="mt-3 text-muted">
              📞 Contactez Flash Nuisible pour un diagnostic rapide cafards /
              blattes
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
