import React from "react";
import icon from "../../assets/play-icon.svg";
import bv from "../../assets/about-banner-video.mp4"
const PerspectiveVideo = () => {
  return (
    <section className="relative mt-9 md:mt-11 mb-9 md:mb-16">
      <div className="custom-container">
        <div className="mb-12">
          <h6 className="text-light text-32 md:text-26 lg:text-28 xl:text-32 xxl:text-4xl leading-130 bottomFade">
            Regardez la vidéo et changez de perspectives sur la cybersécurité.
          </h6>
        </div>

        <div className="relative rounded border border-[#574D63] h-[203px] sm:h-80 md:h-96 lg:h-[450px] xl:h-[600px] xxl:h-[716px]">
          <video src={bv} playsInline loop muted autoPlay className='w-full h-full object-cover'></video>
          
          <div className="bg-accent-light rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-20 md:size-20 xl:size-28 xxl:size-[136px] flex justify-center items-center hover:bg-accent-dark transition-all duration-300">
            <img
              src={icon}
              alt="icon"
              className="object-contain w-7 md:w-8 xl:w-11 xxl:w-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerspectiveVideo;
