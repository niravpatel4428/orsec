import React from "react";
import MainLayout from "../../layouts/MainLayout";
import InfoTable from "../Home/InfoTable";
import icon1 from "../../assets/shield-page-infoTable-1.svg";
import icon2 from "../../assets/shield-page-infoTable-2.svg";
import icon3 from "../../assets/shield-page-infoTable-3.svg";
import icon4 from "../../assets/shield-page-infoTable-4.svg";
import Quick from "./Quick";
import Globe from "./Globe";
import Solution from "./Solution";
import Hero from "./hero";
import image1 from "../../assets/tab-block-1.webp";
import image2 from "../../assets/tab-block-2.webp";
import image3 from "../../assets/tab-block-3.webp";
import image4 from "../../assets/tab-block-4.webp";
import Managment from "../../components/tabbing/Managment";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const infoItems = [
  {
    number: "01",
    title: "Une expertise éprouvée",
    description:
      "Une équipe d’ingénieurs et de spécialistes en cybersécurité à votre service, cumulant 10 ans d’expérience.",
    icon: icon1,
  },
  {
    number: "02",
    title: "Un support réactif ",
    description:
      "Une assistance technique disponible 24/7 pour répondre à vos questions et vous accompagner dans vos opérations critiques.",
    icon: icon2,
  },
  {
    number: "03",
    title: "Un retour sur investissement",
    description:
      "Grâce à notre solution DPI, vous réduisez drastiquement les interruptions de service, les pertes de données et les risques de cyberattaques.",
    icon: icon3,
  },
  {
    number: "04",
    title: "Une adaptabilité sectorielle",
    description:
      "Que vous soyez un opérateur majeur, un datacenter ou un organisme public, notre technologie s’ajuste aux spécificités de votre activité.",
    icon: icon4,
  },
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
const ShieldPage = () => {
   useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".quick-fade").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <MainLayout>
      <Hero />
      <Solution />
      <Globe />
      <Quick />

      <div className="custom-container max-md:pt-10">
        <h4 className="text-light text-32 xl:text-4xl xxl:text-40 leading-130 quick-fade">
          <span> Pourquoi travailler avec </span>
          <br className="hidden md:block" />
          <span>
            <p className="text-gray-light"> ORSEC TECHNOLOGIES ?</p>
          </span>
        </h4>
      </div>

      <InfoTable infoItems={infoItems} />
      <Managment clsPt="py-20"
        tabs={tabs}
        heading="Gardez la maîtrise de votre cybersécurité en quelques clics."
        subHeading=" Portail de Management"
        description="Le Portail de Management fait office de poste de commandement : c’est ici que vous paramétrez, surveillez et administrez l’ensemble de l’écosystème NMS Audit."
        functionsTitle="Fonctions principales"
        functionsList={[
          "Administration unifiée des sondes NMS : déploiement, mises à niveau et contrôle des ressources (CPU, RAM, services actifs).",
          "Pilotage précis de la connectivité Internet : mises à jour des bases CTI ou fonctionnement 100 % on‑premise selon votre politique.",
          "Supervision instantanée des services critiques : disponibilité des services web, conteneurs Docker, API, injecteurs, etc.",
          "Seuils et alertes personnalisables pour anticiper toute surcharge ou panne matérielle/logicielle.",
          "Accès sécurisé au réseau interne sans exposition externe, avec mode « boîte noire » possible",
        ]}
        utilitiesTitle="Utilities"
        utilitiesList={[
          "Optimisation continue et haute résilience de la plateforme NMS.",
          "Maîtrise totale de l’infrastructure réseau, appuyée par des journaux inviolables.",
          "Flexibilité à la carte : désactivez les modules optionnels, tel le serveur LLM IA on‑premise, selon vos besoins.",
        ]}
      />
      <Managment clsPt="py-20"
        tabs={tabs2}
        heading="Analysez votre trafic réseau dans ses moindres détails. "
        subHeading=" Portail d’Investigation"
        description="Le Portail d’Investigation offre une vue granulaire sur tout le trafic capté par les sondes NMS, permettant aux experts cybersécurité, analystes SOC et CISO de déceler, interpréter et neutraliser les menaces."
        functionsTitle="Fonctions principales"
        functionsList={[
          "Contrôle exhaustif des flux VPN, DNS, DHCP, VLAN, protocoles et applications, avec statistiques par émetteur, récepteur, volume et session. ",
          "Affichage en temps réel (fenêtre glissante de 15 minutes) de l’activité réseau, complété par des archives consultables sur plusieurs mois.",
          "Heatmaps, visualisations interactives et cartographie IP géolocalisée pour une lecture stratégique des déplacements de données. ",
          "Détection automatique des CVE, vulnérabilités, fuites sur le Dark Web et connexions atypiques.",
          "Inventaire précis des User Agents : systèmes d’exploitation, navigateurs et applications employés.",
          "Moteur de requêtes avancé en syntaxe KQL pour isoler sessions, protocoles ou comportements à risque avec une grande finesse.",
        ]}
        utilitiesTitle="Utilities"
        utilitiesList={[
          "Identification éclair des menaces : Shadow IT, fuites de données et activités hostiles.",
          "Conformité assurée aux exigences NIS 2, RGPD, etc., grâce à l’enregistrement complet des flux réseau.",
          "Intervention incident rationalisée : extraction des preuves et audit détaillé de chaque action.",
        ]}
      />
    </MainLayout>
  );
};

export default ShieldPage;
