// app/urgences/page.jsx
import Link from "next/link";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Urgences nuisibles — Flash Nuisible",
  description:
    "Urgences 24h/24 et 7j/7 : guêpes/frelons, punaises de lit, rongeurs, cafards/blattes. Intervention rapide, devis gratuit par téléphone.",
};

const EMERGENCIES = [
  {
    title: "Guêpes & Frelons",
    desc: "Destruction de nid, intervention sécurisée (urgence possible).",
    href: "/urgences/guepes-frelons",
  },
  {
    title: "Punaises de lit",
    desc: "Traitement pro avec protocole + 2 passages espacés de 15 jours.",
    href: "/urgences/punaises-de-lit",
  },
  {
    title: "Dératisation",
    desc: "Rats, souris : dératisation rapide, ciblée, avec suivi.",
    href: "/urgences/deratisation",
  },
  {
    title: "Cafards / Blattes",
    desc: "Gel pro / pulvérisation selon infestation + suivi anti-récidive.",
    href: "/urgences/cafards-blattes",
  },
];

export default function UrgencesHubPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Urgences nuisibles
            </h1>
            <p className="mt-3 text-muted font-semibold">
              Intervention rapide • 24h/24 • 7j/7 • Devis gratuit par téléphone
            </p>

            <div className="mt-6 space-y-3 text-muted">
              <p>
                Certaines situations doivent être traitées{" "}
                <strong>sans attendre</strong> : nid actif de guêpes/frelons,
                punaises de lit, présence de cafards, ou signes de rongeurs
                (bruits, traces, excréments).
              </p>
              <p>
                Flash Nuisible intervient rapidement avec une approche claire :
                diagnostic, traitement adapté, prévention des récidives.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Demander un diagnostic
              </a>
              <a href="/" className="btn btn-ghost">
                Retour accueil
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {EMERGENCIES.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="card-clic p-6 flex items-start justify-between gap-6"
              >
                <div>
                  <div className="text-xl font-extrabold tracking-tight">
                    {it.title}
                  </div>
                  {/* <div className="mt-1 text-muted">{it.desc}</div> */}
                </div>
              </Link>
            ))}
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-extrabold">À retenir</div>
            <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
              <li>
                Ne tentez pas d’intervention vous-même (nid, produits grand
                public…)
              </li>
              <li>Un échange suffit souvent pour confirmer l’urgence</li>
              <li>Devis gratuit et prise en charge rapide</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section on-dark" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
