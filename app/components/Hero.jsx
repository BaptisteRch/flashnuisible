// app/components/Hero.jsx
import Container from "./Container";
import { BRAND } from "./SiteHeader";

export default function Hero() {
  return (
    <section className="section hero-wrap pt-10 md:pt-14">
      <div className="hero-glow" />
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <span className="badge text-white">Devis gratuit</span>
              <span className="badge text-white">RDV en moins de 48h</span>
              <span className="badge text-white">Particuliers & Pros</span>
            </div>

            <h1 className="text-balance text-white text-4xl font-extrabold tracking-tight md:text-5xl">
              Dératisation & désinsectisation{" "}
              <span className="text-gradient">rapides</span>.
            </h1>

            <p className="max-w-xl text-pretty text-base md:text-lg text-muted">
              Basé à <strong>Saint-Étienne</strong>, Flash Nuisible intervient
              dans <strong>toute la région Auvergne-Rhône-Alpes</strong> pour
              les particuliers comme les professionnels.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={BRAND.phoneHref} className="btn btn-primary">
                ⚡ Appeler {BRAND.phoneDisplay}
              </a>
              <a href="#contact" className="btn btn-ghost">
                {" "}
                Demander un devis
              </a>
            </div>

            <p className="text-sm text-soft">
              Urgence ou doute ? Un message suffit : réponse rapide et RDV en
              48h.
            </p>
          </div>

          <div className="glass rounded-2xl p-5 md:p-6">
            <div className="text-sm font-semibold text-soft">
              Intervention typique
            </div>

            <div className="mt-3 space-y-3 text-sm text-muted">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-strong">1.</span>
                <div>
                  <div className="font-semibold text-strong">
                    Diagnostic précis
                  </div>
                  <div className="text-muted">
                    Identification, zones d’accès, niveau d’infestation.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-strong">2.</span>
                <div>
                  <div className="font-semibold text-strong">
                    Traitement adapté
                  </div>
                  <div className="text-muted">
                    Méthodes efficaces et adaptées à votre environnement.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-strong">3.</span>
                <div>
                  <div className="font-semibold text-strong">
                    Prévention durable
                  </div>
                  <div className="text-muted">
                    Conseils + sécurisation pour éviter la récidive.
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-5 border-t pt-4 text-xs text-soft"
              style={{ borderColor: "var(--stroke)" }}
            >
              Conseil : plus tôt on intervient, plus c’est simple (et moins ça
              coûte).
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
