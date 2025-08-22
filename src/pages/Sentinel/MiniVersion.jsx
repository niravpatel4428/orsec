import React from "react";
import miniS from "../../assets/mini-sentinelle.png";
import Btn from "../../components/btn";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MiniVersion = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".description li",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".description",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.utils.toArray(".fade-bottom").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);
  return (
    <section className="relative z-2 mt-20 mb-48 md:mb-0 xl:-mb-20">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 lg:gap-10 xl:gap-4">
          <div className="md:col-span-5">
            <div className="h-full  w-full flex md:justify-center md:items-center">
              <h5 className="text-light text-32 md:text-4xl xxl:text-40 !leading-tight fade-bottom">
                <span>Existe en</span> <br />
                <span>version mini</span>
              </h5>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="h-full w-full xl:pl-16">
              <div className="bg-miniGradient rounded-2xl border border-[#2D2C3C] py-16 md:py-10 xl:py-16 px-5 lg:px-10 xl:px-14">
                <div className="w-full mb-14 lg:mb-20">
                  <img
                    src={miniS}
                    alt="image1"
                    className="object-cover w-full"
                  />
                </div>

                <ul className="space-y-2 my-9 multiParagraph pl-7 description">
                  <li className="text-gray-medium text-base list-disc">
                    Vision 360 sur tout votre réseau
                  </li>
                  <li className="text-gray-medium text-base list-disc">
                    Solutions indétectables par les hackers
                  </li>
                  <li className="text-gray-medium text-base list-disc">
                    Informations recevables devant la justice
                  </li>
                  <li className="text-gray-medium text-base list-disc">
                    Moteur DPI 100% propriétaire (pas Open Source)
                  </li>
                  <li className="text-gray-medium text-base list-disc">
                    Des millions d&apos;attaques identifiées et bloquées / mois
                  </li>
                </ul>
                <div className="fade-bottom">
                  <Btn text="Testez NMS Sentinel" href="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniVersion;
