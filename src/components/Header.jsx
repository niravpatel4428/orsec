import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import logo from "../assets/navbar-logo.svg";
import Btn from "./btn";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const links = [
    { name: "NMS Audit", path: "/audit" },
    { name: "NMS Sentinel", path: "/sentinel" },
    { name: "NMS Shield", path: "/shield" },
  ];
  return (
    <header className="sticky top-0 left-0 right-0 pt-15 z-50">
      <div className="custom-container">
        <div className="bg-neutral-dark px-5 py-7px rounded-10 flex justify-between items-center gap-5 xl:gap-10">
          {/* brand logo */}
          <Link to="/" className="h-22 inline-block">
            <img src={logo} alt="icon" className="w-full h-full" />
          </Link>

          {/* toggle-btn */}
          <button
            onClick={handleShow}
            className="relative z-99 bg-foreground rounded-full p-2 size-10 hidden max-lg:flex flex-col justify-center items-center gap-2"
          >
            <span
              className={`w-13px h-[2px] block bg-white transition-all duration-300 ${
                show ? "w-26 rotate-45 absolute top-5" : "mr-auto"
              }`}
            ></span>
            <span
              className={`w-26 h-[2px] block bg-white ${
                show ? "opacity-0" : ""
              } transition-all duration-300`}
            ></span>
            <span
              className={`w-13px h-[2px] block bg-white ${
                show ? "w-26 -rotate-45 absolute bottom-[18px]" : "ml-auto"
              }  transition-all duration-300`}
            ></span>
          </button>

          {/* nav links */}
          <div
            className={`${
              show
                ? "max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:bg-neutral-dark max-lg:h-screen max-lg:p-6 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:items-betwen"
                : "max-lg:hidden"
            }`}
          >
            <div
              className={`${
                show ? "max-lg:block" : "max-lg:hidden"
              } max-lg:h-[calc(100%-0px)] max-lg:overflow-y-scroll max-lg:pt-20`}
            >
              <div className="max-lg:h-full max-lg:overflow-y-scroll max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
                <ul className="max-lg:mt-40 flex max-lg:flex-col max-lg:items-center gap-16 lg:gap-5 xl:gap-10">
                  {links.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        onClick={handleShow}
                        className={({ isActive }) =>
                          isActive
                            ? "text-white text-[35px] lg:text-13 hover:text-light transition-all duration-300"
                            : "text-[#717172] text-[35px] lg:text-13 hover:text-light transition-all duration-300"
                        }
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center w-80 max-w-md mx-auto mt-52 lg:hidden">
                  <div onClick={handleShow} className="">
                    <Btn text="Réserver une démo" href="/contact" />
                  </div>
                  <div className="">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right side btn group */}
          <div className="hidden lg:flex flex-row items-center gap-4">
            <div className="hidden lg:block">
              <Client />
            </div>

            {/* language changes */}
            <div className="">
              <LanguageSwitcher />
            </div>

            {/* btn */}
            <Btn text="Réserver une démo" href="/contact" />
          </div>
        </div>
      </div>
    </header>
  );
};

//  Portail client
const Client = () => {
  return (
    <Link to="/" className="group flex felx-row items-center gap-2">
      <span className="text-[#717172] text-13  group-hover:text-light transition-all duration-300">
        Portail client
      </span>
      <ArrowUp />
    </Link>
  );
};
const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Fr");
  const dropdownRef = useRef(null);

  const languages = [
    { code: "Fr", label: "Français" },
    { code: "En", label: "English" },
  ];

  const handleSelect = (lang) => {
    setSelectedLang(lang.code);
    setOpen(false);
    // TODO: Add your language change logic here
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      ref={dropdownRef}
      className="relative flex items-center justify-center lg:justify-start"
    >
      {/* Toggle button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="group flex items-center gap-2 lg:px-3 p-2 lg:p-0 rounded-full lg:rounded-none"
      >
        <Globe className="w-5 h-5 text-[#717172] group-hover:text-light transition-colors" />
        <span className="text-[#717172] text-13 group-hover:text-light transition-colors">
          {selectedLang}
        </span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <ul
          className={`absolute ${
            // Below lg: position above the button
            "bottom-full mb-2 lg:top-full lg:bottom-auto lg:mt-2"
          } right-0 bg-neutral-dark rounded-lg shadow-lg border border-gray-700 overflow-hidden z-50`}
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`px-4 py-2 cursor-pointer text-white text-sm hover:bg-gray-700 ${
                selectedLang === lang.code ? "bg-gray-800" : ""
              }`}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;

const ArrowUp = () => {
  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="stroke-[#717172] group-hover:!stroke-light transition-all duration-300"
        d="M9.2666 1.16663H4.12374M9.2666 1.16663V6.30948M9.2666 1.16663L1.2666 9.16663"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Globe = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3470_1463)">
        <path
          className="fill-[#717172] group-hover:!fill-light transition-all duration-300"
          d="M18.4665 10C18.4665 8.90565 18.2509 7.82202 17.8321 6.81097C17.4133 5.79993 16.7995 4.88127 16.0257 4.10744C15.2519 3.33362 14.3332 2.71979 13.3222 2.30101C12.3111 1.88222 11.2275 1.66667 10.1331 1.66667C7.923 1.66667 5.80338 2.54464 4.24058 4.10744C2.67778 5.67025 1.7998 7.78986 1.7998 10C1.7998 12.2101 2.67778 14.3298 4.24058 15.8926C5.80338 17.4554 7.923 18.3333 10.1331 18.3333C12.3433 18.3333 14.4629 17.4554 16.0257 15.8926C17.5885 14.3298 18.4665 12.2101 18.4665 10ZM16.7415 9.16667H14.2998C14.1624 7.20679 13.4909 5.32196 12.3581 3.71667C13.5219 4.12997 14.5479 4.85839 15.3219 5.8207C16.0958 6.78301 16.5873 7.94139 16.7415 9.16667ZM7.6998 10.8333H12.6331C12.4199 12.8922 11.5423 14.8256 10.1331 16.3417C8.72486 14.832 7.86746 12.8911 7.6998 10.8333ZM7.6998 9.16667C7.89388 7.11819 8.7478 5.1881 10.1331 3.66667C11.5537 5.17177 12.4332 7.1067 12.6331 9.16667H7.6998ZM7.9998 3.69167C6.8611 5.30585 6.1788 7.19727 6.0248 9.16667H3.5248C3.68223 7.92625 4.18531 6.7551 4.97661 5.78698C5.76791 4.81885 6.81552 4.09278 7.9998 3.69167ZM3.5248 10.8333H6.0248C6.16205 12.8011 6.8397 14.6927 7.98314 16.3C6.80312 15.8969 5.75979 15.171 4.97169 14.2047C4.1836 13.2383 3.68232 12.0703 3.5248 10.8333ZM12.3165 16.2917C13.4568 14.6839 14.142 12.7981 14.2998 10.8333H16.7581C16.6005 12.0669 16.1011 13.2317 15.3162 14.1963C14.5313 15.1609 13.4922 15.8867 12.3165 16.2917Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_3470_1463">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.133301)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
