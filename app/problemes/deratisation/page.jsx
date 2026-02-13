import Link from "next/link";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";

export const metadata = {
  alternates: { canonical: "/problemes/deratisation" },
  title:
    "Problèmes de rongeurs : signes, risques et solutions — Flash Nuisible",
  description:
    "Bruits dans les murs, traces visibles, dégâts matériels, odeurs inhabituelles, rat ou souris vus, contextes spécifiques : comprendre les signes de rongeurs et agir.",
};

export default function Page() {
  return (
    <>
      <main className="page">
        <SiteHeader />

        <section className="section">
          <div className="mx-auto max-w-7xl px-6 space-y-10">
            {/* HERO */}
            <div>
              <p className="text-muted font-semibold">
                Problématiques • Dératisation
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
                Problèmes de rongeurs : bruits, traces, dégâts, odeurs… que
                signifient-ils ?
              </h1>
              <p className="mt-4 text-muted">
                Rats et souris peuvent s’installer discrètement dans un logement
                ou un local. Bruits dans les murs, crottes, odeurs persistantes,
                câbles rongés ou rongeur aperçu : ces signes doivent être pris
                au sérieux dès leur apparition.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Demander un diagnostic
                </a>
                <Link href="/deratisation" className="btn btn-ghost">
                  Page dératisation
                </Link>
              </div>
            </div>

            {/* CONTENT */}
            <div className="grid gap-6 lg:grid-cols-3">
              <article className="lg:col-span-2 space-y-6">
                {/* 1) BRUITS */}
                <section className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Bruits dans les murs, les combles ou les cloisons : que
                    signifient ces bruits ?
                  </h2>

                  <p className="text-muted">
                    Entendre des bruits dans les murs la nuit, des grattements
                    dans les combles ou des déplacements dans les cloisons est
                    une situation fréquente mais toujours inquiétante. Ces sons
                    apparaissent souvent lorsque le logement est calme, en
                    soirée ou durant la nuit, et donnent l’impression que
                    quelque chose circule à l’intérieur du bâtiment.
                  </p>

                  <p className="text-muted">
                    Dans la majorité des cas, ces bruits sont liés à la présence
                    de rongeurs, comme des rats ou des souris, déjà installés
                    dans le logement ou le bâtiment.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Quels types de bruits doivent alerter
                  </h3>
                  <p className="text-muted">
                    Les nuisances auditives peuvent prendre différentes formes.
                    Certaines personnes entendent des bruits dans les murs la
                    nuit, d’autres des grattements dans les combles ou des
                    déplacements rapides dans les cloisons. Ces sons peuvent
                    être ponctuels au début, puis devenir réguliers, voire
                    quotidiens.
                  </p>
                  <p className="text-muted">
                    Lorsque les bruits se répètent toujours aux mêmes endroits,
                    il s’agit rarement d’un phénomène isolé.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Pourquoi ces bruits apparaissent surtout la nuit
                  </h3>
                  <p className="text-muted">
                    Les rats et les souris sont principalement nocturnes. La
                    nuit, ils sortent de leurs zones de refuge pour se déplacer,
                    chercher de la nourriture ou rejoindre d’autres parties du
                    bâtiment. Les murs, plafonds, cloisons et combles leur
                    offrent des passages discrets, chauds et peu fréquentés.
                  </p>
                  <p className="text-muted">
                    Le silence nocturne rend leur activité beaucoup plus
                    perceptible, ce qui explique pourquoi ces bruits sont
                    souvent entendus à ce moment-là.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Ce que ces bruits indiquent réellement
                  </h3>
                  <p className="text-muted">
                    Des bruits réguliers dans les murs ou les combles signifient
                    généralement que les rongeurs ont déjà trouvé :
                  </p>
                  <ul className="list-disc pl-5 text-muted space-y-2">
                    <li>des points d’accès au bâtiment</li>
                    <li>des zones de circulation internes</li>
                    <li>des espaces de refuge adaptés</li>
                  </ul>
                  <p className="text-muted">
                    Autrement dit, le problème est souvent déjà installé, même
                    si aucun autre signe n’est encore visible.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Les risques à ignorer ces signes indirects
                  </h3>
                  <p className="text-muted">
                    Au-delà de la gêne sonore, la présence de rongeurs dans les
                    cloisons peut entraîner des conséquences importantes. En
                    circulant dans les murs et les plafonds, ils peuvent ronger
                    des câbles électriques, détériorer l’isolation ou se
                    propager vers d’autres pièces du logement.
                  </p>
                  <p className="text-muted">
                    Plus l’intervention est tardive, plus l’infestation a le
                    temps de s’étendre et plus la prise en charge devient
                    complexe.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Quelle solution face aux bruits dans les murs ou les combles
                  </h3>
                  <p className="text-muted">
                    Les solutions temporaires ou les produits du commerce sont
                    rarement efficaces face à ce type de situation. Faire du
                    bruit, poser des répulsifs ou boucher partiellement des
                    accès ne règle pas le problème à la source.
                  </p>
                  <p className="text-muted">
                    La solution durable repose sur une dératisation
                    professionnelle, permettant d’identifier précisément les
                    zones de passage, de traiter l’infestation et de prévenir
                    toute réapparition.
                  </p>
                </section>

                {/* 2) TRACES VISIBLES */}
                <section className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Traces visibles de rongeurs dans la maison : que
                    signifient-elles ?
                  </h2>

                  <p className="text-muted">
                    Découvrir des traces visibles dans un logement ou un local
                    professionnel est souvent le premier signe concret d’un
                    problème de rongeurs. Crottes retrouvées au sol, dans la
                    cuisine ou les placards, marques le long des murs ou zones
                    toujours empruntées sont rarement le fruit du hasard. Dans
                    la majorité des cas, ces indices révèlent une présence
                    active de rats ou de souris déjà installés dans le bâtiment.
                  </p>

                  <p className="text-muted">
                    Ces signes doivent être pris au sérieux dès leur apparition.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Quelles traces visibles doivent alerter
                  </h3>
                  <p className="text-muted">
                    Les rongeurs laissent derrière eux des indices
                    caractéristiques. Il peut s’agir de crottes de souris ou de
                    rats retrouvées dans la maison, souvent près des murs,
                    derrière les meubles ou à proximité des sources de
                    nourriture. Dans certains cas, on observe également des
                    traces de passage répétées le long des plinthes, dans les
                    angles ou derrière les appareils électroménagers.
                  </p>
                  <p className="text-muted">
                    Lorsque ces traces apparaissent régulièrement ou dans
                    plusieurs zones, cela indique généralement une circulation
                    quotidienne des rongeurs.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Pourquoi les crottes et traces apparaissent dans certaines
                    zones
                  </h3>
                  <p className="text-muted">
                    Les rats et les souris se déplacent presque toujours en
                    longeant les murs et les zones discrètes. Ils empruntent les
                    mêmes trajets jour après jour, ce qui explique la présence
                    répétée de crottes ou de marques aux mêmes endroits. La
                    cuisine, les placards, les caves et les zones de stockage
                    sont particulièrement concernés en raison de la nourriture
                    et du calme qu’ils offrent.
                  </p>
                  <p className="text-muted">
                    Ces traces visibles correspondent souvent à des axes de
                    circulation déjà bien établis.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Ce que ces traces indiquent réellement
                  </h3>
                  <p className="text-muted">
                    La présence de crottes ou de passages visibles signifie que
                    les rongeurs ne font pas que traverser ponctuellement le
                    logement. Elle indique qu’ils ont trouvé :
                  </p>
                  <ul className="list-disc pl-5 text-muted space-y-2">
                    <li>un accès durable au bâtiment</li>
                    <li>des zones de refuge</li>
                    <li>des ressources suffisantes pour rester</li>
                  </ul>
                  <p className="text-muted">
                    Autrement dit, le problème est rarement isolé et tend à
                    s’aggraver sans intervention.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Les risques à ignorer les traces visibles
                  </h3>
                  <p className="text-muted">
                    Au-delà de l’aspect désagréable, les traces de rongeurs
                    posent un véritable risque sanitaire. Les crottes peuvent
                    contaminer les surfaces, les sols et les denrées
                    alimentaires. En continuant à circuler librement, les
                    rongeurs peuvent également provoquer des dégâts matériels,
                    ronger des câbles ou se propager vers d’autres pièces, voire
                    d’autres logements.
                  </p>
                  <p className="text-muted">
                    Plus les traces se multiplient, plus l’infestation devient
                    complexe à traiter.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Quelle solution face à des traces visibles de rongeurs
                  </h3>
                  <p className="text-muted">
                    Nettoyer les zones concernées sans traiter la cause du
                    problème ne fait que masquer temporairement les signes. Sans
                    action ciblée, les rongeurs continueront à circuler et à
                    laisser de nouvelles traces.
                  </p>
                  <p className="text-muted">
                    La solution durable repose sur une dératisation
                    professionnelle, permettant d’identifier les zones de
                    passage, de sécuriser les points sensibles et de stopper
                    l’activité à la source.
                  </p>
                </section>

                {/* 3) DEGATS */}
                <section className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Dégâts matériels causés par les rongeurs : câbles, isolants,
                    trous
                  </h2>

                  <p className="text-muted">
                    Constater des dégâts matériels dans un logement ou un local
                    professionnel n’est jamais anodin. Câbles électriques
                    rongés, isolant abîmé, laine de verre déplacée ou trous
                    visibles dans les murs, les sols ou les placards sont très
                    souvent liés à la présence de rats ou de souris. Ces
                    dégradations indiquent généralement une infestation déjà
                    bien installée.
                  </p>

                  <p className="text-muted">
                    Ces signes doivent être pris au sérieux, car ils peuvent
                    rapidement entraîner des conséquences importantes.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Quels types de dégâts matériels doivent alerter
                  </h3>
                  <p className="text-muted">
                    Les rongeurs peuvent provoquer différents types de
                    dégradations. Les câbles électriques sont fréquemment
                    endommagés, tout comme les gaines et les installations
                    situées dans les murs ou les plafonds. L’isolation,
                    notamment la laine de verre ou les isolants soufflés, est
                    souvent détériorée lorsqu’ils y creusent des passages ou y
                    installent des nids.
                  </p>
                  <p className="text-muted">
                    Dans certains cas, des trous apparaissent dans les cloisons,
                    les placards ou les sols, servant de points d’accès ou de
                    circulation entre différentes zones du bâtiment.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Pourquoi les rongeurs provoquent des dégâts
                  </h3>
                  <p className="text-muted">
                    Les rats et les souris ont des incisives qui poussent en
                    continu. Pour les user, ils rongent tout ce qu’ils trouvent
                    sur leur passage. Les matériaux présents dans les bâtiments,
                    comme les câbles, le bois, les plastiques ou les isolants,
                    deviennent alors des cibles idéales.
                  </p>
                  <p className="text-muted">
                    Ces dégradations ne sont pas accidentelles. Elles
                    correspondent à une activité régulière et répétée, signe que
                    les rongeurs ont trouvé un environnement favorable pour
                    s’installer durablement.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Ce que ces dégâts indiquent réellement
                  </h3>
                  <p className="text-muted">
                    Des dégâts matériels visibles signifient généralement que
                    les rongeurs circulent librement dans le bâtiment. Ils ont
                    identifié des zones de passage, des points d’entrée et des
                    espaces de refuge. Dans ce contexte, réparer ou remplacer
                    les éléments endommagés sans traiter la cause du problème ne
                    fait que retarder une récidive.
                  </p>
                  <p className="text-muted">
                    Ces dégâts sont donc le symptôme d’un problème plus large
                    qu’il faut traiter à la source.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Les risques à ne pas intervenir
                  </h3>
                  <p className="text-muted">
                    Ignorer ou minimiser des dégâts matériels peut avoir des
                    conséquences sérieuses. Des câbles rongés peuvent entraîner
                    des pannes, des courts-circuits ou des risques d’incendie.
                    Une isolation dégradée provoque des pertes thermiques et des
                    coûts énergétiques supplémentaires. Dans les locaux
                    professionnels, ces situations peuvent également entraîner
                    des non-conformités ou des interruptions d’activité.
                  </p>
                  <p className="text-muted">
                    Plus le temps passe, plus les réparations deviennent lourdes
                    et coûteuses.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Quelle solution face à des dégâts matériels liés aux
                    rongeurs
                  </h3>
                  <p className="text-muted">
                    La seule solution efficace consiste à mettre en place une
                    dératisation professionnelle adaptée. Cela permet
                    d’identifier les zones de passage, de stopper l’activité des
                    rongeurs et d’éviter que de nouveaux dégâts apparaissent
                    après réparation.
                  </p>
                  <p className="text-muted">
                    Une intervention ciblée permet de sécuriser durablement le
                    bâtiment avant toute remise en état.
                  </p>
                </section>

                {/* 4) ODEURS */}
                <section className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Odeurs inhabituelles dans la maison : quand une odeur cache
                    un problème de rongeurs
                  </h2>

                  <p className="text-muted">
                    Une odeur persistante et inhabituelle dans un logement ou un
                    local professionnel n’apparaît jamais sans raison.
                    Lorsqu’elle est difficile à localiser, qu’elle revient
                    malgré l’aération ou qu’elle s’intensifie avec le temps,
                    elle peut être liée à la présence de rats ou de souris. Ces
                    nuisances olfactives sont souvent l’un des premiers signaux
                    d’alerte d’un problème déjà installé.
                  </p>

                  <p className="text-muted">
                    Ces odeurs doivent être prises au sérieux, même en l’absence
                    d’autres signes visibles.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Quelles odeurs doivent alerter
                  </h3>
                  <p className="text-muted">
                    Les nuisances liées aux rongeurs peuvent prendre différentes
                    formes. Il peut s’agir d’une odeur persistante inexpliquée,
                    parfois assimilée à une odeur d’humidité ou de renfermé, ou
                    d’une odeur forte et désagréable, plus marquée, pouvant
                    évoquer une odeur de rat mort. Ces odeurs apparaissent
                    souvent dans des zones peu accessibles comme les murs, les
                    plafonds, les combles, les caves ou derrière les cloisons.
                  </p>
                  <p className="text-muted">
                    Lorsqu’une odeur revient toujours au même endroit ou
                    s’intensifie avec le temps, elle n’est jamais anodine.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Pourquoi les rongeurs provoquent des odeurs
                  </h3>
                  <p className="text-muted">
                    Les rats et les souris laissent derrière eux des déjections,
                    de l’urine et parfois des restes alimentaires qui peuvent
                    générer des odeurs persistantes. Dans certains cas, un
                    rongeur peut mourir dans une cloison, un plafond ou un
                    espace fermé, provoquant une odeur très marquée pendant
                    plusieurs jours, voire plusieurs semaines.
                  </p>
                  <p className="text-muted">
                    Ces nuisances sont souvent amplifiées par la chaleur et le
                    manque de ventilation, ce qui explique pourquoi elles
                    deviennent parfois plus fortes à certaines périodes.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Ce que ces odeurs indiquent réellement
                  </h3>
                  <p className="text-muted">
                    Une odeur liée aux rongeurs signifie généralement qu’ils
                    circulent ou se sont installés dans le bâtiment. Elle peut
                    indiquer la présence d’un nid, d’une zone de passage
                    régulière ou, dans certains cas, d’un rongeur mort dans un
                    endroit inaccessible.
                  </p>
                  <p className="text-muted">
                    Même en l’absence de bruits ou de traces visibles, une
                    nuisance olfactive persistante est souvent le signe d’une
                    infestation active ou récente.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Les risques à ignorer une nuisance olfactive
                  </h3>
                  <p className="text-muted">
                    Ignorer une odeur persistante peut entraîner une aggravation
                    du problème. Les rongeurs continuent à circuler, à se
                    reproduire et à contaminer l’environnement. Dans un
                    logement, cela peut affecter la qualité de vie. Dans un
                    local professionnel, ces nuisances peuvent poser un problème
                    sanitaire et réglementaire.
                  </p>
                  <p className="text-muted">
                    De plus, si l’odeur est liée à un rongeur mort, elle peut
                    attirer d’autres nuisibles et accentuer les désagréments.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Quelle solution face à des odeurs liées aux rongeurs
                  </h3>
                  <p className="text-muted">
                    Masquer l’odeur avec des produits parfumés ou multiplier
                    l’aération ne règle pas le problème à la source. Tant que la
                    présence des rongeurs n’est pas traitée, les nuisances
                    persistent ou réapparaissent.
                  </p>
                  <p className="text-muted">
                    La solution durable repose sur une dératisation
                    professionnelle, permettant d’identifier l’origine de
                    l’odeur, de traiter l’infestation et de prévenir toute
                    récidive.
                  </p>
                </section>

                {/* 5) PRESENCE DIRECTE */}
                <section className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Présence directe de rongeurs : rat ou souris vus dans le
                    logement
                  </h2>

                  <p className="text-muted">
                    Voir un rat ou une souris dans un logement ou un local
                    professionnel est souvent un moment marquant. Que ce soit en
                    pleine journée, la nuit ou de manière répétée, une présence
                    directe de rongeurs n’est jamais anodine. Contrairement à ce
                    que l’on peut penser, ce type de situation ne correspond
                    presque jamais à un passage isolé.
                  </p>

                  <p className="text-muted">
                    Dans la majorité des cas, voir un rongeur signifie qu’une
                    infestation est déjà en place.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Pourquoi voit-on des rats ou des souris
                  </h3>
                  <p className="text-muted">
                    Les rats et les souris sont généralement discrets et actifs
                    la nuit. Lorsqu’ils deviennent visibles, notamment en
                    journée, cela indique souvent que leur population augmente
                    ou que leurs zones de refuge sont saturées. Ils sont alors
                    contraints de sortir plus fréquemment pour chercher de la
                    nourriture ou se déplacer.
                  </p>
                  <p className="text-muted">
                    Dans les logements collectifs, les commerces ou les
                    bâtiments anciens, la présence directe est souvent liée à
                    une circulation entre plusieurs zones ou plusieurs locaux.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Ce que signifie une présence en journée
                  </h3>
                  <p className="text-muted">
                    Voir un rat ou une souris en pleine journée est un signal
                    d’alerte important. Cela signifie généralement que
                    l’infestation est avancée. Les rongeurs prennent plus de
                    risques et modifient leur comportement lorsqu’ils sont
                    nombreux ou dérangés dans leurs refuges.
                  </p>
                  <p className="text-muted">
                    Ce type de situation nécessite une prise en charge rapide
                    pour éviter une aggravation.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Les risques liés à une présence directe de rongeurs
                  </h3>
                  <p className="text-muted">
                    La présence visible de rats ou de souris pose des risques
                    immédiats. Au-delà de l’aspect anxiogène, les rongeurs
                    peuvent contaminer les surfaces, les sols et les denrées
                    alimentaires. Ils peuvent également provoquer des dégâts
                    matériels et se propager rapidement vers d’autres pièces ou
                    logements.
                  </p>
                  <p className="text-muted">
                    Dans les locaux professionnels, cette situation peut
                    entraîner des non-conformités sanitaires et des conséquences
                    sur l’activité.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Pourquoi une action rapide est indispensable
                  </h3>
                  <p className="text-muted">
                    Tenter de gérer seul une présence directe de rongeurs est
                    rarement efficace. Les pièges isolés ou les produits du
                    commerce peuvent parfois capturer un individu, mais ils ne
                    traitent pas l’infestation dans son ensemble. Pendant ce
                    temps, les autres rongeurs continuent à circuler et à se
                    reproduire.
                  </p>
                  <p className="text-muted">
                    Une dératisation professionnelle permet d’identifier
                    l’ampleur réelle du problème et de mettre en place une
                    solution adaptée et durable.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Besoin d’une intervention rapide
                  </h3>
                  <p className="text-muted">
                    Si vous avez vu un rat ou une souris dans votre logement ou
                    votre local, il est important d’agir sans attendre. Une
                    intervention rapide permet d’éviter une prolifération et des
                    conséquences plus lourdes.
                  </p>
                  <p className="text-muted">
                    Contactez Flash Nuisible pour un diagnostic
                    <br />
                    Devis gratuit et intervention sur demande
                  </p>
                </section>

                {/* 6) CONTEXTES SPECIFIQUES */}
                <section className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Rongeurs dans des contextes spécifiques : maison ancienne,
                    cave, garage, locaux professionnels
                  </h2>

                  <p className="text-muted">
                    La présence de rongeurs n’apparaît pas toujours de la même
                    manière selon le type de bâtiment. Certaines configurations
                    sont particulièrement favorables aux rats et aux souris.
                    Maisons anciennes, caves, garages, logements collectifs ou
                    locaux professionnels présentent des contextes spécifiques
                    qui facilitent l’installation et la circulation des
                    rongeurs.
                  </p>

                  <p className="text-muted">
                    Dans ces situations, le problème est souvent plus discret au
                    départ, mais aussi plus durable s’il n’est pas traité
                    correctement.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Pourquoi certains lieux attirent davantage les rongeurs
                  </h3>
                  <p className="text-muted">
                    Les rats et les souris recherchent avant tout des endroits
                    calmes, peu fréquentés, offrant des accès faciles, de la
                    chaleur et parfois des sources de nourriture. Les bâtiments
                    anciens, avec leurs murs épais, leurs vides techniques et
                    leurs fissures, offrent de nombreux points d’entrée. Les
                    caves et garages, souvent encombrés et peu visités,
                    deviennent rapidement des zones de refuge idéales.
                  </p>
                  <p className="text-muted">
                    Dans les logements collectifs ou les locaux professionnels,
                    la multiplication des accès et des réseaux favorise la
                    circulation des rongeurs d’un espace à l’autre.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Rongeurs dans une maison ancienne
                  </h3>
                  <p className="text-muted">
                    Les maisons anciennes présentent souvent des défauts
                    d’étanchéité, des passages invisibles et des matériaux
                    propices à la circulation des rongeurs. Les rats et souris
                    peuvent s’y installer durablement sans être détectés
                    immédiatement. Les premiers signes apparaissent parfois
                    tardivement, sous forme de bruits, de traces ou d’odeurs.
                  </p>
                  <p className="text-muted">
                    Dans ce type de bâtiment, une approche globale est
                    indispensable pour éviter les récidives.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Rongeurs dans une cave ou un garage
                  </h3>
                  <p className="text-muted">
                    Les caves et garages sont des zones très fréquemment
                    touchées. Le calme, l’humidité et la présence de stockage
                    attirent les rongeurs. Ils peuvent ensuite remonter vers les
                    étages ou les parties habitées du bâtiment.
                  </p>
                  <p className="text-muted">
                    Une infestation localisée dans une cave ou un garage est
                    rarement isolée. Elle constitue souvent un point d’entrée
                    vers le reste du logement.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Rongeurs en logement collectif
                  </h3>
                  <p className="text-muted">
                    En habitat collectif, la présence de rongeurs concerne
                    rarement un seul appartement. Les rats et souris circulent à
                    travers les murs, les gaines techniques et les parties
                    communes. Une intervention partielle ou isolée peut déplacer
                    le problème sans le résoudre.
                  </p>
                  <p className="text-muted">
                    Dans ce contexte, la coordination et une intervention
                    adaptée à l’ensemble du bâtiment sont essentielles pour
                    obtenir un résultat durable.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Rongeurs dans un commerce ou un restaurant
                  </h3>
                  <p className="text-muted">
                    Dans les commerces, restaurants et locaux professionnels, la
                    présence de rongeurs représente un risque sanitaire et
                    réglementaire important. Une simple observation peut
                    entraîner des conséquences sur l’activité, l’image et la
                    conformité lors de contrôles.
                  </p>
                  <p className="text-muted">
                    Ces environnements nécessitent des interventions rapides,
                    discrètes et conformes aux exigences sanitaires, avec un
                    suivi adapté si nécessaire.
                  </p>

                  <h3 className="text-xl font-extrabold tracking-tight">
                    Pourquoi une approche classique ne suffit pas
                  </h3>
                  <p className="text-muted">
                    Dans ces contextes spécifiques, les solutions temporaires ou
                    les traitements partiels sont rarement efficaces. Sans
                    analyse précise du bâtiment, des accès et des zones de
                    passage, les rongeurs continuent à circuler et à se
                    réinstaller.
                  </p>
                  <p className="text-muted">
                    Une dératisation professionnelle adaptée au contexte permet
                    de traiter le problème à la source et de prévenir les
                    récidives.
                  </p>
                </section>

                {/* SECTION COMMUNE : INTERVENTION + POURQUOI + DIAGNOSTIC */}
                <section className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Intervention locale et prise en charge
                  </h2>
                  <p className="text-muted">
                    Flash Nuisible intervient pour ce type de problématique sur
                    l’ensemble de son secteur. Des pages locales permettent
                    d’adapter l’intervention selon votre zone, notamment pour la
                    dératisation à Saint-Étienne, Saint-Just-Saint-Rambert,
                    Montbrison et Saint-Chamond.
                  </p>

                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Pourquoi faire appel à Flash Nuisible
                  </h2>
                  <p className="text-muted">
                    Flash Nuisible propose une approche basée sur le diagnostic,
                    l’efficacité et la prévention. Chaque situation est analysée
                    avec précision afin de mettre en place une solution adaptée,
                    durable et conforme aux règles sanitaires, aussi bien pour
                    les particuliers que pour les professionnels.
                  </p>

                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Besoin d’un diagnostic
                  </h2>
                  <p className="text-muted">
                    Si vous êtes confronté à des signes de rongeurs (bruits,
                    traces, odeurs, dégâts, présence directe), il est préférable
                    d’agir sans attendre. Une prise en charge rapide permet
                    d’éviter une infestation durable et des conséquences plus
                    lourdes.
                  </p>
                  <p className="text-muted">
                    Contactez Flash Nuisible pour un diagnostic
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
                    Lorsque les bruits deviennent quotidiens, s’intensifient ou
                    s’accompagnent d’autres signes comme des crottes, des odeurs
                    ou des dégâts visibles, la situation doit être considérée
                    comme urgente. C’est également le cas en logement collectif
                    ou dans un local professionnel.
                  </p>
                  <p className="text-muted">
                    Lorsque les crottes apparaissent en quantité, dans des zones
                    sensibles comme la cuisine ou un local professionnel, ou
                    lorsqu’elles s’accompagnent d’autres signes comme des bruits
                    ou des odeurs, la situation doit être considérée comme une
                    urgence.
                  </p>
                  <p className="text-muted">
                    La situation doit être considérée comme urgente dès que des
                    câbles électriques sont endommagés, que l’isolation est
                    fortement détériorée ou que des trous apparaissent dans les
                    murs ou les sols.
                  </p>
                  <p className="text-muted">
                    La situation doit être considérée comme urgente lorsque
                    l’odeur devient très forte, persistante ou envahissante, ou
                    lorsqu’elle s’accompagne d’autres signes comme des bruits,
                    des crottes ou des dégâts matériels. C’est également le cas
                    dans les logements collectifs et les locaux professionnels.
                  </p>
                  <p className="text-muted">
                    La situation doit être considérée comme urgente dès qu’un
                    rat ou une souris est vu à l’intérieur du logement ou du
                    local, et plus encore si cette présence est répétée ou
                    observée en journée. L’urgence est également évidente dans
                    les logements collectifs, les commerces et les
                    établissements recevant du public.
                  </p>
                  <p className="text-muted">
                    La situation devient urgente dès que des signes directs
                    apparaissent, comme la présence visible de rongeurs, des
                    dégâts matériels, des odeurs persistantes ou des traces
                    visibles. L’urgence est systématique en logement collectif
                    et en local professionnel.
                  </p>

                  <Link
                    href="/urgences/deratisation"
                    className="btn btn-primary w-full text-center"
                  >
                    Voir la page Urgence dératisation
                  </Link>
                </div>

                <div className="glass rounded-2xl p-6 space-y-3">
                  <div className="font-extrabold">Besoin d’un diagnostic</div>
                  <p className="text-muted">
                    Une intervention rapide permet d’éviter une infestation
                    durable et des dégâts supplémentaires.
                  </p>
                  <a
                    href="#contact"
                    className="btn btn-ghost w-full text-center"
                  >
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
    </>
  );
}
