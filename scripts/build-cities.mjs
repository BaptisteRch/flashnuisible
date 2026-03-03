// scripts/build-cities.mjs
import fs from "node:fs";
import path from "node:path";

function slugify(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const SOURCES = [
  "https://www.data.gouv.fr/fr/datasets/r/0e117f93-1d84-4fdb-a7b1-7f2b0d6b8c3b",
  "https://www.insee.fr/fr/statistiques/fichier/8377162/communes2025.csv",
];

const USE_LOCAL_CSV = true;
const LOCAL_CSV_PATH = path.join(
  process.cwd(),
  "scripts",
  "data",
  "communes.csv",
);

async function fetchTextWithFallback(urls) {
  let lastErr = null;

  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "text/csv,*/*;q=0.8",
        },
      });

      if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
      return await res.text();
    } catch (e) {
      lastErr = e;
      console.warn("⚠️ Source failed:", String(e));
    }
  }

  throw lastErr || new Error("All sources failed");
}

// CSV très simple (séparateur ;) -> parse minimal
function parseCsvSemicolon(csvText) {
  const lines = csvText.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) throw new Error("CSV seems empty");

  const headerLine = lines[0];

  // Détecte le séparateur
  const semiCount = (headerLine.match(/;/g) || []).length;
  const commaCount = (headerLine.match(/,/g) || []).length;
  const delimiter = commaCount > semiCount ? "," : ";";

  // Parse CSV line (gère les champs entre guillemets)
  function splitCsvLine(line) {
    const out = [];
    let cur = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];

      if (ch === '"') {
        // double quote -> quote littérale
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === delimiter && !inQuotes) {
        out.push(cur.trim());
        cur = "";
      } else {
        cur += ch;
      }
    }
    out.push(cur.trim());
    return out.map((v) => v.replace(/^"+|"+$/g, "").trim());
  }

  const rawHeaders = splitCsvLine(headerLine);

  // Normalise headers (uppercase)
  const headers = rawHeaders.map((h) => h.trim().toUpperCase());

  const idxDep = headers.indexOf("DEP");
  const idxType = headers.indexOf("TYPECOM");

  // Colonnes possibles pour le nom
  const nameCandidates = ["LIBELLE", "NCCENR", "NCC"];
  const idxName = nameCandidates
    .map((k) => headers.indexOf(k))
    .find((i) => i >= 0);

  if (idxDep < 0 || idxName == null || idxName < 0) {
    throw new Error(
      `CSV columns not found. Delimiter="${delimiter}". Found headers: ${rawHeaders.join(
        " | ",
      )}`,
    );
  }

  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const row = splitCsvLine(lines[i]);
    if (row.length < rawHeaders.length) continue;

    const dep = row[idxDep];
    const name = row[idxName];
    const type = idxType >= 0 ? row[idxType] : "";

    if (!dep || !name) continue;
    rows.push({ dep, name, type });
  }

  return rows;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

async function main() {
  let csv;

  if (USE_LOCAL_CSV) {
    if (!fs.existsSync(LOCAL_CSV_PATH)) {
      throw new Error(
        `Local CSV not found: ${LOCAL_CSV_PATH}\n` +
          `Télécharge le fichier communes (COG) et place-le ici, ou repasse USE_LOCAL_CSV à false.`,
      );
    }
    csv = fs.readFileSync(LOCAL_CSV_PATH, "utf8");
    console.log("✅ Using local CSV:", LOCAL_CSV_PATH);
  } else {
    console.log("🌐 Fetching communes CSV (fallback sources)...");
    csv = await fetchTextWithFallback(SOURCES);
    console.log("✅ CSV fetched.");
  }

  const rows = parseCsvSemicolon(csv);

  // Toutes les communes de ces départements :
  const DEPS_ALL = new Set(["42", "43", "69"]);

  // Mapping dept -> libellé joli
  const DEP_LABEL = {
    42: "Loire (42)",
    43: "Haute-Loire (43)",
    69: "Rhône (69)",
  };

  const base = [];
  for (const r of rows) {
    if (!DEPS_ALL.has(r.dep)) continue;

    // Si tu veux être strict communes uniquement :
    // if (r.type && r.type !== "COM") continue;

    const slug = slugify(r.name);
    if (!slug) continue;

    base.push({
      slug,
      name: r.name,
      area: DEP_LABEL[r.dep] || r.dep,
      dep: r.dep,
    });
  }

  // Ain (01) — grandes villes / pôles
  const AIN_MAJOR = [
    "Bourg-en-Bresse",
    "Oyonnax",
    "Valserhône",
    "Ambérieu-en-Bugey",
    "Gex",
    "Miribel",
    "Ferney-Voltaire",
    "Belley",
    "Trévoux",
    "Meximieux",
    "Saint-Genis-Pouilly",
  ].map((name) => ({
    slug: slugify(name),
    name,
    area: "Ain (01)",
    dep: "01",
  }));

  // Auvergne-Rhône-Alpes — villes importantes (hors 42/43/69/01)
  // (liste “safe” : grandes agglos / préfectures / villes connues)
  const AURA_MAJOR = [
    // Isère (38)
    "Grenoble",
    "Échirolles",
    "Saint-Martin-d'Hères",
    "Vienne",
    "Bourgoin-Jallieu",

    // Drôme (26)
    "Valence",
    "Romans-sur-Isère",
    "Montélimar",

    // Savoie (73)
    "Chambéry",
    "Aix-les-Bains",
    "Albertville",

    // Haute-Savoie (74)
    "Annecy",
    "Annemasse",
    "Thonon-les-Bains",

    // Puy-de-Dôme (63)
    "Clermont-Ferrand",
    "Riom",
    "Issoire",

    // Allier (03)
    "Moulins",
    "Montluçon",
    "Vichy",

    // Cantal (15)
    "Aurillac",

    // Ardèche (07)
    "Aubenas",
  ].map((name) => ({
    slug: slugify(name),
    name,
    area: "Auvergne-Rhône-Alpes",
    dep: "AURA",
  }));

  // Merge + unique (par slug)
  const map = new Map();
  for (const c of [...base, ...AIN_MAJOR, ...AURA_MAJOR]) {
    if (!c.slug) continue;
    if (!map.has(c.slug)) map.set(c.slug, c);
  }

  const CITIES = Array.from(map.values()).sort((a, b) =>
    a.name.localeCompare(b.name, "fr", { sensitivity: "base" }),
  );

  // Écrire le fichier généré
  const outPath = path.join(process.cwd(), "app", "lib", "cities.generated.js");
  ensureDir(path.dirname(outPath));

  const content = `// ⚠️ Fichier généré automatiquement — ne pas modifier à la main.
// Généré par: scripts/build-cities.mjs

export const CITIES = ${JSON.stringify(
    CITIES.map(({ slug, name, area }) => ({ slug, name, area })),
    null,
    2,
  )};
`;

  fs.writeFileSync(outPath, content, "utf8");
  console.log(`✅ Generated ${CITIES.length} cities -> ${outPath}`);
}

main().catch((e) => {
  console.error("❌ build-cities failed:", e);
  process.exit(1);
});
