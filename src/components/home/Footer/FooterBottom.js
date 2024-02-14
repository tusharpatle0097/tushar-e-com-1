import React,{useContext} from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { DarkModeContext } from "../../../context/DarkModeContext";

const FooterBottom = () => {

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  
  return (
    <div className={`w-full ${isDarkMode?'bg-slate-900':"bg-[#F5F5F3]"}  group`}>
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | Tushar E-Com shopping | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
