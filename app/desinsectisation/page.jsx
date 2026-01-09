// app/desinsectisation/page.jsx
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

const BRAND = {
  phoneDisplay: "07 70 35 33 41",
  phoneHref: "tel:+33770353341",
};

export default function DesinsectisationPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Désinsectisation
              </h1>
              <p className="mt-3 text-muted">
                Punaises de lit, cafards, fourmis, guêpes/frelons et autres
                insectes : intervention efficace et prévention.
              </p>

              <div className="mt-10 grid gap-4">
                <div className="card p-6">
                  <div className="font-extrabold">Intervention typique</div>
                  <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
                    <li>Analyse du contexte (pièces, accès, niveau).</li>
                    <li>Traitement adapté au nuisible identifié.</li>
                    <li>Conseils de prévention et sécurisation.</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">
                    Exemples de nuisibles traités
                  </div>
                  <p className="mt-2 text-muted">
                    Punaises de lit • Cafards • Fourmis • Anthrènes • Guêpes /
                    Frelons • Insectes volants
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="card overflow-hidden">
                <Image
                  src="/images/flash/action-machine.jpg"
                  alt="Intervention technique de désinsectisation"
                  width={1200}
                  height={900}
                  className="h-[320px] w-full object-cover"
                  priority
                />
              </div>
              <div className="card overflow-hidden">
                <Image
                  src="/images/flash/truck-hood.jpg"
                  alt="Camion Flash Nuisible"
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
