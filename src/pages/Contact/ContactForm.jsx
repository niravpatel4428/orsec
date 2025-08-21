import nmsaudit_img from "../../assets/nmsaudit-img.jpg";
import imgMobile from "../../assets/contact-form-mobile.webp";
import arrow from "../../assets/btn-inner-arrow.svg";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".observe-bottom-fade").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
      gsap.fromTo(
        ".description p",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".description",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.utils.toArray(".col-blur").forEach((el) => {
        gsap.fromTo(
          el,
          { filter: "blur(10px)",  },
          {
            filter: "blur(0px)",
            duration: 1.2,
            delay: 0.6,
            ease: "power3.out",
            stagger: 0.1,
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-5 lg:gap-7 xl:gap-14 lg:align-center max-sm:pt-14 -mt-[68px] lg:-mt-20">
      <div className="max-sm:h-60 sm:h-[420px] md:min-h-screen xl:min-h-[1179px]">
        <img
          src={nmsaudit_img}
          alt="nmsaudit-img"
          className="object-cover w-full h-full hidden md:block"
        />
        <img
          src={imgMobile}
          alt="nmsaudit-img"
          className="object-cover sm:object-top w-full h-full block md:hidden"
        />
      </div>
      <div className="flex flex-col justify-center max-w-700 w-full mx-auto px-4 lg:p-8 ">
        <div className="mb-9 lg:mt-24 xxl:mt-0">
          <div className="mb-2 md:mb-8">
            <h2 className="text-light text-[35px] md:text-40 leading-130 observe-bottom-fade">
              <span>Je souhaite tester NMS Audit</span>
            </h2>
          </div>
          <div className="text-base text-gray-medium gap-5 observe-bottom-fade">
            <p>
              Besoin d'une main expérimentée et compétente pour protéger vos
              données des cyber attaques ? Remplissez le formulaire pour obtenir
              une consultation gratuite.
            </p>
          </div>
        </div>

        <form>
          <div className="flex flex-wrap gap-4">
            {/* Prénom */}
            <div className="flex-1 col-blur">
              <div className="flex flex-col-reverse gap-1 mb-2">
                <input
                  type="text"
                  id="First_Name"
                  className="peer resize-none h-8 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white"
                />
                <label
                  htmlFor="First_Name"
                  className=" text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  Prénom
                </label>
              </div>
            </div>
            {/* Nom */}
            <div className="flex-1 col-blur">
              <div className="flex flex-col-reverse gap-1 mb-2">
                <input
                  type="text"
                  id="Last_Name"
                  className="peer resize-none h-8 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white"
                />
                <label
                  htmlFor="Last_Name"
                  className=" text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  Nom
                </label>
              </div>
            </div>
            {/* Société */}
            <div className="flex-auto w-full col-blur">
              <div className="flex flex-col-reverse gap-1 mb-2">
                <input
                  type="text"
                  id="Company"
                  className="peer resize-none h-8 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white"
                />
                <label
                  htmlFor="Company"
                  className=" text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  Société
                </label>
              </div>
            </div>
            <div className="flex-auto w-full col-blur">
              <div className="flex flex-col-reverse gap-1 mb-2">
                <input
                  type="text"
                  id="Activity"
                  className="peer resize-none h-8 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white"
                />
                <label
                  htmlFor="Activity"
                  className=" text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  Nature de l'activité
                </label>
              </div>
            </div>
            {/* address */}
            <div className="flex-1 col-blur">
              <div className="flex flex-col-reverse gap-1 mb-2">
                <input
                  type="text"
                  id="Address"
                  className="peer resize-none h-8 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white"
                />
                <label
                  htmlFor="Address"
                  className=" text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  Adresse
                </label>
              </div>
            </div>
            {/* code */}
            <div className="flex-1 md:flex-initial md:w-48 col-blur">
              <div className="flex flex-col-reverse gap-1 mb-2">
                <input
                  type="text"
                  id="Code_Postal"
                  className="peer resize-none h-8 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white"
                />
                <label
                  htmlFor="Code_Postal"
                  className=" text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  Code postal
                </label>
              </div>
            </div>
            {/* telephone */}
            <div className="flex-auto w-full col-blur">
              <div className="flex flex-col-reverse gap-1 mb-2">
                <input
                  type="text"
                  id="Phone_Number"
                  className="peer resize-none h-8 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white"
                />
                <label
                  htmlFor="Phone_Number"
                  className=" text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  Numéro de téléphone
                </label>
              </div>
            </div>
            {/* email */}
            <div className="flex-auto w-full col-blur">
              <div className="flex flex-col-reverse gap-1 mb-1">
                <input
                  type="text"
                  id="Email"
                  className={`peer resize-none h-8 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white`}
                />
                <label
                  htmlFor="Email"
                  className="text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  Email
                </label>
              </div>
              <p className="text-[#D40D0D] text-[10px] font-normal mt-2">
                Veuillez renseigner une adresse email valide
              </p>
            </div>
            {/* message */}
            <div className="flex-auto w-full col-blur">
              <div className="flex flex-col-reverse gap-1 mb-2">
                <input
                  type="text"
                  id="Leave_Message"
                  className="peer resize-none h-8 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white"
                />
                <label
                  htmlFor="Leave_Message"
                  className=" text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  Laissez nous un message
                </label>
              </div>
            </div>
            {/* NDA */}
            <div className="flex-auto w-full col-blur">
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  id="Protect_NDA"
                  className="peer resize-none w-4 h-4 relative top-1 text-base text-white bg-transparent border-b-2 border-[#ABACAD] outline-none py-1 focus:border-white"
                />
                <label
                  htmlFor="Protect_NDA"
                  className="text-sm md:text-base tracking-[0.5px] text-gray-medium peer-focus:text-white transition-all duration-300"
                >
                  I want to protect my data by signing an NDA
                </label>
              </div>
            </div>

            {/* submit buttons */}
            <div className="flex-auto w-full col-blur">
              <button
                type="submit"
                className={`group w-full border border-[#4B4B4B] rounded text-center flex items-center gap-2 py-10px px-5 hover:border-[#9747FF] hover:bg-[#9747FF] transition-all duration-300`}
              >
                <div className="size-6 flex justify-center items-center">
                  <p className="bg-white rounded-full size-1 flex items-center justify-center group-hover:size-6 transition-all duration-300">
                    <img
                      src={arrow}
                      alt="icon"
                      className="h-0 group-hover:h-3 transition-all duration-300"
                    />
                  </p>
                </div>
                <span className="w-full text-light text-13 text-center !leading-none transition-all duration-300">
                  Réservez une démo
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
