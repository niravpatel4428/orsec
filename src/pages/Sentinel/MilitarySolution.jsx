import React from "react";
import Btn from "../../components/btn";

// const features = [
//   {
//     icon: icon1,
//     title: (
//       <>
//         Détection <br /> avancée
//       </>
//     ),
//     description:
//       "NMS Sentinel détecte les menaces qui échappent aux solutions de défense habituelles.",
//   },
//   {
//     icon: icon2,
//     title: (
//       <>
//         Réponse <br /> rapide
//       </>
//     ),
//     description:
//       "NMS Sentinel répond automatiquement aux menaces détectées, vous permettant de limiter les dommages.",
//   },
//   {
//     icon: icon3,
//     title: (
//       <>
//         Protection <br /> sans faille
//       </>
//     ),
//     description:
//       "NMS Sentinel enregistre vos données sans alerter les pirates, les privant de toutes tentatives de manipulations malveillantes.",
//   },
// ];

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="h-full border border-[#2D2C3C] bg-techGradient rounded-lg flex flex-col justify-between items-center gap-9 md:gap-7 p-8 sm:p-5 xl:p-10">
      <div className="h-44 lg:h-52 xl:h-60 xxl:h-72 flex justify-center items-center">
        <img
          src={icon}
          alt={title}
          className="object-contain scale-75 lg:scale-90"
        />
      </div>
      <div className="flex flex-col gap-7 lg:gap-8">
        <h2 className="text-light text-2xl md:text-28 xl:text-32 !leading-none">
          {title}
        </h2>
        <p className="text-[#CBCBCB] text-xs md:text-base font-light !leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

const MilitarySolution = ({ features,mainTitle }) => {
  return (
    <section className="relative mb-14 md:mb-9">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-15 mb-7 md:mb-14 xxl:mb-20">
          <div className="md:col-span-7">
            <div>
              <h2 className="text-light text-lg sm:text-xl md:text-26 lg:text-28 xl:text-35 !leading-130">
               {mainTitle}
              </h2>
            </div>
          </div>
          <div className="col-span-5 hidden md:block">
            <div className="h-full flex justify-end items-end">
              <Btn text="Testez NMS Sentinel" href="/" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* {features.map((feature, index) => (
            <div
              key={index}
              className="h-full border border-[#2D2C3C] bg-techGradient rounded-lg flex flex-col justify-between items-center gap-9 md:gap-7 p-8 sm:p-5 xl:p-10"
            >
              <div className="h-44 lg:h-52 xl:h-60 xxl:h-72 flex justify-center items-center">
                <img
                  src={feature.icon}
                  alt={`icon${index + 1}`}
                  className="object-containe scale-75 lg:scale-90"
                />
              </div>
              <div className="flex flex-col gap-7 lg:gap-8">
                <h2 className="text-light text-2xl md:text-28 xl:text-32  !leading-none">
                  {feature.title}
                </h2>
                <p className="text-[#CBCBCB] text-xs md:text-base font-light !leading-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))} */}
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilitarySolution;
