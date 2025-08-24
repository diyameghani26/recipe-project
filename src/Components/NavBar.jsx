import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
  import { useLocation } from "react-router-dom";


export default function Navbar() {
  const location = useLocation();
  
  if (location.pathname === "/create") return null;
    if (location.pathname === "/Create") return null;
  const [open, setOpen] = useState(false)

  const navLinks = (
    <>
      <NavLink className={(e) => e.isActive ? "text-orange-800" : "text-orange-950"} to="/">Home</NavLink>
      <NavLink className={(e) => e.isActive ? "text-orange-800" : "text-orange-950"} to="/About">About</NavLink>
      <NavLink className={(e) => e.isActive ? "text-orange-800" : "text-orange-950"} to="/Recipes">Recipes</NavLink>
      <NavLink className={(e) => e.isActive ? "text-orange-800" : "text-orange-950"} to="/Create">Create recipe</NavLink>
    </>
  )

  return (
    <>
    <nav className="italic flex items-center md:justify-center justify-start  relative -mt-8 md:mt-1 md:ml-3 ">
       <div className="w-15 h-12 flex ">
        <img 
          className="h-full w-auto object-contain md:absolute left-0 mt-9 md:mt-0 " 
          src="/logo.png" 
          alt="Logo" 
        />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex  justify-center gap-8  ">
        {navLinks}
      </div>

      {/* Mobile Hamburger */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-orange-700 text-3xl">
      </button>

      {/* Mobile Menu Fullscreen */}
      {open && (
        <div className="fixed inset-0 bg-orange-100/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-xl z-50">
          {navLinks}
          <button onClick={() => setOpen(false)} className="mt-8 text-gray-700">Close ✕</button>
        </div>
      )}
    </nav>
    </>
  )
}


