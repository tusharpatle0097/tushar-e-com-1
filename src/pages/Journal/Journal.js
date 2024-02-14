import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { DarkModeContext } from "../../context/DarkModeContext";
const Journal = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className={` ${isDarkMode ? 'text-white' : 'text-primeColor'}  font-semibold text-lg`}>Tushar</span>{" "}
         <span className={` ${isDarkMode?'text-white':'text-primeColor'} `}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
          </span> 
        </h1>
        <Link to="/shop">
          <button className= {`w-44 ${isDarkMode?'bg-orange-200 text-black':'text-white'} w-52 h-10 bg-primeColor  bg-black flex justify-center items-center text-base font-semibold hover:bg-yellow-600 duration-300 cursor-pointer`}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
