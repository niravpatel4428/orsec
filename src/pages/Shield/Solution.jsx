import React from "react";
import Btn from "../../components/btn";
import DotGrid from "../../components/animationComp/DotGrid";

const features = [
  {
    title: "Visibilité totale",
    description:
      "Disposez d'une lecture granulaire et détaillée de l'ensemble de votre trafic, pour mieux comprendre et maîtriser votre environnement numérique.",
  },
  {
    title: "Sécurité renforcée",
    description:
      "Identifiez rapidement les comportements suspects ou malveillants grâce à une analyse en temps réel du contenu des paquets.",
  },
  {
    title: "Qualité de service optimisée",
    description:
      "Anticipez et gérez les surcharges réseau en identifiant les flux à forte consommation de bande passante.",
  },
  {
    title: "Conformité réglementaire",
    description:
      "Respectez les exigences légales et les normes du secteur en matière de sécurité et de protection des données.",
  },
];

const Solution = () => {
  return (
    <section className="relative pb-16 md:pb-20 xl:pb-28">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-12 mb-8 md:mb-12">
          <div className="md:col-span-8 lg:col-span-9">
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-light text-lg sm:text-xl md:text-2xl lg:text-3xl xxl:text-40 !leading-120 animated-title">
                <span>
                  Une solution{" "}
                  <p className="inline-block text-gray-light">
                    militaire&nbsp;
                  </p>
                  permanente
                </span>
                <br /> <span> pour la cybersécurité de votre entreprise.</span>
              </h2>

              <div className="flex flex-col gap-3 text-gray-medium text-base multiParagraph">
                <p>
                  Dans un monde où la consommation de données s&apos;accroît à
                  une vitesse exponentielle, vous avez besoin d&apos;outils à la
                  fois puissants et fiables pour superviser et sécuriser vos
                  infrastructures.
                </p>
                <p>
                  Notre solution NMS Shield répond à ces enjeux en vous offrant
                  une visibilité granulaire sur votre trafic réseau et en
                  facilitant la détection proactive des menaces.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3 hidden md:block">
            <div className="h-full flex justify-end items-end bottomFade">
              <Btn text="Testez NMS Shield" />
            </div>
          </div>
        </div>
        <div className="grid max-[389px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <>
              <div
                key={index}
                className="h-full relative overflow-hidden border border-[#2D2C3C] rounded-lg flex flex-col justify-end gap-9 md:gap-7 py-6 px-4 sm:p-5 xl:p-8 xxl:p-10 StepByStepBlock "
              >
                <h2 className="text-light text-base md:text-2xl xl:text-3xl xxl:text-32">
                  {feature.title}
                </h2>
                <div className="flex flex-col gap-2 text-[#CBCBCB] text-xs md:text-sm xl:text-base font-light">
                  <p>{feature.description}</p>
                </div>
                {/* background */}
                <DotGrid
                  dotSize={4}
                  gap={12}
                  baseColor="#0000"
                  activeColor="#BF50E5"
                  proximity={100}
                  shockRadius={350}
                  shockStrength={9}
                  resistance={750}
                  returnDuration={1.5}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
