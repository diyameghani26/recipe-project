import React from 'react'
import Mainroutes from './routes/Mainroutes'
import NavBar from "./Components/NavBar.jsx"

const App = () => {
  return (
  <div className="py-2 px-2 bg-orange-100  min-h-screen text-xl w-full  font-medium  ">
  <NavBar />
  <Mainroutes />
</div>
  )
}

export default App



