import React from 'react'
import Mainroutes from './routes/Mainroutes'
import NavBar from "./Components/NavBar.jsx"

const App = () => {
  return (
  <div className="bg-orange-100 text-xl  font-medium">
  <NavBar />
  <Mainroutes />
</div>
  )
}

export default App

// md:bg-[url('/kitchen.jpg')]

