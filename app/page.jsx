// app/page.jsx
import Image from "next/image";
import Link from "next/link";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContactSection from "./components/ContactSection";

const BRAND = {
  phoneDisplay: "07 70 35 33 41",
  phoneHref: "tel:+33770353341",
};

function ServiceCards() {
  const items = [
    {
      title: "Dératisation",
      desc: "Rats, souris, rongeurs",
      href: "/deratisation",
    },
    {
      title: "Désinsectisation",
      desc: "Punaises, cafards, fourmis, guêpes/frelons…",
      href: "/desinsectisation",
    },
    {
      title: "Fouines",
      desc: "Protection, mise à l’écart, prévention",
      href: "/fouines",
    },
    {
      title: "Professionnels",
      desc: "Commerces, entreprises, collectivités…",
      href: "/professionnels",
    },
  ];

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Votre problème, notre solution
          </h2>
          <p className="mt-2 text-muted">
            Choisissez votre besoin pour accéder au service adapté.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="card card-hover p-6 flex items-start justify-between gap-6"
            >
              <div>
                <div className="text-xl font-extrabold tracking-tight">
                  {it.title}
                </div>
                <div className="mt-1 text-muted">{it.desc}</div>
                <div className="mt-4 text-sm font-semibold text-gradient">
                  Devis gratuit • RDV &lt; 48h • Conseils & prévention
                </div>
              </div>
              <span className="badge self-start">Voir</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FieldGallery() {
  const photos = [
    {
      src: "/images/flash/action-machine.jpg",
      alt: "Intervention technique Flash Nuisible",
    },
    {
      src: "/images/flash/action-talk.jpg",
      alt: "Conseil et échange avec un client",
    },
    {
      src: "/images/flash/truck-hood.jpg",
      alt: "Logo Flash Nuisible sur le camion",
    },
  ];

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Sur le terrain, rapidement.
            </h2>
            <p className="mt-2 text-muted">
              Devis gratuit, rendez-vous en moins de 48h. Basé à Saint-Étienne,
              interventions dans toute la région Auvergne-Rhône-Alpes.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {photos.map((p) => (
            <div key={p.src} className="card overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt}
                width={1200}
                height={800}
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="page">
      <SiteHeader />

      {/* HERO */}
      <section className="hero-wrap">
        <div className="hero-glow" />
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 relative">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="badge text-black">Devis gratuit</span>
                <span className="badge text-black">RDV en moins de 48h</span>
                <span className="badge text-black">Particuliers & Pros</span>
              </div>

              <h1 className="text-black mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
                Dératisation & désinsectisation{" "}
                <span className="text-gradient">rapides</span>.
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-base md:text-lg text-muted">
                Basé à <strong>Saint-Étienne</strong>, Flash Nuisible intervient
                dans <strong>toute la région Auvergne-Rhône-Alpes</strong> pour
                les particuliers comme les professionnels.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary" href={BRAND.phoneHref}>
                  ⚡ Appeler {BRAND.phoneDisplay}
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Demander un devis
                </a>
              </div>

              <p className="mt-4 text-sm text-soft">
                Urgence ou doute ? Un message suffit : réponse rapide.
              </p>
            </div>

            <div className="card overflow-hidden">
              <Image
                src="/images/flash/truck-basilique-wide.jpg"
                alt="Camion Flash Nuisible en intervention"
                width={1400}
                height={1000}
                className="w-full h-[320px] md:h-[420px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceCards />
      <FieldGallery />

      {/* CONTACT : tout est dans ContactSection */}
      <section className="section on-dark" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
