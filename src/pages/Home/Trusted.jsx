import React from "react";
import trusted1 from "../../assets/trusted1.svg";
import trusted2 from "../../assets/trusted2.svg";
import trusted3 from "../../assets/trusted3.svg";
import trusted4 from "../../assets/trusted4.svg";
import trusted5 from "../../assets/trusted5.svg";
import trusted6 from "../../assets/trusted6.svg";
const Trusted = () => {
  return (
    <section className="relative pt-16 pb-16 md:pb-20 xl:pb-28">
      <div className="custom-container">
        <div className="mb-12">
          <h6 className="text-light text-32 leading-130 bottomFade">
            Ils nous ont confié leur sécurité
          </h6>
        </div>
        <div className="flex max-md:flex-wrap justify-between items-center gap-10 lg:gap-16 xl:gap-24 md:h-[85px] StepByStepShow">
            <div className="max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center">
                <img src={trusted1} alt="trusted" className="object-contain" />
            </div>
            <div className="max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center">
                <img src={trusted2} alt="trusted" className="object-contain" />
            </div>
            <div className="max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center">
                <img src={trusted3} alt="trusted" className="object-contain" />
            </div>
            <div className="max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center">
                <img src={trusted4} alt="trusted" className="object-contain" />
            </div>
            <div className="max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center">
                <img src={trusted5} alt="trusted" className="object-contain" />
            </div>
            <div className="max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center">
                <img src={trusted6} alt="trusted" className="object-contain" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
