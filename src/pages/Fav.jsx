import  { useContext } from 'react'
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from '../Components/RecipeCard';



const Fav = () => {


  const favourite = JSON.parse(localStorage.getItem("fav") || [])

  const renderrecipes = favourite.map((recipe) =>(
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ) 
)
  return (
    <div className='bg-orange-100 flex-wrap md:flex md:items-center md:justify-center md:mt-6 '>
     {favourite.length > 0 ? renderrecipes : "No favourite found!"}
    </div>
  )
}

export default Fav;
