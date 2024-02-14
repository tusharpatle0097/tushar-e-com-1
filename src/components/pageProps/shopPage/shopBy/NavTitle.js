import React,{useContext} from "react";
import { BiCaretDown } from "react-icons/bi";
import { DarkModeContext } from "../../../../context/DarkModeContext";
const NavTitle = ({ title, icons }) => {

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);


  return (
    <div className="flex items-center justify-between pb-5">
      {icons ? (
        <>
          <h3 className={`font-bold lg:text-xl  ${isDarkMode ? "text-white" : 'text-primeColor'}`}>{title}</h3>
          {icons && <BiCaretDown />}
        </>
      ) : (
        <>
          <h3 className={`font-bold lg:text-xl  ${isDarkMode ? "text-white" : 'text-primeColor'}`}>{title}</h3>
        </>
      )}
    </div>
  );
};

export default NavTitle;
