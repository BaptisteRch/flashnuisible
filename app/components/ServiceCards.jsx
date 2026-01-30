import Link from "next/link";

export default function ServiceCards() {
  const items = [
    {
      title: "Dératisation",
      desc: "Rats, souris, rongeurs : détection des points d'entrée, traitement ciblé, suivi et rigoureux",
      href: "/deratisation",
    },
    {
      title: "Désinsectisation",
      desc: "Punaises de lit, cafards/blattes, fourmis, moustiques, mouches, chenilles processionnaires… : traitement professionnel, efficace et durable",
      href: "/desinsectisation",
    },
    {
      title: "Fouines",
      desc: "Mise à l'écart sans destruction : protection des combles, sécurisation des accès et prévention longue durée",
      href: "/fouines",
    },
    {
      title: "Professionnels",
      desc: "Commerces de bouche, entreprises, collectivité : traçabilité complète et conformité sanitaire",
      href: "/professionnels",
    },
    {
      title: "Guêpes & Frelons",
      desc: "Destruction de nids en toute sécurité, solutions préventives",
      href: "/guepesFrelon",
    },
    {
      title: "Xylophages",
      desc: "Insectes du bois et charpentes : traitement curatif et préventif",
      href: "/xylophages",
    },
  ];
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Un problème de nuisibles ? On s'en occupe.
          </h2>
          <div className="mt-4 text-lg font-semibold text-gradient">
            Intervention rapide, diagnostic précis et sollution durable
          </div>
          <div className="mt-4 text-lg font-semibold text-gradient">
            <b>Disponible 24h/24 et 7j/7</b>
          </div>
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
              </div>
              <span className="badge self-start">Voir</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
