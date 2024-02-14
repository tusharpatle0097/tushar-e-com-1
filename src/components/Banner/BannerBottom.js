import React,{useContext} from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import { DarkModeContext } from "../../context/DarkModeContext";  

const BannerBottom = () => {

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);


  return (
    <div className={`w-full ${isDarkMode?'bg-[#494848]':'bg-[#F5F5F3]'} border-b-[1px]  border-b-gray-200 `}>
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="font-bold font-titleFont w-6 text-center">2</span>
          <p className={` text-base ${isDarkMode?'text-white':''}`}>Two years warranty</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
            <MdLocalShipping />
          </span>
          <p className={` text-base ${isDarkMode?'text-white':''}`}>Free shipping</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-center w-6">
            <CgRedo />
          </span>
          <p className={` text-base ${isDarkMode?'text-white':''}`}>Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
