import React, { useRef } from "react";
import Btn from "../../components/btn";
import DotGrid from "../../components/animationComp/DotGrid";
import CustomCursor from "../../components/CustomCursor";

const FeatureCard = ({ icon, title, description }) => {
  return (
    // <div className="h-full border border-[#2D2C3C] bg-techGradient rounded-lg flex flex-col justify-between items-center gap-9 md:gap-7 p-8 sm:p-5 xl:p-10">
    <div className="relative h-full border border-[#2D2C3C] rounded-lg flex flex-col justify-between items-center gap-9 md:gap-7 p-8 sm:p-5 xl:p-10">
      <div className="h-44 lg:h-52 xl:h-60 xxl:h-72 flex justify-center items-center">
        <img
          src={icon}
          alt={title}
          className="object-contain scale-75 lg:scale-90"
        />
      </div>
      <div className="flex flex-col gap-7 lg:gap-8 multiParagraph">
        <h2 className="text-light text-2xl md:text-28 xl:text-32 !leading-120">
          {title}
        </h2>
        <p className="text-[#CBCBCB] text-xs md:text-base font-light !leading-tight">
          {description}
        </p>
      </div>
      {/* background dot */}
      <DotGrid
        dotSize={4}
        gap={12}
        baseColor="#0000"
        activeColor="#BF50E5"
        proximity={120}
        shockRadius={150}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
};

const MilitarySolution = ({ features, mainTitle }) => {
  const sectionRef = useRef(null);

  const titleParts = mainTitle.split("<br />");
  return (
    <section ref={sectionRef} className="relative mb-14 md:mb-9">
      <CustomCursor targetRef={sectionRef} size={50} color="white" />

      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-15 mb-7 md:mb-14 xxl:mb-20">
          <div className="md:col-span-8">
            <div>
              <h2 className="text-light text-lg sm:text-xl md:text-26 lg:text-28 xl:text-35 xxl:text-40 !leading-120 loadingAnimated-title">
                {titleParts.map((part, index) => (
                  <span key={index}>
                    {part}
                    {index < titleParts.length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>
          </div>
          <div className="col-span-4 hidden md:block">
            <div className="h-full flex justify-end items-end bottomFade">
              <Btn text="Testez NMS Sentinel" href="/" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
