// app/deratisation/page.jsx
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

const BRAND = {
  phoneDisplay: "07 70 35 33 41",
  phoneHref: "tel:+33770353341",
};

export default function DeratisationPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Dératisation
              </h1>
              <p className="mt-3 text-muted">
                Rats, souris, rongeurs : diagnostic, traitement adapté et
                prévention durable.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="card p-6">
                  <div className="font-extrabold">1. Diagnostic précis</div>
                  <p className="mt-2 text-muted">
                    Identification des zones de passage, niveau d’infestation,
                    points d’entrée.
                  </p>
                </div>
                <div className="card p-6">
                  <div className="font-extrabold">2. Traitement ciblé</div>
                  <p className="mt-2 text-muted">
                    Stratégie adaptée (appâts sécurisés, dispositifs, suivi).
                  </p>
                </div>
                <div className="card p-6">
                  <div className="font-extrabold">3. Sécurisation</div>
                  <p className="mt-2 text-muted">
                    Conseils et actions pour éviter la récidive (accès, hygiène,
                    stockage).
                  </p>
                </div>
                <div className="card p-6">
                  <div className="font-extrabold">4. Suivi</div>
                  <p className="mt-2 text-muted">
                    Contrôle et ajustements si nécessaire, selon la situation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="card overflow-hidden">
                <Image
                  src="/images/flash/action-baits.jpg"
                  alt="Appâts et matériel de dératisation"
                  width={1200}
                  height={900}
                  className="h-[320px] w-full object-cover"
                  priority
                />
              </div>
              <div className="card overflow-hidden">
                <Image
                  src="/images/flash/action-shirt.jpg"
                  alt="Intervention Flash Nuisible"
                  width={1200}
                  height={900}
                  className="h-[220px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section on-dark">
        <div className="mx-auto max-w-6xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
