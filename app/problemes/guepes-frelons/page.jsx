import Link from "next/link";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";

export const metadata = {
  title:
    "Problèmes guêpes & frelons : nid, danger, agressivité, intervention — Flash Nuisible",
  description:
    "Nid visible, guêpes/frelons agressifs, nid sous toiture, risques d’intervention soi-même, danger pour enfants/personnes à risque : comprendre les signes et agir en sécurité.",
};

export default function Page() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6 space-y-10">
          {/* HERO */}
          <div>
            <p className="text-muted font-semibold">
              Problématiques • Guêpes / Frelons
            </p>

            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
              Guêpes & frelons : nid visible, agressivité, sous toiture… que
              faire ?
            </h1>

            <p className="mt-4 text-muted">
              Un nid de guêpes ou de frelons proche du logement représente un
              risque réel. Nid visible, insectes agressifs autour de la maison,
              nid sous toiture, danger pour les enfants ou les personnes à
              risque : ces situations nécessitent une prise en charge sécurisée
              pour éviter les piqûres et les accidents.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Demander une intervention
              </a>
              <Link href="/guepes-frelons" className="btn btn-ghost">
                Page Guêpes et frelons
              </Link>
            </div>
          </div>

          {/* CONTENT */}
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="lg:col-span-2 space-y-6">
              {/* 1) NID VISIBLE */}
              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Nid de guêpes ou de frelons visible : que faire ?
                </h2>

                <p className="text-muted">
                  Découvrir un nid de guêpes ou de frelons à proximité de son
                  logement est toujours source d’inquiétude. Sous une toiture,
                  dans un mur, un coffrage, un arbre ou près d’une terrasse, un
                  nid visible signifie que la colonie est déjà installée et
                  active. Contrairement à une simple présence ponctuelle
                  d’insectes, un nid représente un risque réel pour les
                  occupants.
                </p>

                <p className="text-muted">
                  Dans ce type de situation, agir sans méthode peut aggraver le
                  danger.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi un nid devient visible
                </h3>
                <p className="text-muted">
                  Un nid devient visible lorsque la colonie a atteint un certain
                  stade de développement. Les guêpes et les frelons construisent
                  leur nid dans des zones protégées, souvent en hauteur ou dans
                  des endroits peu accessibles. Avec le temps, l’activité
                  s’intensifie et les allées et venues deviennent facilement
                  observables.
                </p>
                <p className="text-muted">
                  Un nid visible indique généralement une activité régulière,
                  avec un nombre d’insectes en augmentation.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Où se trouvent le plus souvent les nids
                </h3>
                <p className="text-muted">
                  Les nids sont fréquemment installés sous les toitures, dans
                  les avancées de toit, les coffrages, les murs creux ou les
                  abris de jardin. Ils peuvent également être situés dans des
                  haies, des arbres ou à proximité directe des zones de passage.
                </p>
                <p className="text-muted">
                  Lorsqu’un nid est proche d’une entrée, d’une fenêtre, d’une
                  terrasse ou d’un lieu de vie, le risque de piqûres augmente
                  fortement.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Les risques liés à un nid de guêpes ou de frelons
                </h3>
                <p className="text-muted">
                  Les guêpes et les frelons défendent activement leur nid. Une
                  vibration, une tentative d’approche ou une intervention non
                  adaptée peut déclencher une attaque collective. Les piqûres
                  sont douloureuses et peuvent être dangereuses, notamment pour
                  les enfants, les personnes allergiques ou les animaux.
                </p>
                <p className="text-muted">
                  Plus le nid grossit, plus le niveau de danger augmente.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi il ne faut pas intervenir soi-même
                </h3>
                <p className="text-muted">
                  Les bombes insecticides du commerce ou les tentatives de
                  destruction improvisées sont particulièrement risquées. Elles
                  peuvent provoquer une réaction agressive immédiate de la
                  colonie sans neutraliser le nid. Dans certains cas, elles
                  rendent l’intervention professionnelle plus complexe par la
                  suite.
                </p>
                <p className="text-muted">
                  Intervenir sans équipement adapté expose directement au risque
                  de piqûres multiples.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Quelle solution face à un nid visible
                </h3>
                <p className="text-muted">
                  La solution sûre et efficace repose sur une intervention
                  professionnelle adaptée. Elle permet d’évaluer le type
                  d’insectes, l’emplacement du nid et le niveau de danger, puis
                  de mettre en place un traitement sécurisé. L’objectif est de
                  neutraliser le nid sans exposition inutile pour les occupants.
                </p>
                <p className="text-muted">
                  Une intervention réalisée dans de bonnes conditions permet de
                  retrouver rapidement un environnement sécurisé.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Quand la situation devient urgente
                </h3>
                <p className="text-muted">
                  La situation doit être considérée comme urgente dès qu’un nid
                  est visible à proximité d’une zone de vie, d’un passage
                  fréquent ou en présence de personnes à risque. L’urgence est
                  également évidente lorsque l’activité des guêpes ou des
                  frelons est importante ou agressive.
                </p>
                <p className="text-muted">
                  Dans ces cas, consultez la page Urgence guêpes / frelons pour
                  une prise en charge rapide.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Intervention locale et prise en charge
                </h3>
                <p className="text-muted">
                  Flash Nuisible intervient pour ce type de problématique sur
                  l’ensemble de son secteur. Des pages locales permettent
                  d’adapter l’intervention selon votre zone, notamment à
                  Saint-Étienne, Saint-Just-Saint-Rambert, Montbrison et
                  Saint-Chamond.
                </p>
                <p className="text-muted">
                  Chaque intervention est réalisée en tenant compte de
                  l’environnement, de l’accessibilité du nid et de la sécurité
                  des occupants.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi faire appel à Flash Nuisible
                </h3>
                <p className="text-muted">
                  Flash Nuisible propose une intervention basée sur l’analyse,
                  la sécurité et l’efficacité. Chaque situation est traitée avec
                  méthode afin d’éliminer le danger durablement, dans le respect
                  des règles de sécurité et de la réglementation, aussi bien
                  pour les particuliers que pour les professionnels.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Besoin d’une intervention rapide
                </h3>
                <p className="text-muted">
                  Si vous constatez un nid de guêpes ou de frelons visible près
                  de votre logement, il est important d’agir sans attendre. Une
                  prise en charge rapide permet d’éviter les situations à risque
                  et les piqûres.
                </p>
                <p className="text-muted">
                  Contactez Flash Nuisible pour une intervention sécurisée
                  <br />
                  Devis gratuit et intervention sur demande
                </p>
              </section>

              {/* 2) AGRESSIFS AUTOUR */}
              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Guêpes ou frelons agressifs autour de la maison : un danger à
                  ne pas sous-estimer
                </h2>

                <p className="text-muted">
                  Lorsque des guêpes ou des frelons deviennent agressifs autour
                  d’une maison, d’une terrasse ou d’un jardin, la situation peut
                  rapidement devenir dangereuse. Allées et venues incessantes,
                  insectes qui tournent autour des personnes ou attaques sans
                  raison apparente sont des signes qui doivent alerter.
                </p>
                <p className="text-muted">
                  Ce comportement n’est jamais anodin. Dans la majorité des cas,
                  il indique la présence d’un nid à proximité ou une colonie
                  déjà bien installée.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi les guêpes et frelons deviennent agressifs
                </h3>
                <p className="text-muted">
                  Les guêpes et les frelons sont naturellement territoriaux.
                  Leur agressivité augmente lorsqu’ils perçoivent une menace
                  pour leur nid. Une simple vibration, un passage répété, du
                  bruit ou des mouvements près de la zone concernée peuvent
                  suffire à déclencher une réaction défensive.
                </p>
                <p className="text-muted">
                  En période estivale, lorsque la colonie est à son apogée, ce
                  comportement est encore plus marqué.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Les situations les plus à risque autour d’une maison
                </h3>
                <p className="text-muted">
                  L’agressivité est souvent observée près des zones de vie
                  extérieures. Terrasses, jardins, entrées de maison, fenêtres
                  ou abris sont des endroits où les interactions avec les
                  occupants sont fréquentes. Lorsqu’un nid est installé à
                  proximité, chaque passage devient une source potentielle de
                  danger.
                </p>
                <p className="text-muted">
                  Le risque est encore plus important en présence d’enfants, de
                  personnes sensibles ou d’animaux.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Ce que ce comportement indique réellement
                </h3>
                <p className="text-muted">
                  Des guêpes ou frelons agressifs signifient généralement que la
                  colonie est en phase active de défense. Cela indique :
                </p>
                <ul className="list-disc pl-5 text-muted space-y-2">
                  <li>un nid proche ou caché</li>
                  <li>une colonie développée</li>
                  <li>un risque accru de piqûres multiples</li>
                </ul>
                <p className="text-muted">
                  Même si le nid n’est pas visible, son existence est très
                  probable.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Les risques liés aux attaques de guêpes ou de frelons
                </h3>
                <p className="text-muted">
                  Les piqûres de guêpes et de frelons sont douloureuses et
                  peuvent provoquer des réactions graves chez certaines
                  personnes. Une attaque collective augmente fortement le
                  danger, notamment en cas de piqûres multiples ou de réaction
                  allergique.
                </p>
                <p className="text-muted">
                  Dans ce contexte, tenter de cohabiter ou d’ignorer la
                  situation expose inutilement les occupants.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi il ne faut pas tenter de gérer seul la situation
                </h3>
                <p className="text-muted">
                  Utiliser des bombes insecticides ou tenter de faire fuir les
                  insectes est particulièrement risqué lorsque les guêpes ou
                  frelons sont agressifs. Ces tentatives peuvent déclencher une
                  attaque sans neutraliser le problème à la source.
                </p>
                <p className="text-muted">
                  Sans équipement adapté et sans méthode professionnelle, le
                  danger est immédiat.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Quelle solution face à des guêpes ou frelons agressifs
                </h3>
                <p className="text-muted">
                  La solution sûre repose sur une intervention professionnelle
                  sécurisée. Elle permet d’identifier l’emplacement du nid,
                  d’évaluer le niveau de danger et de mettre en place un
                  traitement adapté. L’objectif est de supprimer la menace tout
                  en protégeant les occupants et l’environnement.
                </p>
                <p className="text-muted">
                  Une intervention ciblée permet de retrouver rapidement un
                  espace extérieur sécurisé.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Quand la situation devient une urgence
                </h3>
                <p className="text-muted">
                  La situation doit être considérée comme urgente dès que des
                  guêpes ou frelons manifestent un comportement agressif à
                  proximité d’une zone de vie. L’urgence est immédiate en
                  présence d’enfants, de personnes allergiques ou lorsque les
                  attaques se multiplient.
                </p>
                <p className="text-muted">
                  Dans ces cas, consultez la page Urgence guêpes / frelons pour
                  une prise en charge rapide.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Intervention locale et prise en charge
                </h3>
                <p className="text-muted">
                  Flash Nuisible intervient pour ce type de situation sur
                  l’ensemble de son secteur. Des pages locales permettent
                  d’adapter l’intervention selon votre zone, notamment à
                  Saint-Étienne, Saint-Just-Saint-Rambert, Montbrison et
                  Saint-Chamond.
                </p>
                <p className="text-muted">
                  Chaque intervention est réalisée en tenant compte de
                  l’environnement, de la sécurité et de l’accessibilité.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi faire appel à Flash Nuisible
                </h3>
                <p className="text-muted">
                  Flash Nuisible propose une intervention basée sur l’analyse du
                  danger, la sécurité et l’efficacité. Chaque situation est
                  traitée avec méthode afin d’éliminer le risque durablement,
                  dans le respect des règles de sécurité et de la
                  réglementation.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Besoin d’une intervention rapide
                </h3>
                <p className="text-muted">
                  Si des guêpes ou des frelons se montrent agressifs autour de
                  votre maison, il est important d’agir sans attendre. Une
                  intervention rapide permet d’éviter les piqûres et les
                  situations à risque.
                </p>
                <p className="text-muted">
                  Contactez Flash Nuisible pour une intervention sécurisée
                  <br />
                  Devis gratuit et intervention sur demande
                </p>
              </section>

              {/* 3) SOUS TOITURE */}
              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Nid de guêpes ou de frelons sous toiture : un danger souvent
                  sous-estimé
                </h2>

                <p className="text-muted">
                  Découvrir ou suspecter un nid de guêpes ou de frelons sous une
                  toiture est une situation fréquente, mais particulièrement
                  risquée. Les avancées de toit, les combles, les coffrages et
                  les zones en hauteur offrent des emplacements idéaux pour la
                  construction d’un nid. Lorsqu’il est situé sous toiture, le
                  nid est souvent difficile d’accès et peut rester longtemps
                  invisible.
                </p>
                <p className="text-muted">
                  Ce type d’installation nécessite une prise en charge adaptée,
                  car le danger est réel pour les occupants.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi les guêpes et frelons s’installent sous les toitures
                </h3>
                <p className="text-muted">
                  Les toitures offrent des conditions idéales pour les guêpes et
                  les frelons. Elles y trouvent de la hauteur, de la protection
                  contre les intempéries et peu de dérangements. Les espaces
                  sous les tuiles, les avancées de toit ou les coffrages
                  permettent à la colonie de se développer à l’abri des regards.
                </p>
                <p className="text-muted">
                  Avec le temps, l’activité augmente et les allées et venues
                  deviennent visibles autour du toit ou des façades.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Comment repérer un nid sous toiture
                </h3>
                <p className="text-muted">
                  Un nid sous toiture n’est pas toujours visible directement.
                  Certains signes doivent toutefois alerter. Une activité
                  intense de guêpes ou de frelons autour du toit, des insectes
                  entrant et sortant toujours au même endroit ou une présence
                  inhabituelle près des fenêtres et des combles sont souvent
                  révélateurs.
                </p>
                <p className="text-muted">
                  Même sans voir le nid, ces comportements indiquent
                  généralement qu’il est déjà bien installé.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Les risques spécifiques d’un nid sous toiture
                </h3>
                <p className="text-muted">
                  Un nid situé en hauteur représente un danger particulier. Les
                  guêpes et les frelons défendent activement leur colonie et
                  peuvent attaquer si la zone est approchée ou vibrée. Le risque
                  est accentué lorsque le nid est proche des fenêtres, des
                  entrées ou des zones de passage.
                </p>
                <p className="text-muted">
                  Toute tentative d’intervention sans équipement adapté expose à
                  des piqûres multiples et à des chutes liées au travail en
                  hauteur.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi il ne faut pas tenter d’intervenir soi-même
                </h3>
                <p className="text-muted">
                  Accéder à un nid sous toiture implique souvent l’utilisation
                  d’une échelle ou un travail en hauteur. En plus du risque de
                  chute, les bombes insecticides du commerce sont inefficaces et
                  dangereuses dans ce contexte. Elles peuvent provoquer une
                  attaque immédiate de la colonie sans neutraliser le nid.
                </p>
                <p className="text-muted">
                  Une mauvaise tentative peut également disperser les insectes
                  et compliquer l’intervention professionnelle par la suite.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Quelle solution face à un nid sous toiture
                </h3>
                <p className="text-muted">
                  La solution sûre repose sur une intervention professionnelle
                  sécurisée, adaptée aux nids difficiles d’accès. Elle permet
                  d’évaluer précisément l’emplacement du nid, le type d’insectes
                  et le niveau de danger, puis de mettre en place un traitement
                  efficace sans exposition inutile pour les occupants.
                </p>
                <p className="text-muted">
                  Une intervention réalisée dans de bonnes conditions permet de
                  neutraliser le nid et de sécuriser durablement les lieux.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Quand la situation devient urgente
                </h3>
                <p className="text-muted">
                  La situation doit être considérée comme urgente dès qu’un nid
                  est suspecté ou confirmé sous toiture, en particulier si
                  l’activité est importante ou si des zones de vie sont situées
                  à proximité. L’urgence est encore plus marquée en présence
                  d’enfants, de personnes allergiques ou lorsque les insectes
                  deviennent agressifs.
                </p>
                <p className="text-muted">
                  Dans ces cas, consultez la page Urgence guêpes / frelons pour
                  une prise en charge rapide.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Intervention locale et prise en charge
                </h3>
                <p className="text-muted">
                  Flash Nuisible intervient pour ce type de nid difficile
                  d’accès sur l’ensemble de son secteur. Des pages locales
                  permettent d’adapter l’intervention selon votre zone,
                  notamment à Saint-Étienne, Saint-Just-Saint-Rambert,
                  Montbrison et Saint-Chamond.
                </p>
                <p className="text-muted">
                  Chaque intervention est réalisée en tenant compte de la
                  sécurité, de l’accessibilité et de l’environnement du
                  bâtiment.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi faire appel à Flash Nuisible
                </h3>
                <p className="text-muted">
                  Flash Nuisible propose une intervention basée sur l’analyse,
                  la sécurité et l’efficacité. Chaque situation est traitée avec
                  méthode afin d’éliminer le danger durablement, dans le respect
                  des règles de sécurité et de la réglementation.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Besoin d’une intervention rapide
                </h3>
                <p className="text-muted">
                  Si vous suspectez ou constatez un nid de guêpes ou de frelons
                  sous votre toiture, il est important d’agir sans attendre. Une
                  intervention rapide permet d’éviter les piqûres et les
                  situations à risque.
                </p>
                <p className="text-muted">
                  Contactez Flash Nuisible pour une intervention sécurisée
                  <br />
                  Devis gratuit et intervention sur demande
                </p>
              </section>

              {/* 4) NE JAMAIS DÉTRUIRE SOI-MÊME */}
              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Pourquoi il ne faut jamais détruire un nid de guêpes ou de
                  frelons soi-même
                </h2>

                <p className="text-muted">
                  Face à un nid de guêpes ou de frelons, la tentation de régler
                  le problème soi-même est fréquente. Bombe insecticide, jet
                  d’eau, feu, objets pour faire tomber le nid… ces tentatives
                  sont pourtant extrêmement dangereuses. Chaque année, de
                  nombreux accidents surviennent suite à des interventions
                  improvisées.
                </p>
                <p className="text-muted">
                  Détruire un nid sans méthode professionnelle expose à des
                  risques sérieux pour la santé et la sécurité.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Les guêpes et frelons défendent leur nid
                </h3>
                <p className="text-muted">
                  Les guêpes et les frelons sont des insectes territoriaux. Leur
                  nid est défendu collectivement. Une vibration, une tentative
                  d’approche ou une agression directe déclenche une réaction
                  immédiate de la colonie. Contrairement à une idée répandue, il
                  ne s’agit pas d’une ou deux piqûres isolées, mais d’attaques
                  multiples et coordonnées.
                </p>
                <p className="text-muted">
                  Plus le nid est développé, plus le nombre d’insectes capables
                  d’attaquer est important.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Les bombes insecticides : un faux sentiment de sécurité
                </h3>
                <p className="text-muted">
                  Les produits du commerce donnent souvent l’impression d’être
                  simples et efficaces. En réalité, ils sont rarement adaptés à
                  la destruction complète d’un nid. Ils peuvent exciter les
                  insectes sans neutraliser la colonie, provoquant une sortie
                  massive et agressive des guêpes ou des frelons.
                </p>
                <p className="text-muted">
                  Dans certains cas, ces produits rendent l’intervention
                  professionnelle plus complexe par la suite, sans avoir réglé
                  le problème.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Le risque de piqûres multiples et de réactions graves
                </h3>
                <p className="text-muted">
                  Une piqûre de guêpe ou de frelon est douloureuse. Plusieurs
                  piqûres peuvent devenir dangereuses, même chez une personne
                  non allergique. En cas d’allergie, le risque de réaction grave
                  est immédiat. Les attaques surviennent souvent sans laisser le
                  temps de se protéger ou de s’éloigner.
                </p>
                <p className="text-muted">
                  Les enfants, les personnes âgées et les animaux sont
                  particulièrement exposés.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Le danger lié à l’accès au nid
                </h3>
                <p className="text-muted">
                  Beaucoup de nids sont situés en hauteur, sous toiture, dans un
                  mur ou un endroit difficile d’accès. Tenter de les atteindre
                  avec une échelle ou depuis un toit ajoute un risque de chute
                  important. Sous le stress d’une attaque, les réflexes sont
                  altérés, ce qui augmente fortement le danger.
                </p>
                <p className="text-muted">
                  Le cumul du risque de chute et des piqûres rend toute
                  intervention improvisée extrêmement dangereuse.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi le nid n’est souvent pas totalement détruit
                </h3>
                <p className="text-muted">
                  Même lorsqu’un nid semble avoir été détruit ou vidé, il reste
                  souvent des insectes à l’intérieur ou à proximité. Certains
                  individus peuvent survivre et reconstruire partiellement le
                  nid, ou en créer un nouveau à proximité. Le problème
                  réapparaît alors quelques jours ou semaines plus tard.
                </p>
                <p className="text-muted">
                  Sans méthode adaptée, la destruction est rarement complète.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Ce que fait une intervention professionnelle différemment
                </h3>
                <p className="text-muted">
                  Une intervention professionnelle repose sur l’identification
                  précise du type d’insectes, de l’emplacement du nid et du
                  niveau de danger. Elle utilise des méthodes et des équipements
                  adaptés permettant de neutraliser la colonie sans exposition
                  inutile.
                </p>
                <p className="text-muted">
                  L’objectif est d’éliminer le nid en sécurité, de manière
                  efficace et durable, tout en protégeant les occupants et
                  l’environnement.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Quand la situation doit être considérée comme urgente
                </h3>
                <p className="text-muted">
                  La présence d’un nid visible, surtout s’il est proche d’une
                  zone de passage, d’une terrasse ou d’une entrée, doit être
                  considérée comme urgente. L’urgence est immédiate en présence
                  d’enfants, de personnes allergiques ou lorsque les insectes se
                  montrent agressifs.
                </p>
                <p className="text-muted">
                  Dans ces situations, consultez la page Urgence guêpes /
                  frelons pour une prise en charge rapide.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Intervention locale et prise en charge
                </h3>
                <p className="text-muted">
                  Flash Nuisible intervient pour ce type de situation sur
                  l’ensemble de son secteur. Les interventions sont adaptées à
                  la configuration du site, à l’accessibilité du nid et aux
                  contraintes de sécurité, notamment à Saint-Étienne,
                  Saint-Just-Saint-Rambert, Montbrison et Saint-Chamond.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi faire appel à Flash Nuisible
                </h3>
                <p className="text-muted">
                  Faire appel à Flash Nuisible, c’est choisir une intervention
                  sécurisée, raisonnée et efficace. Chaque situation est
                  analysée avec méthode afin d’éliminer le danger durablement,
                  dans le respect des règles de sécurité et de la
                  réglementation.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Besoin d’une intervention sécurisée
                </h3>
                <p className="text-muted">
                  Si vous êtes confronté à un nid de guêpes ou de frelons,
                  n’essayez pas d’intervenir seul. Une prise en charge
                  professionnelle permet d’éviter les accidents et de sécuriser
                  rapidement les lieux.
                </p>
                <p className="text-muted">
                  Contactez Flash Nuisible pour une intervention sécurisée
                  <br />
                  Devis gratuit et intervention sur demande
                </p>
              </section>

              {/* 5) ENFANTS / PERSONNES À RISQUE */}
              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Nid de guêpes ou de frelons dangereux pour les enfants ou les
                  personnes à risque
                </h2>

                <p className="text-muted">
                  La présence d’un nid de guêpes ou de frelons devient
                  particulièrement préoccupante lorsqu’il se situe à proximité
                  d’enfants, de personnes allergiques, de personnes âgées ou de
                  toute personne vulnérable. Dans ces situations, le danger ne
                  se limite pas à une simple piqûre. Le risque de réaction grave
                  est réel et nécessite une prise en charge rapide et adaptée.
                </p>
                <p className="text-muted">
                  Un nid installé près d’une zone de vie doit être considéré
                  comme un danger immédiat.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi le risque est plus élevé pour certaines personnes
                </h3>
                <p className="text-muted">
                  Les guêpes et les frelons défendent activement leur nid. Une
                  piqûre peut déjà être très douloureuse chez un adulte en bonne
                  santé. Chez un enfant, une personne allergique ou une personne
                  fragile, les conséquences peuvent être beaucoup plus
                  sérieuses.
                </p>
                <p className="text-muted">
                  Les enfants, par leurs mouvements imprévisibles et leur
                  curiosité, sont plus exposés aux attaques. Les personnes
                  allergiques peuvent développer des réactions graves en
                  quelques minutes. Les personnes âgées ou fragilisées peuvent
                  également réagir plus fortement aux piqûres multiples.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Les situations les plus à risque au quotidien
                </h3>
                <p className="text-muted">
                  Le danger est accru lorsque le nid est situé près d’une
                  terrasse, d’un jardin, d’une aire de jeux, d’une entrée de
                  maison ou d’un passage fréquent. Les allées et venues répétées
                  augmentent les vibrations et les interactions, ce qui peut
                  déclencher des attaques défensives.
                </p>
                <p className="text-muted">
                  Dans ces conditions, même une activité normale devient source
                  de stress et de danger pour les occupants.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Ce que signifie la présence d’un nid proche d’une zone de vie
                </h3>
                <p className="text-muted">
                  Un nid proche d’une zone fréquentée indique que la colonie est
                  déjà bien installée et qu’elle considère cet espace comme
                  faisant partie de son territoire. Plus le temps passe, plus la
                  colonie se développe, augmentant le nombre d’insectes capables
                  d’attaquer.
                </p>
                <p className="text-muted">
                  Attendre ou tenter de cohabiter avec le nid expose inutilement
                  les personnes à risque.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Les risques liés aux piqûres chez les personnes vulnérables
                </h3>
                <p className="text-muted">
                  Les piqûres de guêpes ou de frelons peuvent provoquer des
                  réactions locales importantes, mais aussi des réactions
                  générales sévères. Une attaque collective multiplie les
                  risques, même en l’absence d’allergie connue. Chez les
                  personnes allergiques, une seule piqûre peut suffire à
                  provoquer une urgence médicale.
                </p>
                <p className="text-muted">
                  Dans ce contexte, la prévention passe avant tout par
                  l’élimination sécurisée du nid.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi il ne faut jamais tenter de gérer seul la situation
                </h3>
                <p className="text-muted">
                  Face à un nid dangereux pour des personnes vulnérables, toute
                  tentative d’intervention improvisée est particulièrement
                  risquée. Les bombes insecticides ou les tentatives de
                  destruction peuvent provoquer une réaction agressive immédiate
                  de la colonie, exposant directement les occupants.
                </p>
                <p className="text-muted">
                  Le danger est encore plus important lorsque le nid est situé
                  en hauteur ou dans un endroit difficile d’accès.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Quelle solution face à un nid dangereux pour les occupants
                </h3>
                <p className="text-muted">
                  La solution repose sur une intervention professionnelle
                  sécurisée, adaptée au niveau de risque. Elle permet d’évaluer
                  précisément la situation, de sécuriser la zone et de
                  neutraliser le nid sans exposition inutile pour les occupants.
                </p>
                <p className="text-muted">
                  Une intervention rapide permet de rétablir un environnement
                  sûr et d’éviter les situations d’urgence médicale.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Quand la situation doit être considérée comme urgente
                </h3>
                <p className="text-muted">
                  La situation est urgente sans exception lorsqu’un nid est
                  situé à proximité d’enfants, de personnes allergiques ou de
                  personnes fragiles. L’urgence est également évidente lorsque
                  le nid est proche d’une zone de passage ou que les insectes
                  montrent un comportement agressif.
                </p>
                <p className="text-muted">
                  Dans ces cas, consultez immédiatement la page Urgence guêpes /
                  frelons pour une prise en charge rapide.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Intervention locale et prise en charge
                </h3>
                <p className="text-muted">
                  Flash Nuisible intervient pour ce type de situation à risque
                  sur l’ensemble de son secteur. Les interventions sont adaptées
                  à l’environnement, à l’accessibilité du nid et à la protection
                  des occupants, notamment à Saint-Étienne,
                  Saint-Just-Saint-Rambert, Montbrison et Saint-Chamond.
                </p>
                <p className="text-muted">
                  Chaque intervention est réalisée dans le respect des règles de
                  sécurité et de la réglementation.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Pourquoi faire appel à Flash Nuisible
                </h3>
                <p className="text-muted">
                  Flash Nuisible propose une approche basée sur l’analyse du
                  danger, la sécurité et l’efficacité. Chaque situation est
                  traitée avec méthode afin d’éliminer le risque durablement et
                  de protéger les personnes les plus exposées.
                </p>

                <h3 className="text-xl font-extrabold tracking-tight">
                  Besoin d’une intervention sécurisée
                </h3>
                <p className="text-muted">
                  Si un nid de guêpes ou de frelons représente un danger pour
                  des enfants ou des personnes à risque, il est essentiel d’agir
                  sans attendre. Une intervention professionnelle permet
                  d’éviter les accidents et de sécuriser rapidement les lieux.
                </p>
                <p className="text-muted">
                  Contactez Flash Nuisible pour une intervention sécurisée
                  <br />
                  Devis gratuit et intervention sur demande
                </p>
              </section>
            </article>

            {/* SIDEBAR */}
            <aside className="space-y-6">
              <div className="glass rounded-2xl p-6 space-y-3">
                <div className="font-extrabold">
                  Quand la situation devient une urgence
                </div>

                <p className="text-muted">
                  La situation doit être considérée comme urgente dès qu’un nid
                  est visible à proximité d’une zone de vie ou lorsqu’un
                  comportement agressif est observé.
                </p>
                <p className="text-muted">
                  Un nid sous toiture, difficile d’accès, augmente le risque de
                  piqûres et d’accident : une intervention sécurisée est
                  recommandée.
                </p>
                <p className="text-muted">
                  Ne tentez jamais de détruire un nid vous-même : le risque de
                  piqûres multiples et de chute est réel.
                </p>
                <p className="text-muted">
                  L’urgence est immédiate en présence d’enfants, de personnes
                  allergiques, de personnes fragiles ou si le nid est proche
                  d’une terrasse, d’une entrée ou d’un passage fréquent.
                </p>

                <Link
                  href="/urgences/guepes-frelons"
                  className="btn btn-primary w-full text-center"
                >
                  Voir la page Urgence guêpes / frelons
                </Link>
              </div>

              <div className="glass rounded-2xl p-6 space-y-3">
                <div className="font-extrabold">Besoin d’une intervention</div>
                <p className="text-muted">
                  Une intervention sécurisée permet d’évaluer le danger,
                  d’identifier le nid et de neutraliser la colonie sans
                  exposition inutile.
                </p>
                <a href="#contact" className="btn btn-ghost w-full text-center">
                  Contacter Flash Nuisible
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section on-dark" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
