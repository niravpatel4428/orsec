import React from "react";
import ProtectYourself from "./ProtectYourself";
import MainLayout from "../../layouts/MainLayout";
import Trusted from "./Trusted";
import InfoTable from "./InfoTable";
import PerspectiveVideo from "./PerspectiveVideo";
import Solutions from "./Solutions";
import Visibilty from "./visibilty";
import Technologies from "./Technologies";
import About from "./About";
import Hero from "./Hero";
import icon1 from "../../assets/infoTable-1.svg";
import icon2 from "../../assets/infoTable-2.svg";
import icon3 from "../../assets/infoTable-3.svg";
import icon4 from "../../assets/infoTable-4.svg";
import icon5 from "../../assets/infoTable-5.svg";

const infoItems = [
  {
    number: "01",
    title: "Vision 360 sur tout votre réseau",
    description:
      "Surveillance en temps réel de tout votre réseau, y compris les trafics chiffrés, grâce à notre moteur propriétaire.",
    icon: icon1,
  },
  {
    number: "02",
    title: "Solutions indétectables par les hacker",
    description:
      "Nos algorithmes évoluent constamment pour contrer les nouvelles techniques d'attaque et notre architecture distribuée renforce notre résilience.",
    icon: icon2,
  },
  {
    number: "03",
    title: "Informations recevables devant la justice",
    description:
      "Toutes nos données sont conservées de manière sécurisée et sont recevables en cas de litige.",
    icon: icon3,
  },
  {
    number: "04",
    title: "Moteur DPI 100% propriétaire (pas Open Source)",
    description:
      "Notre moteur DPI, entièrement développé en interne, offre une personnalisation élevée et une avance technologique significative.",
    icon: icon4,
  },
  {
    number: "05",
    title: "Des millions d’attaques identifiées et bloquées / mois",
    description:
      "Nous bloquons des millions d'attaques chaque mois grâce à notre déploiement.",
    icon: icon5,
  },
];
const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Technologies />
      <Visibilty />
      <Solutions />
      <PerspectiveVideo />
      <InfoTable infoItems={infoItems} />
      <Trusted />
      <ProtectYourself />
    </MainLayout>
  );
};

export default HomePage;
