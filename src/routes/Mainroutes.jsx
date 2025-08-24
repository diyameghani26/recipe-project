import React from 'react'
import { Route, Routes } from "react-router";
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe';



const Mainroutes = () => {
  return (
    <Routes>
        <Route path = "/"  element = {<Home/>}/>
        <Route path = "/About"  element = {<About/>}/>
         <Route path = "/Recipes"  element = {<Recipes/>}/>
           <Route path = "/Recipes/details/:id"  element = {<SingleRecipe/>}/>
        <Route path = "/Create"  element = {<Create/>}/>
     </Routes>
  )
}

export default Mainroutes
