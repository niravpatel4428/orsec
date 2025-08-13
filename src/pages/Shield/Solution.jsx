import React from "react";
import Btn from "../../components/btn";

const Solution = () => {
  return (
    <section className="relative pb-16 md:pb-20 xl:pb-28">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-12 mb-8 md:mb-12">
          <div className="md:col-span-8 lg:col-span-9">
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-light  text-lg sm:text-xl md:text-2xl lg:text-3xl xxl:text-40 !leading-130">
                Une solution <span className="text-gray-light">militaire</span>{" "}
                permanente <br /> pour la cybersécurité de votre entreprise.
              </h2>

              <div className="flex flex-col gap-3 text-gray-medium text-base">
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
            <div className="h-full flex justify-end items-end">
              <Btn text="Testez NMS Shield" />
            </div>
          </div>
        </div>
        <div className="grid max-[389px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="h-full border border-[#2D2C3C] bg-techGradient rounded-lg flex flex-col justify-end gap-9 md:gap-7 py-6 px-4 sm:p-5 xl:p-8 xxl:p-10">
            <h2 className="text-light text-base md:text-2xl xl:text-3xl xxl:text-32">
              Visibilité totale
            </h2>
            <div className="flex flex-col gap-2 text-[#CBCBCB] text-xs md:text-sm xl:text-base font-light">
              <p>
                Disposez d&apos;une lecture granulaire et détaillée de
                l&apos;ensemble de votre trafic, pour mieux comprendre et
                maîtriser votre environnement numérique.
              </p>
            </div>
          </div>
          <div className="h-full border border-[#2D2C3C] bg-techGradient rounded-lg flex flex-col justify-end gap-9 md:gap-7 py-6 px-4 sm:p-5 xl:p-8 xxl:p-10">
            <h2 className="text-light text-base md:text-2xl xl:text-3xl xxl:text-32">
              Sécurité renforcée
            </h2>
            <div className="flex flex-col gap-2 text-[#CBCBCB] text-xs md:text-sm xl:text-base font-light">
              <p>
                Identifiez rapidement les comportements suspects ou malveillants
                grâce à une analyse en temps réel du contenu des paquets.
              </p>
            </div>
          </div>
          <div className="h-full border border-[#2D2C3C] bg-techGradient rounded-lg flex flex-col justify-end gap-9 md:gap-7 py-6 px-4 sm:p-5 xl:p-8 xxl:p-10">
            <h2 className="text-light text-base md:text-2xl xl:text-3xl xxl:text-32">
              Qualité de service optimisée
            </h2>
            <div className="flex flex-col gap-2 text-[#CBCBCB] text-xs md:text-sm xl:text-base font-light">
              <p>
                Anticipez et gérez les surcharges réseau en identifiant les flux
                à forte consommation de bande passante.
              </p>
            </div>
          </div>
          <div className="h-full border border-[#2D2C3C] bg-techGradient rounded-lg flex flex-col justify-end gap-9 md:gap-7 py-6 px-4 sm:p-5 xl:p-8 xxl:p-10">
            <h2 className="text-light text-base md:text-2xl xl:text-3xl xxl:text-32">
              Conformité réglementaire
            </h2>
            <div className="flex flex-col gap-2 text-[#CBCBCB] text-xs md:text-sm xl:text-base font-light">
              <p>
                Respectez les exigences légales et les normes du secteur en
                matière de sécurité et de protection des données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
