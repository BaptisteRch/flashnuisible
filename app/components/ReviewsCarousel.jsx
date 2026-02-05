"use client";

import { useMemo, useRef, useState } from "react";

function Stars({ rating = 5 }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1" aria-label={`${full} étoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < full ? "text-orange-400" : "text-white/25"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

const DEFAULT_REVIEWS = [
  {
    name: "Client vérifié",
    rating: 5,
    date: "Septembre 2025",
    text: "Rapide, efficace, très sympa, explique bien et surtout se renseigne de savoir si tout est OK à postériori. Je ne peux que recommander ! Merci pour l'intervention",
  },
  {
    name: "Client vérifié",
    rating: 5,
    date: "Août 2025",
    text: "Service de Flash nuisible plus que parfait ! Intervention rapide et professionnelle, un jeune à l’écoute et de très bons conseils. Je recommande les yeux fermés !",
  },
  {
    name: "Client vérifié",
    rating: 5,
    date: "Juin 2025",
    text: "Très bon professionnel! Il fait vraiment le tour de la maison pour évaluer le problème et son ampleur. Problème réglé de notre côté, dans les délais annoncés. Après quelques jours, plus aucun bruit dans la toiture ! Je recommande vivement, se rend disponible rapidement et est très ponctuel et sympathique. Merci beaucoup!",
  },
  {
    name: "Client vérifié",
    rating: 5,
    date: "Avril 2025",
    text: "Un grand merci à Flash Nuisible pour son intervention ! Il a été rapide, efficace et très professionnel. Il a su gérer notre problème de souris avec sérieux et en un temps record. Nous sommes très contents du résultat et on recommande vivement ses services !",
  },
];

export default function ReviewsCarousel({
  title = "Avis clients Google",
  subtitle = "Des retours réels, une intervention claire et efficace.",
  reviewUrl,
  reviews = DEFAULT_REVIEWS,
}) {
  const list = useMemo(() => reviews?.filter(Boolean) ?? [], [reviews]);

  const scrollerRef = useRef(null);

  // Drag state (refs = pas de re-render pendant le drag)
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const rafRef = useRef(0);
  const latestDxRef = useRef(0);

  const [isDraggingUi, setIsDraggingUi] = useState(false);

  if (!list.length) return null;

  function onPointerDown(e) {
    // uniquement clic gauche souris (pointerType "mouse") OU touch/pen
    if (e.pointerType === "mouse" && e.button !== 0) return;

    const el = scrollerRef.current;
    if (!el) return;

    draggingRef.current = true;
    setIsDraggingUi(true);

    // capture : on continue à recevoir les events même si on sort du div
    el.setPointerCapture?.(e.pointerId);

    startXRef.current = e.clientX;
    startScrollLeftRef.current = el.scrollLeft;
    latestDxRef.current = 0;

    // évite sélection de texte / drag d’images
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!draggingRef.current) return;
    const el = scrollerRef.current;
    if (!el) return;

    const dx = e.clientX - startXRef.current;
    latestDxRef.current = dx;

    // throttle à 1 update par frame
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      el.scrollLeft = startScrollLeftRef.current - latestDxRef.current;
    });
  }

  function stopDrag(e) {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDraggingUi(false);

    const el = scrollerRef.current;
    if (el && e?.pointerId != null) {
      try {
        el.releasePointerCapture?.(e.pointerId);
      } catch {
        // ignore
      }
    }

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-muted">{subtitle}</p>
          </div>

          {reviewUrl ? (
            <a
              className="btn btn-primary"
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir tous les avis
            </a>
          ) : null}
        </div>

        <div
          ref={scrollerRef}
          className={[
            "mt-8 flex gap-4 overflow-x-auto pb-3",
            // pas de snap => scroll libre
            isDraggingUi ? "cursor-grabbing" : "cursor-grab",
          ].join(" ")}
          style={{
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorX: "contain",
            // important : évite que le navigateur interprète le drag comme un geste de page
            touchAction: "pan-y",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          onPointerLeave={stopDrag}
        >
          {list.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className="card shrink-0 w-[86%] sm:w-[60%] lg:w-[40%] p-6"
              // évite que le texte soit sélectionné pendant un drag
              style={{ userSelect: isDraggingUi ? "none" : "auto" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-extrabold truncate">{r.name}</div>
                  <div className="text-sm text-muted">{r.date}</div>
                </div>
                <Stars rating={r.rating} />
              </div>

              <p className="mt-4 text-muted leading-relaxed">“{r.text}”</p>

              <div className="mt-4 text-xs text-muted">Source : Google</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
