import { Link } from "react-router";
import youtube from "../../assets/youtube.svg";
import linkedin from "../../assets/linkedin.svg";
import logo from "../../assets/navbar-logo.svg";
import "./footer.css";
import Iridescence from "../animationComp/Iridescence";
const Footer = () => {
  const links = [
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Mentions Légales", href: "/legalnotices" },
    { name: "Statuts des services", href: "/" },
  ];
  return (
    <footer
      className="relative overflow-hidden pb-9 md:pb-12 xl:pb-16 pt-44 md:pt-72 lg:pt-80 xl:pt-[450px] xxl:pt-[570px]"
    >
      {/* bacground gradien TOP side */}
      <div
        className="w-full h-72 absolute top-0"
        style={{
          background: `linear-gradient(180deg, #02030C 50%, rgba(2, 3, 12, 0.00) 100%)`,
        }}
      ></div>
      <Iridescence
        color={[
          [0.59, 0.28, 1.0],
          [0.23, 0.11, 0.36],
        ]}
        mouseReact={true}
        amplitude={1}
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
    </footer>
  );
};

export default Footer;
