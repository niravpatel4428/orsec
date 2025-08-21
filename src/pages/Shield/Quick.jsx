import React, { useRef } from "react";
import img1 from "../../assets/shield-page-quick.webp";
import bg from "../../assets/shield-page-quick-img-bg.webp";
import Btn from "../../components/btn";
import SpotlightCard from "../../components/animationComp/SpotlightCard";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Audit préalable",
    description:
      "Analyse de votre environnement et définition des objectifs stratégiques.",
  },
  {
    number: "02",
    title: "Installation & configuration",
    description:
      "Mise en place de la solution DPI adaptée à votre architecture réseau.",
  },
  {
    number: "03",
    title: "Formation et transfert de compétences",
    description: "Ateliers pratiques pour garantir l’autonomie de vos équipes.",
  },
  {
    number: "04",
    title: "Suivi & maintenance",
    description:
      "Contrôles réguliers, mises à jour et assistance pour optimiser en continu la performance et la sécurité de votre réseau.",
  },
];
const Quick = () => {
  const sectionRef = useRef(null);

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
      gsap.fromTo(
        ".fade-card",
        { filter: "blur(20px)", opacity: 0, y: 40 },
        {
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".parent-card",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative z-5 overflow-hidden pt-10 md:pt-5 xl:pt-0 md:pb-32 lg:pb-36 xxl:pb-44 bg-primary-dark"
    >
      {/* <d iv className="custom-container"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-16 gap-15 lg:align-center max-md:px-15 md:pl-6 xl:pl-8">
        <div className="h-full w-full max-w-[680px] mx-auto">
          <div className="h-full flex flex-col gap-8 lg:gap-10 justify-center xl:py-3">
            <div className="flex flex-col gap-8">
              <h4 className="text-light text-32 xl:text-4xl xxl:text-40 leading-130 quick-fade">
                <span>Une solution</span>
                <br />
                <span>clé en main</span>
              </h4>
              <p className="text-gray-medium text-base quick-fade">
                Nous savons que chaque infrastructure est unique et que
                l’adoption d’une nouvelle solution peut soulever des
                interrogations. C’est pourquoi nos équipes vous accompagnent
                étape par étape.
              </p>
            </div>

            <div className="grid grid-cols-2 parent-card">
              {steps.map((step, index) => (
                <SpotlightCard
                  key={index}
                  outerClass="border border-[#574D63] fade-card"
                >
                  <div className="h-full py-4 px-3 lg:p-4 xxl:pr-14 flex flex-col gap-4">
                    <div className="block space-y-2">
                      <span className="text-white text-xs">{step.number}</span>
                      <h4 className="text-white text-lg lg:text-22">
                        {step.title}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-light text-xs md:text-sm xl:text-base">
                      <p>{step.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            <div className="hidden lg:block quick-fade">
              <Btn text="Testez NMS Shield" href="/" />
            </div>
          </div>
        </div>
        <div className="w-full h-full min-h-80 relative lg:ml-16 xl:ml-24">
          <img
            src={img1}
            alt="image1"
            className="object-contain h-full w-full"
          />
          <img
            src={bg}
            alt="bg"
            className="w-full h-full absolute inset-0 -z-1"
          />
        </div>
      </div>
      {/* </d iv> */}
      <div className=""></div>
    </section>
  );
};

export default Quick;
