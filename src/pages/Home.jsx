import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Hero() {

  return (
    <div className="min-h-[calc(100vh-65px)] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mt-[50px] md:mt-0">
      <div className="md:w-1/2 h-full flex flex-col items-center justify-center text-center md:text-left p-4">

      {/* heading */}
        <h1 className=" font-[diya] italic text-orange-950  md:text-orange-900 text-center  text-pretty text-6xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 md:mb-4">
          Your Kitchen
          <br />
          <span className=" text-orange-800">
            Your Rules
          </span>
        </h1>

        {/* Paragraph */}
        <p className="italic font-[diya] text-gray-500 md:text-black w-full md:text-2xl lg:text-3xl  text-center mb-2 md:mb-4 ">
          Save, cook, and enjoy your favourite {""}
          <span className="hidden sm:block h-[1px] w-full"> <br /></span>
          recipes anytime.
        </p>

        {/* Button */}
        <div className="flex items-center justify-center w-full">
          <Link to="/create" className=" border-2 border-orange-800 px-4 py-2 rounded-full text-orange-800 hover:bg-orange-800 hover:text-white transition-colors duration-300 mt-4">
            Create Recipe
          </Link>
        </div>

      </div>
      <div className="md:w-1/2 h-full flex items-center justify-center"> 
        <img
          src="public/—Pngtree—happy girl chef cooking delicious_20851012.png"
          alt="Chef cooking"
          className="w-[80%] sm:w-[60%] md:w-[70%] object-contain "
        />
      </div>

      </div>
  );
}
