import MainLayout from "../../layouts/MainLayout";
import MilitarySolution from "../Sentinel/MilitarySolution";
import icon1 from "../../assets/audit-page-militarySolution-1.svg";
import icon2 from "../../assets/audit-page-militarySolution-2.svg";
import icon3 from "../../assets/audit-page-militarySolution-3.svg";
import observe from "../../assets/observe-video.gif";
import Observe from "../Sentinel/observe";
import Hero from "./hero";
import Quick from "./Quick";
import image1 from "../../assets/tab-block-1.webp";
import image2 from "../../assets/tab-block-2.webp";
import image3 from "../../assets/tab-block-3.webp";
import image4 from "../../assets/tab-block-4.webp";
import Managment from "../../components/Managment";
const newFeatures = [
  {
    icon: icon1,
    title: (
      <>
        Enquêtes <br /> post-incident
      </>
    ),
    description:
      "Après une attaque, NMS Audit vous permet de retracer les événements et d’identifier les failles exploitées.",
  },
  {
    icon: icon2,
    title: (
      <>
        Audits
        <br /> de conformité
      </>
    ),
    description:
      "NMS Audit vous permet de vérifier si vous respectez les politiques de conformité avant un audit ou une évaluation de sécurité.",
  },
  {
    icon: icon3,
    title: (
      <>
        Formations
        <br /> et simulations
      </>
    ),
    description:
      "NMS Audit peut simuler des attaques et ainsi éduquer votre personnel aux pratiques de détection et de réponse aux incidents.",
  },
];

const defaultDescription = [
  "Le système NMS développé par Orsec Technologies offre une visibilité complète sur votre réseau jusqu'à la couche 7 (L7) en utilisant des technologies telles que l'inspection approfondie des paquets (DPI).",
  "Cela revient à observer une scène de crime à la lumière UV, la lumière bleue des séries policières, et de voir les indices qui permettent de comprendre les incidents.",
  "Comme une Boîte Noire, le système NMS enregistre également en continu toutes les activités de votre réseau - sans être vu. Vous garantissant une protection des données face aux tentatives de suppression des hackers.",
];
const tabs = [
  { label: "Tableau de bord", image: image1 },
  { label: "Suivi des périphériques", image: image2 },
  { label: "Analyse des risques", image: image3 },
  { label: "Remontée des Alertes", image: image4 },
  { label: "Suivi des statistiques", image: image1 },
  { label: "Rapports automatiques LLM", image: image2 },
  { label: "Investigation", image: image3 },
  { label: "Gestion des paramètres", image: image4 },
];
const tabs2 = [
  { label: "Login", image: image1 },
  { label: "Capture Réseau", image: image2 },
  { label: "Capture Ondes", image: image3 },
  { label: "Paramètres et décodage", image: image4 },
  { label: "Exporter les données", image: image1 },
  { label: "Cartographie réseau", image: image2 },
  { label: "Analyse des flux en temps réel", image: image3 },
  { label: "Portail On Premise", image: image4 },
];
const AuditPage = () => {
  return (
    <MainLayout>
      <Hero />
      <MilitarySolution
        mainTitle="Une solution militaire pour vos opérations de <br /> sécurité ponctuelles"
        features={newFeatures}
      />
      <Observe
        title="Pas de sécurité sans visibilité"
        description={defaultDescription}
        imageSrc={observe}
      />
      <Quick />
      <Managment
        tabs={tabs2}
        heading="Explorez en profondeur votre trafic réseau. "
        subHeading="Portail d’Investigation"
        description="Le Portail d’Investigation offre une visibilité détaillée sur l’ensemble du trafic réseau capté par les sondes NMS ; c’est aussi l’espace où l’expert cybersécurité, l’analyste SOC ou le CISO peut détecter, interpréter et contrer les menaces."
        // functionsTitle=""
        functionsList={[]}
        // utilitiesTitle=""
        utilitiesList={[]}
      />
      <Managment
        tabs={tabs}
        heading="Explorez en profondeur votre trafic réseau. "
        subHeading="Portail d’Investigation"
        description="Le Portail d’Investigation offre une visibilité détaillée sur l’ensemble du trafic réseau capté par les sondes NMS ; c’est aussi l’espace où l’expert cybersécurité, l’analyste SOC ou le CISO peut détecter, interpréter et contrer les menaces."
        functionsTitle="Fonctions principales"
        functionsList={[
          "Surveillance des flux VPN, DNS, DHCP, VLAN, Protocoles, Applications avec détails par source, Destination, Volume, Session.",
          "Visualisation en temps réel de l’activité réseau (Live 15 min) ou historique sur plusieurs mois.",
          "Heatmaps, graphiques dynamiques, cartographie géolocalisée des IPs pour une vue stratégique des mouvements réseau.",
          "Identification des failles CVE, vulnérabilités, fuites de données (Dark Web), et sessions suspectes.",
          "Suivi des UA (User Agent) : OS, navigateurs, apps utilisées.",
          "Recherche avancée avec syntaxe KQL pour cibler précisément les sessions, protocoles ou comportements suspects.",
        ]}
        utilitiesTitle="Utilities"
        utilitiesList={[
          "Détection et investigation rapide des menaces (Shadow IT, Data leaks, activités malveillantes).",
          "Conformité réglementaire (NIS2, RGPD…) avec preuve d’activité réseau enregistrée.",
          "Réponse efficace aux incidents, remontée de preuves, audit complet des événements.",
        ]}
      />
    </MainLayout>
  );
};

export default AuditPage;
