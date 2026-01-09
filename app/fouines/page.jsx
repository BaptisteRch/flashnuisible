// app/fouines/page.jsx
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

const BRAND = {
  phoneDisplay: "07 70 35 33 41",
  phoneHref: "tel:+33770353341",
};

export default function FouinesPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Fouines
              </h1>
              <p className="mt-3 text-muted">
                Bruits dans les combles, câbles abîmés, isolant détérioré :
                protection, mise à l’écart et prévention.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="card p-6">
                  <div className="font-extrabold">1. Repérage</div>
                  <p className="mt-2 text-muted">
                    Identification des accès, passages, zones à risque.
                  </p>
                </div>
                <div className="card p-6">
                  <div className="font-extrabold">2. Protection</div>
                  <p className="mt-2 text-muted">
                    Solutions adaptées : obturation, sécurisation, dissuasion.
                  </p>
                </div>
                <div className="card p-6">
                  <div className="font-extrabold">3. Prévention</div>
                  <p className="mt-2 text-muted">
                    Conseils durables pour éviter le retour.
                  </p>
                </div>
                <div className="card p-6">
                  <div className="font-extrabold">4. Intervention rapide</div>
                  <p className="mt-2 text-muted">
                    Basé à Saint-Étienne, déplacements région AURA.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="card overflow-hidden">
                <Image
                  src="/images/flash/truck-basilique.jpg"
                  alt="Camion Flash Nuisible en déplacement"
                  width={1200}
                  height={900}
                  className="h-[320px] w-full object-cover"
                  priority
                />
              </div>
              <div className="card overflow-hidden">
                <Image
                  src="/images/flash/action-office.jpg"
                  alt="Flash Nuisible en préparation d'intervention"
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
