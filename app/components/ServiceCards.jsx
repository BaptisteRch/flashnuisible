// app/components/ServiceCards.jsx
import Link from "next/link";
import Container from "./Container";

const cards = [
  {
    href: "/deratisation",
    title: "Dératisation",
    desc: "Rats • Souris • Rongeurs",
    icon: "🐀",
  },
  {
    href: "/desinsectisation",
    title: "Désinsectisation",
    desc: "Punaises • Cafards • Fourmis • Guêpes/Frelons…",
    icon: "🪳",
  },
  {
    href: "/fouines",
    title: "Fouines",
    desc: "Protection • Mise à l’écart • Prévention",
    icon: "🦝",
  },
  {
    href: "/professionnels",
    title: "Professionnels",
    desc: "Commerces • Entreprises • Syndics • Collectivités",
    icon: "🏢",
  },
];

export default function ServiceCards() {
  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">Votre problème, notre solution</h2>
          <p className="section-subtitle">
            Sélectionnez votre besoin pour accéder au service adapté.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="card card-hover p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-xl text-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,106,0,0.14), rgba(255,176,0,0.10))",
                        border: "1px solid rgba(255,106,0,0.22)",
                      }}
                      aria-hidden="true"
                    >
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-xl font-extrabold tracking-tight">
                        {c.title}
                      </div>
                      <div className="text-sm text-muted">{c.desc}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-1 text-soft">→</div>
              </div>

              <div className="mt-4 text-sm text-muted">
                <span
                  className="font-semibold"
                  style={{ color: "var(--flash)" }}
                >
                  Devis gratuit
                </span>{" "}
                • Intervention rapide • Conseil & prévention
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
