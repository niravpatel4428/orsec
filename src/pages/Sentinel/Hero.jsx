import React from "react";
import bg from "../../assets/sentinel-bg.webp";
import machine from "../../assets/sentinel-machine.png";
import Btn from "../../components/btn";
const Hero = () => {
  return (
    <section className="relative mim-h-screen pt-52 -mt-[68px] lg:-mt-20">
      <div className="custom-container">
        <div className="w-full max-w-[810px] mx-auto">
          <div className="flex flex-col justify-center items-center gap-6 xl:gap-9 text-center">
            <h1 className="text-light text-32 md:text-5xl lg:text-6xl xl:text-7xl leading-130 font-bold loadingAnimated-title">
              <span>NMS Sentinel</span>
            </h1>

            <div className="space-y-2 text-light text-xs md:text-xl lg:text-2xl loadingBottomFade">
              <p>
                Soyez alerté des menaces en temps réel, pour protéger vos
                données des fuites et des suppressions.
              </p>
            </div>
            <div className="loadingBottomFade">
              <Btn text="Testez NMS Sentinel" href="/" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[940px] mx-auto h-80 md:h-96 xl:h-[530px] px-10 mt-10">
          <img src={machine} alt="icon" className="w-full h-full" />
        </div>
      </div>

      <div className="absolute inset-0 -z-1">
        <img src={bg} alt="icon" className="object-cover w-full h-full" />
      </div>
      <div className="absolute bottom-0 w-full h-64 z-2 bg-bottomGradient bg-no-repeat"></div>
    </section>
  );
};

export default Hero;
