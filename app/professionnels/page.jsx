// app/professionnels/page.jsx
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

const BRAND = {
  phoneDisplay: "07 70 35 33 41",
  phoneHref: "tel:+33770353341",
};

export default function ProfessionnelsPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Professionnels
              </h1>
              <p className="mt-3 text-muted">
                Commerces de bouche, entreprises, collectivités, syndics &
                agences : interventions discrètes, efficaces et adaptées à vos
                contraintes.
              </p>

              <div className="mt-10 grid gap-4">
                <div className="card p-6">
                  <div className="font-extrabold">Domaines</div>
                  <p className="mt-2 text-muted">
                    Commerces de bouche • Usines / entreprises • Collectivités •
                    Syndics & agences immobilières
                  </p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">Exemple</div>
                  <p className="mt-2">ziuertbi azoertin oziet ozetp ze</p>
                </div>

                <div className="card p-6">
                  <div className="font-extrabold">Approche</div>
                  <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
                    <li>Diagnostic & plan d’action</li>
                    <li>Traitements compatibles avec votre activité</li>
                    <li>Prévention & recommandations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="card overflow-hidden">
                <Image
                  src="/images/flash/action-bw-coffee.jpg"
                  alt="Intervention en commerce / restauration"
                  width={1200}
                  height={900}
                  className="h-[320px] w-full object-cover"
                  priority
                />
              </div>
              <div className="card overflow-hidden">
                <Image
                  src="/images/flash/action-bw-rack.jpg"
                  alt="Intervention technique en environnement professionnel"
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
