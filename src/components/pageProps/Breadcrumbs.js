import React, { useEffect, useState, useContext } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";


const Breadcrumbs = ({ prevLocation, title }) => {

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");
  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
      <h1 className={`text-5xl ${isDarkMode ? 'text-white' : 'text-primeColor'}  font-titleFont font-bold`}>
        {title}
      </h1>
      <p className="text-sm font-normal text-lightText capitalize flex items-center">
        <span> {prevLocation === "" ? "Home" : prevLocation}</span>

        <span className={`capitalize font-semibold ${isDarkMode ? 'text-white' : 'text-primeColor'}  font-titleFont font-bold px-1`}>
          <HiOutlineChevronRight />
        </span>
        <span className={`capitalize font-semibold ${isDarkMode ? 'text-white' : 'text-primeColor'}  font-titleFont font-bold`}>
          {locationPath}
        </span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
