

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" mt-9 md:mt-2 ml-3">
      {/* Navbar */}
      <nav className="mt-5 flex items-center md:justify-between ">
     
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-orange-700 text-3xl -mt-1 mr-4"
        >
          ☰
        </button>
      </nav>
<br />
      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="italic fixed inset-0 bg-orange-100/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-3xl font-semibold text-orange-800 z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-4xl text-orange-800"
          >
            ✕
          </button>

          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/recipes" onClick={() => setMenuOpen(false)}>Recipes</NavLink>
          <NavLink to="/create" onClick={() => setMenuOpen(false)}>Create Recipe</NavLink>
        </div>
      )}

      {/* Hero Section */}
      <div className= " bg-orange-100/50  transparent flex flex-col items-center md:block md:pl-10 ">
        {/* Heading */}
      
     
 <h1 className=" font-[diya] italic text-orange-950 md:mt-20 text-5xl md:text-8xl  md:text-orange-900  text-pretty text-center md:text-left md:ml-20">
  Your Kitchen
  <br />
  <span className=" text-orange-800">
    Your Rules
  </span>
</h1>
       
        {/* Paragraph */}
        <p className="italic font-[diya] text-lg md:text-4xl text-gray-500 md:text-black   mt-4 text-center md:text-left md:ml-20">
          Save, cook, and enjoy your favourite {""}
          <span className="hidden md:inline"> <br /></span>
          recipes anytime.
        </p>
       
        
<div>
  <Link to = "/create" >
   <button className="block mt-9  px-3 py-2 border-2 border-orange-800 text-orange-700 rounded-full hover:bg-orange-950 hover:text-orange-100 transition-all duration-300 italic md:ml-64 md:px-5" >
    Create Recipe

    </button>
      </Link>  
    </div>
     

        <div className="flex-1 flex justify-center md:justify-end">
   
    <div className="w-96 h-96 md:-mt-96 md:mr-20  md:w-[700px] md:h-auto md:max-h-[70vh]">
   <img 
    src="public/—Pngtree—happy girl chef cooking delicious_20851012.png"
    alt="Chef cooking"
    className="w-full h-full object-contain "
  /> 
</div>
  </div>
      </div>
    </div>
  );
}
