import React from "react";
import MainLayout from "../../layouts/MainLayout";
import MilitarySolution from "./MilitarySolution";
import Observe from "./observe";
import Intelligence from "./intelligence";
import Attackers from "./Attackers";
import MiniVersion from "./MiniVersion";
import icon1 from "../../assets/MilitarySolution-1.svg";
import icon2 from "../../assets/MilitarySolution-2.svg";
import icon3 from "../../assets/MilitarySolution-3.svg";
import observe from "../../assets/observe-video.gif";
import Hero from "./Hero";
import Managment from "../../components/Managment";
import image1 from "../../assets/tab-block-1.webp";
import image2 from "../../assets/tab-block-2.webp";
import image3 from "../../assets/tab-block-3.webp";
import image4 from "../../assets/tab-block-4.webp";
const newFeatures = [
  {
    icon: icon1,
    title: (
      <>
        Détection <br /> avancée
      </>
    ),
    description:
      "NMS Sentinel détecte les menaces qui échappent aux solutions de défense habituelles.",
  },
  {
    icon: icon2,
    title: (
      <>
        Réponse <br /> rapide
      </>
    ),
    description:
      "NMS Sentinel répond automatiquement aux menaces détectées, vous permettant de limiter les dommages.",
  },
  {
    icon: icon3,
    title: (
      <>
        Protection <br /> sans faille
      </>
    ),
    description:
      "NMS Sentinel enregistre vos données sans alerter les pirates, les privant de toutes tentatives de manipulations malveillantes.",
  },
];

const defaultDescription = [
  "Chaque année, les entreprises perdent des millions (3,7 en moyenne) parce que leurs données sont uniquement protégées avec des pare-feu.",
  "Mais tout miser sur le blocage des menaces ne fait que repousser l'échéance, car les hackers finissent toujours par trouver une faille.",
  "Donc pour ne pas figurer aux côtés d'Airbus, de Boulanger, de SFR (et d'autres sociétés piratées), vous devez coupler votre système de défense à un système de détection.",
  "Car ce qui coûte cher ce n'est pas l'attaque elle-même, mais le temps de réaction pour colmater la faille (175 jours en moyenne).",
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
  { label: "Tableau de bord", image: image1 },
  { label: "Trafic et Volume", image: image2 },
  { label: "Usage du trafic", image: image3 },
  { label: "Analyse des Vlan", image: image4 },
  { label: "Analyse des Protocoles", image: image1 },
  { label: "Analyse des Applications", image: image2 },
  { label: "Analyse des DHCP", image: image3 },
  { label: "Analyse des DNS", image: image4 },
  { label: "Analyse des Users Agent", image: image4 },
];

const SentinelPage = () => {
  return (
    <MainLayout>
      <Hero />
      <MilitarySolution
        mainTitle="Une solution militaire permanente pour la <br /> cyber-sécurité de votre entreprise."
        features={newFeatures}
      />
      <Observe
        title="Observer pour mieux protéger"
        subTitle="Comment Orsec décrypte le réseau de votre entreprise."
        description={defaultDescription}
        imageSrc={observe}
      />
      <Intelligence />
      <Attackers />
      <Managment
        tabs={tabs}
        heading="Pilotez votre cybersécurité en quelques clics."
        subHeading="Portail de Management"
        description="Le Portail de Management est l’interface principale vous permettant de configurer, superviser et maintenir l’ensemble de l’architecture NMS Sentinel."
        functionsTitle="Fonctions principales"
        functionsList={[
          "Gestion centralisée des sondes NMS (déploiement, mise à jour, supervision des ressources : CPU, RAM, services actifs).",
          "Contrôle de l’accès Internet pour les mises à jour des bases CTI (Cyber Threat Intelligence) ou la gestion 100% On-Premise.",
          "Surveillance en temps réel des services critiques (statut des services web, Docker, APIs, injecteurs…).",
          "Alertes et seuils configurables pour prévenir toute surcharge ou défaillance matérielle/logicielle.",
          "Accès sécurisé au réseau de l’entreprise, sans exposition externe (mode boîte noire possible).",
        ]}
        utilitiesTitle="Utilities"
        utilitiesList={[
          "Optimisation et résilience du système NMS.",
          "Contrôle total sur l’infrastructure réseau, avec logs inaltérables.",
          "Adaptation aux besoins client via l’activation ou désactivation de modules comme le serveur LLM IA On-Premise en option.",
        ]}
      />
      <Managment
        tabs={tabs2}
        heading="Plongez au cœur de votre trafic réseau."
        subHeading="Portail d’Investigation"
        description="Le Portail d’Investigation permet une analyse fine et complète de tout votre trafic réseau collecté par les sondes NMS. C’est ici que l’expert cybersécurité, l’analyste SOC ou le CISO peut identifier, comprendre et réagir aux menaces."
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
      <MiniVersion />
    </MainLayout>
  );
};

export default SentinelPage;
