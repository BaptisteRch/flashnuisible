// app/desinsectisation/page.jsx
import Image from "next/image";
import Link from "next/link";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

function Split({ reverse = false, title, children, image }) {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid gap-8 items-start md:grid-cols-2 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            {title ? (
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {title}
              </h2>
            ) : null}
            <div className={title ? "mt-4" : ""}>{children}</div>
          </div>

          <div className="grid gap-4">
            <div className="card overflow-hidden">{image}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DesinsectisationPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Désinsectisation
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Traitement des insectes nuisibles : punaises de lit, cafards,
            fourmis, moustiques, mouches
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                La désinsectisation permet d’éliminer efficacement les insectes
                nuisibles présents dans un logement et de limiter durablement
                les risques de récidive. Flash Nuisible intervient auprès des
                particuliers pour tout problème d’infestation d’insectes, avec
                des solutions professionnelles adaptées à chaque situation.
              </p>

              <p className="text-muted">
                Chaque traitement est conçu pour être{" "}
                <strong>rapide, ciblé et efficace</strong>, en tenant compte du
                type d’insecte, du niveau d’infestation et de l’environnement à
                traiter.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Demander un devis
                </a>
                <a href="/#services" className="btn btn-ghost">
                  Voir les services
                </a>
              </div>
            </div>

            <div className="card overflow-hidden">
              <Image
                src="/images/flash/desinsectisation.jpg"
                alt="Intervention de désinsectisation"
                width={1200}
                height={900}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Punaises de lit */}
      <Split
        title="Punaises de lit"
        image={
          <Image
            src="/images/flash/punaise2.jpg"
            alt="Diagnostic et protocole punaises de lit"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Les punaises de lit sont parmi les nuisibles les plus complexes à
          éliminer. Un traitement incomplet ou mal adapté entraîne très souvent
          une réinfestation.
        </p>

        <p className="mt-3 text-muted">
          Flash Nuisible propose un traitement professionnel des punaises de
          lit, combinant selon les cas <strong>traitement chimique</strong> et{" "}
          <strong>traitement vapeur</strong>, avec{" "}
          <strong>deux passages espacés de 15 jours</strong>.
        </p>

        <p className="mt-3 text-muted">
          Un diagnostic et un devis gratuits par téléphone permettent
          d’intervenir rapidement, généralement sous <strong>48h</strong>.
        </p>

        <p className="mt-3 text-muted">
          Un protocole précis est communiqué au client, avec des consignes
          claires avant, pendant, entre les deux passages et après le
          traitement, afin d’optimiser l’efficacité et d’éviter toute
          recontamination.
        </p>

        <p className="mt-3 text-muted">
          La prise en charge inclut un <strong>accompagnement complet</strong>,
          indispensable pour ce type d’infestation.
        </p>
      </Split>

      {/* Cafards / blattes */}
      <Split
        reverse
        title="Cafards / blattes"
        image={
          <Image
            src="/images/flash/cafards.jpg"
            alt="Traitement cafards et blattes"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Flash Nuisible assure le traitement des cafards et blattes, tous types
          confondus. La méthode est toujours adaptée à la gravité de
          l’infestation :
        </p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>
            En début d’infestation : pose de <strong>gel insecticide</strong>{" "}
            professionnel pour éliminer rapidement.
          </li>
          <li>
            En cas d’infestation installée : <strong>deux poses de gel</strong>{" "}
            réalisées à <strong>30 jours</strong> d’intervalle.
          </li>
          <li>
            Pour une infestation importante :{" "}
            <strong>pulvérisation insecticide</strong>, suivie 15 jours plus
            tard d’une pose de gel.
          </li>
        </ul>

        <p className="mt-4 text-muted">
          Le gel agit par contamination : les cafards s’en nourrissent puis
          propagent le traitement au sein de la colonie, ce qui permet
          d’éliminer les individus visibles et cachés.
        </p>

        <p className="mt-3 text-muted">
          Un suivi, accompagné de recommandations d’hygiène et de prévention,
          permet de limiter efficacement les récidives.
        </p>
      </Split>

      {/* Fourmis */}
      <Split
        title="Fourmis"
        image={
          <Image
            src="/images/flash/fourmis.jpg"
            alt="Traitement des fourmis"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Flash Nuisible intervient pour le traitement des fourmis, y compris
          les
          <strong> fourmis charpentières</strong>, responsables de dégâts plus
          importants.
        </p>

        <p className="mt-3 text-muted">
          Un traitement efficace consiste à <strong>cibler la colonie</strong>,
          et non uniquement les fourmis visibles. Les interventions peuvent être
          réalisées en intérieur et en extérieur, selon la localisation de la
          colonie et les points d’entrée, afin d’obtenir des résultats durables.
        </p>
      </Split>

      {/* Moustiques */}
      <Split
        reverse
        title="Moustiques"
        image={
          <Image
            src="/images/flash/moustique.jpg"
            alt="Traitements moustiques en extérieur"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Les traitements contre les moustiques sont réalisés{" "}
          <strong>exclusivement en extérieur</strong>, autour des maisons,
          jardins et terrasses.
        </p>

        <p className="mt-3 text-muted">
          Flash Nuisible propose des traitements curatifs et préventifs visant à
          réduire significativement leur présence et à améliorer le confort de
          vie, notamment en période estivale.
        </p>

        <p className="mt-3 text-muted">
          L’objectif n’est pas de promettre une disparition totale, mais une{" "}
          <strong>réduction efficace et maîtrisée</strong> des nuisances.
        </p>
      </Split>

      {/* Chenilles */}
      <Split
        title="Chenilles Processionnaires"
        image={
          <Image
            src="/images/flash/chenilles2.jpg"
            alt="Traitements chenilles processionnaires en extérieur"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          Les <strong>chenilles processionnaires du pin et du chêne</strong>{" "}
          sont des nuisibles particulièrement dangereux en raison de leurs{" "}
          <strong>poils urticants</strong>. Elles peuvent provoquer des
          irritations cutanées, des réactions allergiques, des troubles
          respiratoires et représentent un risque sérieux pour les enfants et
          les animaux domestiques.
        </p>

        <p className="text-muted mt-3">
          Flash Nuisible intervient pour le{" "}
          <strong>traitement des chenilles processionnaires</strong>, en
          solution curative et préventive. Chaque intervention est adaptée au
          cycle biologique de l’insecte afin de maximiser l’efficacité et
          limiter la propagation des nids d’une saison à l’autre.
        </p>

        <p className="text-muted mt-3">Nos prestations comprennent : </p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>
            <strong>Identification</strong> des arbres infestés (pins, chênes)
          </li>
          <li>
            <strong>Retrait sécurisé</strong> des nids en hauteur
          </li>
          <li>
            <strong>Installation d’éco-pièges</strong> pour capturer les
            chenilles lors de leur descente
          </li>
          <li>
            <strong>Mise en place de solutions</strong> adaptées aux
            particuliers, collectivités et professionnels
          </li>
        </ul>

        <p className="mt-4 text-muted">
          Une infestation non traitée peut fragiliser les arbres et contaminer
          durablement un jardin, un camping, une école ou un espace vert. Un
          traitement professionnel des chenilles processionnaires permet de
          sécuriser les lieux et de réduire significativement les risques
          sanitaires.
        </p>

        <p className="mt-3 text-muted">
          Pour toute demande de{" "}
          <strong>
            diagnostic ou d’intervention contre les chenilles processionnaires
          </strong>
          , contactez Flash Nuisible.
        </p>
      </Split>

      {/* Mouches + Réactivité (pleine largeur) */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Mouches
              </h2>
              <p className="mt-4 text-muted">
                La présence excessive de mouches concerne aussi bien les maisons
                que les appartements. La désinsectisation combine un traitement
                ciblé et une approche préventive, en tenant compte des causes
                fréquentes : accès, zones attractives, humidité ou déchets.
              </p>
              <p className="mt-3 text-muted">
                L’objectif est d’agir sur l’origine du problème pour limiter
                durablement leur présence.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">
                Réactivité et cadre d’intervention
              </div>
              <p className="mt-3 text-muted">
                Les interventions de désinsectisation sont réalisées sous{" "}
                <strong>48h</strong>, <strong>7j/7</strong> et{" "}
                <strong>24h/24</strong>, selon l’urgence.
              </p>
              <p className="mt-3 text-muted">
                Les prestations sont proposées avec des{" "}
                <strong>tarifs forfaitaires annoncés à l’avance</strong>, et un
                devis gratuit par téléphone. Les traitements sont réalisés dans
                une logique de respect de l’environnement, avec des produits et
                méthodes professionnels adaptés.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Désinsectisation pour les professionnels
              </h2>
              <p className="mt-4 text-muted">
                Flash Nuisible propose également des solutions de
                désinsectisation pour les professionnels, avec des contrats de
                suivi adaptés aux exigences sanitaires.{" "}
                <Link href="/professionnels" className="underline font-bold">
                  Découvrir la page Professionnels
                </Link>
                .
              </p>
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
