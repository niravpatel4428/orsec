import React from "react";
import globe from "../../assets/globe.mp4";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Globe = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    
      gsap.utils.toArray(".fade-bottom").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
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
    <section className="relative h-full lg:h-screen overflow-hidden">
      <video
        className="relative scale-[2.3] md:scale-[1.75] object-top -z-2 mt-64 md:mt-96 lg:mt-96 xxl:mt-[420px] mx-auto"
        autoPlay
        loop
        muted
      >
        <source src={globe} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* gradient */}
      <div className="absolute top-0 md:top-40 xl:top-0 -z-1 bg-globeTopGradient bg-no-repeat w-full h-96"></div>

      <div className="w-full absolute top-2 md:top-12 left-1/2 -translate-x-1/2 z-3">
        <div className="custom-container">
          <div className="w-full sm:max-w-xl md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto">
            <div className="w-full flex flex-col gap-2 text-white text-xs md:text-[19px] text-center !leading-130 fade-bottom">
              <p>
                Que vous soyez un Datacenter cherchant à gérer et sécuriser des
                volumes massifs de données tout en optimisant la performance de
                vos serveurs et de vos réseaux, un Opérateur soucieux de fournir
                une connectivité plus fiable et plus rapide, ou un Gouvernement
                souhaitant renforcer sa cybersécurité dans le respect des cadres
                légaux, notre solution répond à l&apos;ensemble de ces besoins
                avec efficacité et souplesse.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 -z-1 bg-globeBottmGradient bg-no-repeat w-full h-full"></div>
    </section>
  );
};

export default Globe;
