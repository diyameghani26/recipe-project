import React, { useContext } from 'react'
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from '../Components/RecipeCard';



const Recipes = () => {


  const {data} = useContext(recipecontext);

  const renderrecipes = data?.map((recipe) =>(
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ) 
)
  return (
    <div className='bg-orange-100 flex-wrap md:flex md:items-center md:justify-center md:mt-6 '>
     {data?.length > 0 ? renderrecipes : "No recipes found!"}
    </div>
  )
}

export default Recipes


