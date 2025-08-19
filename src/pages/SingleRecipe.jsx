import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues:{
    title: recipe.title,
    image:recipe.image,
    chef:recipe.chef,
    desc:recipe.desc,
    ingr:recipe.ingr,
    Category:recipe.Category,
  }});

  const SubmitHandler = (recipe) => {

    const index = data.findIndex((recipe) => params.id == recipe.id); 
  const copydata = [...data];
  copydata[index] = {...copydata[index], ...recipe}
   setdata(copydata);
   toast.success("Recipe updated!")
  };


  const DeleteHandler = () =>{
    const filterdata = data.filter(r => r.id != params.id)
    setdata(filterdata);
    toast.success("Recipe deleted!")
    navigate("/recipes")
  }
 
  return recipe ? (
    <div className=" items-start mt-10 gap-10 w-full flex flex-col md:flex-row">
      <div className="left w-1/2 p-2">
        <h1 className="ml-9 mb-3 text-5xl font-black">{recipe.title}</h1>
        <img
          className="h-[20vh] rounded-full ml-14"
          src={recipe.image}
          alt=""
        />
        <h1>{recipe.chef}</h1>
        <p>{recipe.desc}</p>
      </div>

      <div
        className="   w-4/5 mx-auto  flex items-center border-2 border-orange-800 rounded-xl px-4 py-10  pb-1 -mt-5  shadow-sm bg-orange-100 bg-opacity-65
    md:px-56  md:w-1/2 md:mx-auto md:rounded-2xl"
      >
        <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
          <h1 className=" text-lg  whitespace-nowrap ml-10 -m-4 italic text-center text-orange-900 ">
            {" "}
            Your Recipe Details...{" "}
          </h1>{" "}
          <br />
          
<input
            className="block border-2 border-orange-700 font-light outline-0 p-1 rounded-xl "
            {...register("image")}
           
            type="url"
            placeholder="Enter image url here"
          />
          <br />
          {/* <small className="text-red-800">This is how the error is shown </small> */}
<input
            className="block  border-2 border-orange-700 font-light outline-0 p-2 rounded-xl md:text-2xl "
            {...register("title")}
           
            type="text"
            placeholder="Recipe Title"
          />
          {/* <small className="text-red-800">This is how the error is shown </small> */}
          <br />
<input
            className="block border-2 border-orange-700 font-light outline-0 p-2 rounded-xl md:text-2xl  "
            {...register("chef")}
            
            type="text"
            placeholder="chef name"
          />
          {/* <small className="text-red-800">This is how the error is shown </small> */}
          <br />
<input
            className="block border-2 border-orange-700 font-light outline-0 p-2 rounded-xl md:text-2xl  "
            {...register("desc")}
            
            type="text"
            placeholder="description"
          />
          {/* <small className="text-red-800">This is how the error is shown </small> */}
          <br />
          <textarea
            className="block border-2 border-orange-700 font-thin outline-0 p-4 rounded-xl md:text-2xl  "
            {...register("ingr")}
              
            placeholder="//ingredients here"
          />
          {/* <small className="text-red-800">This is how the error is shown </small> */}
          <br />
          <textarea
            className="block border-2 border-orange-700 font-thin outline-0 p-4 rounded-xl md:text-2xl  "
            {...register("inst")}
            placeholder="//write instructions seperated by comma"
          />
          {/* <small className="text-red-800">This is how the error is shown </small> */}
          <br />
          <select
            className=" italic block border-2 border-orange-700 font-medium outline-0 p-1 rounded-xl md:text-2xl "
            {...register("Category")}
              
            placeholder="//write instructions seperated by comma"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
          <button className=" whitespace-nowrap  text-white italic   block mt-4 bg-orange-900 py-1 px-14 rounded-2xl">
            Update Recipe
          </button>

           <button onClick={DeleteHandler} className=" whitespace-nowrap text-white italic   block mt-4 bg-orange-900 py-1 px-14 rounded-2xl">
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "loading..."
  );
};
export default SingleRecipe;
