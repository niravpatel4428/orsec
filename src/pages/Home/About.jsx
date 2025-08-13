import React from "react";
import Btn from "../../components/btn";

const About = () => {
  return (
    <section className="relative z-5 lg:pt-10 -mt-12 lg:-mt-36 xl:-mt-40 xxl:-mt-36 mb-14 md:mb-16 xl:mb-24">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-15">
          <div className="lg:col-span-6">
            <div className="lg:pr-12 xl:pr-28 xxl:pr-44">
              <div className="hidden lg:block mb-10">
                <p className="text-gray-medium text-base ">
                  [About]
                </p>
              </div>
              <h2 className="text-light text-2xl md:text-26 lg:text-28 xl:text-32 leading-130">
                <span className="text-muted">175 jours</span> c&apos;est le
                temps moyen qu&apos;il faut à une structure pour
                s&apos;apercevoir qu&apos;elle est{" "}
                <span className="text-muted">
                  la cible d&apos;une cyberattaque.
                </span>
              </h2>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-4 text-gray-medium text-xs md:text-base mb-6 text-justify">
              <p>
                Avec ce délai, les hackers ont tout le temps nécessaire pour
                voler des données, les altérer ou mettre en place une demande de
                rançon. (On estime qu&apos;en moyenne, une attaque coûte 3,7
                millions d&apos;euros à une entreprise).
              </p>
              <p>
                On pourrait alors penser que la solution est d&apos;investir
                dans un système de protection hautement efficace… mais ce
                n&apos;est qu&apos;une question de temps avant que ce dernier ne
                le soit plus.
              </p>
              <p>
                La sophistication des attaques évoluant en même temps que celle
                des systèmes de sécurité. Sachant cela, il ne faut plus jouer le
                jeu de la défense : Mais celui de l&apos;observation.
              </p>
            </div>
            <div className="gap-6 lg:mt-10">
              <Btn text="Testez nos solutions" href="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
