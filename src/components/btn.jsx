import React from "react";
import arrow from "../assets/btn-inner-arrow.svg";
import { Link } from "react-router";
const Btn = ({ text, href = "/", ctmClass }) => {
  return (
    <Link
      to={`${href}`}
      className={`group w-fit border border-[#4B4B4B] rounded flex items-center gap-2 py-10px px-5 hover:border-[#9747FF] hover:bg-[#9747FF] transition-all duration-300 ${ctmClass}`}
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
      <span className="text-light text-13  !leading-none transition-all duration-300">
        {text}
      </span>
    </Link>
  );
};

export default Btn;
