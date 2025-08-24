import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
   const navigate = useNavigate()
  const {data,setdata} = useContext(recipecontext);
  const { register, handleSubmit , reset } = useForm();
  
 
 
  const SubmitHandler = (recipe)=>{
    recipe.id=nanoid();
   const copydata = [...data];
   copydata.push(recipe)
    setdata(copydata)

 localStorage.setItem("recipes" , JSON.stringify(copydata) )
    toast.success("New Recipe Created!");
    reset();
    navigate("/recipes")
  }
  return (
     <div  className=" bg-orange-100 w-full h-[830px]  md:bg-[url('/kitchen.jpg')] md:mt-5 md:bg-cover md:bg-center md:h-[850px]  "> 
      <img src="/chef.png" alt="chef"
      className="   w-32 h-38 object-cover md:-mt-8 md:mx-auto md:block" />   
    <div className="   w-4/5 mx-auto  flex items-center border-2 border-orange-800 rounded-xl px-4 py-10  pb-1 -mt-5  shadow-sm bg-orange-100 bg-opacity-65
    md:px-56  md:w-1/2 md:mx-auto md:rounded-2xl">
    <form  onSubmit={handleSubmit(SubmitHandler)}>
      <h1 className=" -m-4 italic text-center text-orange-900 "> Add Your Recipe Details... </h1> <br />
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
        className=" italic block border-2 font-[diya] border-orange-700 font-medium outline-0 p-1 rounded-xl md:text-2xl "
        {...register("Category")}
        placeholder="//write instructions seperated by comma"
>
        <option value="breakfast">Breakfast</option>
         <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
           <option value="dinner">Dinner</option>
      </select>

      <button className=" text-white italic ml-2  block mt-4 bg-orange-900 py-1 px-16 rounded-2xl">
        Save Recipe
      </button>

     
    </form>

    </div>
 
    </div>
  );
};

export default Create;
