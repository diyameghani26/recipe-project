import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
  import { useLocation } from "react-router-dom";


export default function Navbar() {
  const location = useLocation();
  
  const [mobileMenu, setMobileMenu] = useState(false)
  if (location.pathname === "/create") return null;
  if (location.pathname === "/Create") return null;


  return (
    <>
    <nav className="italic flex w-full h-[65px] justify-between items-center px-3 sm:px-4 md:px-6 sticky top-0">
       <div className="h-12 flex justify-center items-center">
        <img 
          className="h-full object-contain" 
          src="/logo.png" 
          alt="Logo" 
        />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center gap-8  ">
          <NavLink className={(e) => e.isActive ? "text-orange-700" : "text-orange-950"} to="/">Home</NavLink>
          <NavLink className={(e) => e.isActive ? "text-orange-700" : "text-orange-950"} to="/About">About</NavLink>
          <NavLink className={(e) => e.isActive ? "text-orange-700" : "text-orange-950"} to="/Recipes">Recipes</NavLink>
          <NavLink className={(e) => e.isActive ? "text-orange-700" : "text-orange-950"} to="/Create">Create recipe</NavLink>
      </div>

      {/* mobile menu */}
        {
          mobileMenu && (
            <div className="italic fixed inset-0 bg-orange-100/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-3xl font-semibold text-orange-800 z-50">
              <div className=' h-[65px] w-full absolute top-0 left-0 flex items-center justify-between px-3 sm:px-4 md:px-6'>
                <div className="h-12 flex justify-center items-center">
                  <img
                    className="h-full object-contain"
                    src="/logo.png"
                    alt="Logo"
                  />
                </div>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="md:hidden text-orange-700 flex items-center justify-center text-3xl mr-4"
                >
                  ✕
                </button>
              </div>

              <NavLink to="/" onClick={() => setMobileMenu(false)}>Home</NavLink>
              <NavLink to="/about" onClick={() => setMobileMenu(false)}>About</NavLink>
              <NavLink to="/recipes" onClick={() => setMobileMenu(false)}>Recipes</NavLink>
              <NavLink to="/create" onClick={() => setMobileMenu(false)}>Create Recipe</NavLink>
            </div>
          )
        }

      {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenu(true)}
          className="md:hidden text-orange-700 flex items-center justify-center text-3xl mr-4"
        >
          ☰
        </button>
        <div className='hidden lg:block'>

        </div>
    </nav>
    </>
  )
}


