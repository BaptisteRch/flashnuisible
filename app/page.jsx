// app/page.jsx
import Image from "next/image";
import Link from "next/link";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContactSection from "./components/ContactSection";
import ServiceCards from "./components/ServiceCards";
import FieldGallery from "./components/FieldGallery";

const BRAND = {
  phoneDisplay: "07 70 35 33 41",
  phoneHref: "tel:+33770353341",
  reviewUrl: "https://g.page/r/CSENTpfsjv-MEBM/review",
};

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
              <h1 className="text-gradient mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
                Dératisation désinsectisation & désinfection{" "}
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

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener"
                  href={BRAND.reviewUrl}
                >
                  Laisser un avis
                </a>
              </div>
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

      {/* CONTACT */}
      <section className="section on-dark" id="contact">
        <div className="mx-auto max-w-7xl px-6 bg-[#1b1919]">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
