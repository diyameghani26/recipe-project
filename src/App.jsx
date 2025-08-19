import React from 'react'
import Mainroutes from './routes/Mainroutes'
import NavBar from "./Components/NavBar.jsx"

const App = () => {
  return (
  <div className="sm:py-10 sm:px-10 bg-orange-100  text-xl w-full h-screen font-medium md:px-0 md:py-8 ">
  <NavBar />
  <Mainroutes />
</div>
  )
}

export default App

// md:bg-[url('/kitchen.jpg')]

