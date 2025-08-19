import banner_video from "../../assets/about-banner-video.mp4";

const AboutBanner = () => {
  return (
    <section className="relative py-36 sm:pt-44 sm:pb-36 lg:pt-60 lg:py-60 -mt-[68px] lg:-mt-20">
      <div className="absolute left-0 right-0 top-0 bottom-0 -z-1">
        <video
          src={banner_video}
          playsInline
          loop
          muted
          autoPlay
          className="w-full h-full mix-blend-multiply object-cover"
        ></video>
      </div>
      <div className="relative">
        <div className="custom-container">
          <div className="flex flex-wrap flex-col text-center gap-5 md:gap-8 lg:gap-9">
            <h1 className="text-light text-32 md:text-5xl lg:text-6xl xl:text-7xl leading-130 loadingAnimated-title">
              <span>
                Orsec <br className="block sm:hidden" /> Technologies SAS
              </span>
            </h1>
            <div className="flex flex-wrap flex-col gap-5 text-[19px] md:text-2xl lg:text-3xl text-gray-light leading-150 loadingBottomFade">
              <p className="leading-[inherit]">Technologies 100% Françaises</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
