import React, { useEffect, useState,useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { DarkModeContext } from "../../context/DarkModeContext";
const About = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className={` ${isDarkMode?'text-white':'text-primeColor'}  font-semibold text-lg`}>Tushar E-com</span>{" "}
       <span className={` ${isDarkMode?'text-white':'text-primeColor'} `}>
       is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </span>   
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
