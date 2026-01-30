"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const BRAND = {
  phoneDisplay: "07 70 35 33 41",
  phoneHref: "tel:+33770353341",
  email: "contact@flashnuisible.fr",
  base: "Saint-Étienne",
  region: "Auvergne-Rhône-Alpes",
};

const NUISIBLE_OPTIONS = [
  "Dératisation (rats / souris)",
  "Punaises de lit",
  "Cafards",
  "Fourmis",
  "Guêpes / frelons",
  "Insectes volants",
  "Anthrènes",
  "Fouines",
  "Autre",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    type: NUISIBLE_OPTIONS[0],
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      "Demande d'intervention — Flash Nuisible",
    );
    const body = encodeURIComponent(
      `Nom : ${form.name || "-"}
Téléphone : ${form.phone || "-"}
Ville / secteur : ${form.city || "-"}
Type de nuisible : ${form.type || "-"}

Message :
${form.message || "-"}

Envoyé depuis le site Flash Nuisible`,
    );

    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, [form]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <div className="grid gap-8">
      {/* Bloc 2 : Contact */}
      <div className="glass rounded-3xl p-6 md:p-8 bg-[#1b1919]">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Texte à gauche */}
          <div>
            <h2 className="text-orange-400 text-3xl font-extrabold tracking-tight">
              Besoin d’une intervention ?
            </h2>

            <p className="mt-3 text-muted">
              Contactez Flash Nuisible pour un <strong>devis gratuit</strong> ou
              une intervention rapide.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <div>
                <span className="text-soft text-orange-400">Téléphone :</span>{" "}
                <a href={BRAND.phoneHref} className="font-semibold">
                  {BRAND.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-soft text-orange-400">Email :</span>{" "}
                <a href={`mailto:${BRAND.email}`} className="font-semibold">
                  {BRAND.email}
                </a>
              </div>

              <div className="text-soft text-orange-400">
                📍 Basé à <strong className="text-white">{BRAND.base}</strong> —
                interventions dans toute la région{" "}
                <strong className="text-white">{BRAND.region}</strong>.
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={BRAND.phoneHref}>
                Appeler maintenant
              </a>
              <a className="btn btn-ghost" href={`mailto:${BRAND.email}`}>
                Envoyer un email
              </a>
            </div>
          </div>

          {/* Formulaire à droite */}
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="input input-bordered"
                name="name"
                placeholder="Nom"
                value={form.name}
                onChange={onChange}
              />

              <input
                className="input input-bordered"
                name="phone"
                placeholder="Téléphone"
                value={form.phone}
                onChange={onChange}
              />
            </div>

            <input
              className="input input-bordered"
              name="city"
              placeholder="Ville / secteur"
              value={form.city}
              onChange={onChange}
            />

            <select
              className="select input-bordered"
              name="type"
              value={form.type}
              onChange={onChange}
            >
              {NUISIBLE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <textarea
              className="textarea input-bordered"
              name="message"
              rows={5}
              placeholder="Décrivez le problème (symptômes, urgence, accès…)"
              value={form.message}
              onChange={onChange}
            />

            <button type="submit" className="btn btn-primary w-full">
              Envoyer la demande (devis gratuit)
            </button>

            <p className="text-xs text-soft">
              En cliquant, votre client email s’ouvre avec le message prérempli.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
