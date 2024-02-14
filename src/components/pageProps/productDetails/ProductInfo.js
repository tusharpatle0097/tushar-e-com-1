import React,{useContext} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { DarkModeContext } from "../../../context/DarkModeContext";
const ProductInfo = ({ productInfo }) => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5 ">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className={`w-full ${isDarkMode?'bg-orange-200 text-black':'text-white'} w-52 h-10 bg-primeColor  bg-black flex justify-center items-center text-base font-semibold hover:bg-yellow-600 duration-300 cursor-pointer`}
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
