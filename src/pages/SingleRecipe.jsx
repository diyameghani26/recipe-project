
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import axios from "../utils/axios";
import "remixicon/fonts/remixicon.css";
import Favourites from "./Fav";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const { id } = useParams();
  const navigate = useNavigate();

  // local recipe state
  const [recipe, setRecipe] = useState(null);

  // recalc recipe whenever data or id changes
  useEffect(() => {
    const found = data.find((r) => String(r.id) === String(id));
    setRecipe(found || null);
  }, [data, id]);

  // form setup
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      image: "",
      chef: "",
      desc: "",
      ingr: "",
      Category: "",
    },
  });

  // reset form when recipe changes
  useEffect(() => {
    if (recipe) {
      reset(recipe);
    }
  }, [recipe, reset]);

  // update handler
  const UpdateHandler = (formData) => {
    const index = data.findIndex((r) => String(r.id) === String(id));
    if (index !== -1) {
      const copydata = [...data];
      copydata[index] = { ...copydata[index], ...formData };
      setdata(copydata);
      setRecipe(copydata[index]); // update local state too
      toast.success("Recipe updated!");
    }
  };

  // delete handler
  const DeleteHandler = () => {
    const filterdata = data.filter((r) => String(r.id) !== String(id));
    setdata(filterdata);
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  // favourites
  // const [favourite, setFavourite] = useState(
  //   JSON.parse(localStorage.getItem("fav")) || []
  // );

   
  // const FavHandler = () => {
  //   if (!recipe) return;
  //   const updated = [...favourite, recipe];
  //   setFavourite(updated);
  //   localStorage.setItem("fav", JSON.stringify(updated));
  //   toast.success("Added to favourites!");
  // };

  // const UnFavHandler = () => {
  //   if (!recipe) return;
  //   const updated = favourite.filter((fav) => fav.id !== recipe.id);
  //   setFavourite(updated);
  //   localStorage.setItem("fav", JSON.stringify(updated));
  //   toast.info("Removed from favourites!");
  // };

  const [favourite , setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  // const isFav = favourite.some((fav) => fav.id === recipe?.id);


  const FavHandler = () =>{
    let copyfav = [...favourite]
    copyfav.push(recipe)
    setfavourite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav))
     toast.success("Added to favourites!");
  };

  const UnFavHandler = () =>{
    const filterfav = favourite.filter((f) => f.id != recipe?.id);
    setfavourite(filterfav)
    localStorage.setItem("fav",JSON.stringify(filterfav))
    toast.info("Removed from favourites!");
  }

  if (!recipe) {
    return <p className="text-center text-red-600">Recipe not found!</p>;
  }

  return (
    <div className="bg-orange-100 items-start mt-5 gap-10 w-full flex flex-col md:ml-52 md:flex-row md:mr-32">
      <div className="w-[95%] md:w-[65%] mt-5 ml-2 bg-orange-300 py-4 md:mr-3 md:mb-1 shadow-2xl overflow-hidden p-5 md:ml-24 rounded-3xl relative">
        {/* Fav / Unfav icon */}
        {favourite.find((f)=> f.id == recipe?.id) ? (
          <i
            onClick={UnFavHandler}
            className="absolute right-[8%] text-2xl md:right-[5%] md:text-4xl text-orange-900 ri-heart-fill cursor-pointer"
          ></i>
        ) : (
        
           <i
            onClick={FavHandler}
            className="absolute right-[8%] text-2xl md:right-[5%] md:text-4xl text-orange-900 ri-heart-line cursor-pointer"
          ></i>
        )}

        {/* recipe details */}
        <h1 className="text-2xl font-bold mb-2 md:text-4xl">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-xl mb-3 w-full md:w-[40%] md:h-[200px] md:ml-60"
        />
        <p className="text-lg">
          <b>Chef:</b> {recipe.chef}
        </p>
        <p className="mb-2">
          <b>Description:</b> {recipe.desc}
        </p>
        <p className="mb-2">
          <b>Ingredients:</b> {recipe.ingr}
        </p>
        <p className="mb-2">
          <b>Category:</b> {recipe.Category}
        </p>

        {/* update form */}
        <h2 className="text-lg font-semibold mt-6">Update Recipe</h2>
        <form
          onSubmit={handleSubmit(UpdateHandler)}
          className="flex flex-col gap-3 mt-3 "
        >
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="p-2 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Chef"
            {...register("chef")}
            className="p-2 border rounded-xl"
          />

          <textarea
            placeholder="Description"
            {...register("desc")}
            className="p-2 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Ingredients"
            {...register("ingr")}
            className="p-2 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Category"
            {...register("Category")}
            className="p-2 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Image URL"
            {...register("image")}
            className="p-2 border rounded-xl"
          />

          
<div className="flex gap-4 mt-4 ml-36">
  <button
    type="submit"
    className="bg-orange-900 text-white px-4 py-2 rounded-xl shadow w-80"
  >
    Update
  </button>

  <button
    onClick={DeleteHandler}
    className="bg-red-600 text-white px-4 py-2 rounded-xl shadow w-80"
  >
    Delete
  </button>
</div>
</form>

        
      </div>
    </div>
  );
};

export default SingleRecipe;
