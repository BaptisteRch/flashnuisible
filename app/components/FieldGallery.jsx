import Image from "next/image";

export default function FieldGallery() {
  const photos = [
    {
      src: "/images/flash/camion_flou.jpg",
      alt: "Intervention technique Flash Nuisible",
    },
    {
      src: "/images/flash/flach2.jpg",
      alt: "Conseil et échange avec un client",
    },
    {
      src: "/images/flash/seringue.jpg",
      alt: "Logo Flash Nuisible sur le camion",
    },
  ];

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Flash Nuisible, sur le terrain.
            </h2>
            <p className="mt-2 text-muted">
              Entreprise de dératisation et désinsectisation basée à
              Saint-Étienne : intervention chez les particuliers et les
              professionnels en Loire (42), Haute-Loire (43), Rhône (69), Ain
              (01) et Puy-de-Dôme (63).{" "}
            </p>
            <p className="mt-2 text-muted">
              Découvrez nos méthodes et contactez-nous pour un devis.
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
