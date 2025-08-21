import React from "react";
import Btn from "../../components/btn";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProtectYourself = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".Protect-fade").forEach((el) => {
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
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative pt-16 md:pt-20 x;:pt-24 xxl:pt-28 md:-mb-40 xl:-mb-64 xxl:-mb-72 z-2">
      <div className="custom-container">
        <div className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto xl:px-5">
          <div className="flex flex-col justify-center items-center gap-6 md:gap-10 xl:gap-16 text-center">
            <h6 className="text-light text-2xl md:text-26 lg:text-28 xl:text-32 leading-130 Protect-fade">
              Ne laissez pas une cyberattaque mettre votre activité en péril.
              Protégez-vous dès maintenant.
            </h6>
            <div className="Protect-fade">
              <Btn text="Testez nos solutions" href="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectYourself;
