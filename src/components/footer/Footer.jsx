import { Link } from "react-router";
// import ftBg from "../../assets/footer-background.webp";
// import ftBgM from "../../assets/footer-background-mobile.webp";
import youtube from "../../assets/youtube.svg";
import linkedin from "../../assets/linkedin.svg";
import logo from "../../assets/navbar-logo.svg";
import { useEffect, useRef } from "react";
import "./footer.css";
import gsap from "gsap";
import Iridescence from "../animationComp/Iridescence";
const Footer = () => {
  const links = [
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Mentions Légales", href: "/legalnotices" },
    { name: "Statuts des services", href: "/" },
  ];
  const footerRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const gradient = gradientRef.current;
    if (!footer || !gradient) return;

    const handleMouseMove = (e) => {
      const { clientX } = e;
      const { left, width } = footer.getBoundingClientRect();

      const x = (clientX - left - width / 2) / (width / 2);

      gsap.to(gradient, {
        x: x * 250,
        y: 0,
        scale: 1.35,
        duration: 1,
        ease: "power2.out",
      });
    };

    footer.addEventListener("mousemove", handleMouseMove);

    const floatAnimation = gsap.to(gradient, {
      x: "+=180",
      y: 0,
      yoyo: true,
      repeat: -1,
      duration: 8,
      ease: "sine.inOut",
    });

    return () => {
      footer.removeEventListener("mousemove", handleMouseMove);
      floatAnimation.kill();
    };
  }, []);
  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden pb-9 md:pb-12 xl:pb-16 pt-44 md:pt-72 lg:pt-80 xl:pt-[450px] xxl:pt-[570px]"
    >
      {/* bacground gradien TOP side */}
      <div
        className="w-full h-72 absolute top-0"
        style={{
          background: `linear-gradient(180deg, #02030C 50%, rgba(2, 3, 12, 0.00) 100%)`,
        }}
      ></div>
      {/* Gradient Blob */}
      {/* <div
        ref={gradientRef}
        className="absolute bottom-0 left-1/2 w-2/3 h-[200px] blur-[120px] opacity-80 pointer-events-none -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #E6B8FF, #C295FD, #9747FF, #6A00FF, transparent)",
          borderTopLeftRadius: "999px",
          borderTopRightRadius: "999px",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
        }}
      ></div> */}
      <Iridescence
        color={[
          [0.59, 0.28, 1.0],
          [0.23, 0.11, 0.36],
        ]}
        mouseReact={true}
        amplitude={0.1}
        speed={1.0}
      />

      {/* content */}
      <div className="custom-container">
        <div className="w-full max-w-4xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="relative z-1 border-b border-light pb-8 mb-9">
            <div className="flex justify-between items-end lg:items-center gap-5">
              <div className="flex max-lg:flex-col lg:items-center gap-10 xl:gap-20">
                <Link
                  to="/"
                  className="h-[31px] inline-block w-fit max-sm:mb-2"
                >
                  <img
                    src={logo}
                    alt="icon"
                    className="object-contain h-full w-full"
                  />
                </Link>

                <ul className="flex max-md:flex-col md:items-center gap-7 lg:gap-10">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-light text-base  hover:text-gray-light hover:underline transition-all duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="flex items-center gap-15">
                <li>
                  <Link
                    to="/"
                    className="hover:opacity-70 transition-all duration-300"
                  >
                    <img src={linkedin} alt="icon" className="w-6" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:opacity-70 transition-all duration-300"
                  >
                    <img src={youtube} alt="icon" className="w-6" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-end">
            <p className="text-[#D9C5FF] text-10 md:text-xs font-light ">
              © 2025 Tous les droits protégé pour ORSEC Technologies
            </p>
          </div>
        </div>
      </div>

      {/* backgroun image of gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-[524px] md:h-[460px] lg:h-[484px] xl:h-[630px] xxl:h-[750px] w-full -z-5">
        <img
          src={ftBg}
          alt="image1"
          className="object-cover h-full w-full hidden md:block"
        />
        <img
          src={ftBgM}
          alt="image1"
          className="object-cover h-full w-full block md:hidden"
        />
      </div> */}
    </footer>
  );
};

export default Footer;
