import React from "react";
import Btn from "../../components/btn";

const ProtectYourself = () => {
  return (
    <section className="relative pt-16 md:pt-20 xl:pt-28 md:-mb-40 xl:-mb-64 xxl:-mb-72 z-2">
      <div className="custom-container">
        <div className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto xl:px-5">
          <div className="flex flex-col justify-center items-center gap-6 md:gap-10 xl:gap-16 text-center">
            <h6 className="text-light text-2xl md:text-26 lg:text-28 xl:text-32 leading-130 bottomFade">
              Ne laissez pas une cyberattaque mettre votre activité en péril.
              Protégez-vous dès maintenant.
            </h6>
            <div className="bottomFade">
              <Btn
                text="Testez nos solutions"
                href="/"
                ctmClass="!bg-[#1C1143] hover:!bg-[#9747FF]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectYourself;
