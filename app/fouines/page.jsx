// app/fouines/page.jsx
import Image from "next/image";

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

export default function FouinesPage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Fouines
          </h1>
          <p className="mt-3 text-muted font-semibold">
            Protection des combles et prévention des dégâts
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-muted">
                La fouine est un <strong>animal protégé</strong>. À ce titre, il
                est interdit de la capturer ou de la tuer.
              </p>

              <p className="text-muted">
                Chez Flash Nuisible, l’objectif n’est donc pas d’éliminer
                l’animal, mais de <strong>protéger durablement</strong>{" "}
                l’habitation contre les dégâts qu’une fouine peut provoquer dans
                les combles, la toiture et les zones sensibles.
              </p>

              <p className="text-muted">
                Notre approche repose sur une méthode{" "}
                <strong>100 % légale, efficace et respectueuse</strong> de
                l’animal, axée sur la prévention et la protection des accès.
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
                src="/images/flash/fouines1.webp"
                alt="Intervention Flash Nuisible - protection fouines"
                width={1200}
                height={900}
                className="h-[280px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dégâts */}
      <Split
        title="Quels sont les dégâts causés par une fouine ?"
        image={
          <Image
            src="/images/flash/fouines.webp"
            alt="Inspection et repérage des zones sensibles"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          La présence d’une fouine dans une maison ou un bâtiment peut entraîner
          :
        </p>

        <ul className="mt-4 list-disc pl-5 text-muted space-y-2">
          <li>des dégradations de l’isolation dans les combles</li>
          <li>des bruits nocturnes persistants</li>
          <li>des détériorations de gaines et d’éléments techniques</li>
          <li>des aérations endommagées</li>
          <li>des déjections et nuisances associées</li>
        </ul>

        <p className="mt-4 text-muted">
          Sans protection adaptée, la fouine revient systématiquement dans les
          zones accessibles.
        </p>
      </Split>

      {/* Déroulement */}
      <Split
        reverse
        title="Comment se déroule une intervention Flash Nuisible ?"
        image={
          <Image
            src="/images/flash/camion2.webp"
            alt="Diagnostic et plan d'intervention"
            width={1200}
            height={900}
            className="h-[280px] md:h-[360px] w-full object-cover"
          />
        }
      >
        <p className="text-muted">
          La prise en charge commence par un diagnostic et un devis gratuits par
          téléphone, afin d’intervenir rapidement, généralement sous{" "}
          <strong>48h</strong>, <strong>7j/7</strong>.
        </p>

        <div className="mt-6 grid gap-4">
          <div className="card p-6">
            <div className="font-extrabold">Premier passage</div>
            <p className="mt-2 text-muted">
              Un répulsif naturel professionnel, spécifiquement conçu pour les
              fouines, est mis en place. L’objectif est de faire quitter les
              lieux à l’animal sans violence, sans capture ni élimination.
            </p>
          </div>

          <div className="card p-6">
            <div className="font-extrabold">
              Second passage (15 jours plus tard)
            </div>
            <p className="mt-2 text-muted">
              Une fois la fouine éloignée, une{" "}
              <strong>protection physique complète</strong> est installée :
            </p>
            <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
              <li>
                mise en place de barrières physiques au niveau des tuiles et
                points d’accès
              </li>
              <li>
                rebouchage des entrées potentielles identifiées autour du
                bâtiment
              </li>
              <li>
                maintien volontaire d’une aération fonctionnelle, indispensable
                au bâti
              </li>
            </ul>
            <p className="mt-3 text-muted">
              Cette étape est essentielle : le répulsif seul ne suffit pas. Sans
              protection physique, la fouine reviendra.
            </p>
          </div>
        </div>
      </Split>

      {/* Pleine largeur */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Une solution durable et préventive
              </h2>
              <p className="mt-4 text-muted">
                Le but de l’intervention n’est pas seulement de régler le
                problème à court terme, mais de{" "}
                <strong>
                  bloquer durablement l’accès aux combles et zones sensibles
                </strong>
                . La barrière physique est la clé pour éviter toute récidive et
                protéger le bâtiment dans le temps.
              </p>
              <p className="mt-3 text-muted">
                Les prestations sont proposées avec un{" "}
                <strong>forfait annoncé à l’avance</strong>, sans surprise.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Tous types de bâtiments
              </h2>
              <p className="mt-4 text-muted">
                Flash Nuisible intervient sur tous types de bâtiments : maisons
                individuelles, bâtiments anciens ou récents, dépendances, locaux
                divers.
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="font-extrabold">
                Besoin d’une intervention fouine ?
              </div>
              <p className="mt-3 text-muted">
                En cas de doute ou de nuisances dans les combles, le plus simple
                reste d’appeler. Un échange permet de confirmer la situation et
                de proposer une solution adaptée, légale et durable.
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
