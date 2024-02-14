import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-primeColor w-[92px] h-[35px] bg-black text-white flex justify-center items-center text-base font-semibold hover:bg-yellow-600 duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
