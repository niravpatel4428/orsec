import React from "react";
import Btn from "../../components/btn";
import machine from "../../assets/shield-page-hero-machine.webp";
import bg from "../../assets/hield-page-hero-bg.png";
const Hero = () => {
  return (
    <section className="relative -mt-[68px] lg:-mt-20 md:min-h-screen flex items-center justify-center pb-36 pt-36 md:pb-28 lg:pt-36 lg:pb-32">
      {/* content */}
      <div className="custom-container">
        <div className="w-full max-w-[1230px] mx-auto">
          <div className="h-full flex max-md:flex-col-reverse items-center max-md:gap-6">
            <div className="w-full md:max-w-96 lg:max-w-lg xl:max-w-2xl">
              <img
                src={machine}
                alt="machine"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-full md:max-w-md xl:max-w-xl lg:px-5 text-center">
              <div className="flex flex-col justify-center items-center gap-6 xl:gap-10">
                <h1 className="text-light text-32 md:text-5xl lg:text-6xl xl:text-7xl  leading-130">
                  NMS Shield
                </h1>

                <div className="space-y-2 text-light text-xs md:text-xl lg:text-2xl">
                  <p>
                    L&apos;outil de cyberdéfense le plus avancé pour les
                    Datacenters, les Opérateurs et les Gouvernements.
                  </p>
                </div>

                <div className="absolute max-md:bottom-20 md:relative flex justify-center">
                <Btn text="Testez NMS Shield" href="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bckground image */}
      <div className="absolute inset-0 -z-2">
        <img src={bg} alt="bg" className="h-full w-full object-cover" />
      </div>

      {/* bottom graadient */}
      <div className="absolute bottom-0 w-full h-36 -z-1 bg-bottomGradient bg-no-repeat"></div>
    </section>
  );
};

export default Hero;
