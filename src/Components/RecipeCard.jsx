import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className=" md:ml-12 hover:scale-95 duration-100  w-[23vw]  md:mr-3 md:mb-3 shadow-md overflow-hidden "
    >
      <div className="ml-10 mt-10">
        <img
          className="block  w-48 h-48 object-cover rounded-full"
          src={image}
          alt=""
        />
        <h1 className="mt-2 font-black px-1 ">{title}</h1>
        <small className="px-1 text-orange-800 font-bold text-lg">{chef}</small>
        <p className="px-1 pb-3 font-serif">
          {desc ? desc.slice(0, 100) : ""}...{" "}
          <small className="text-orange-800">more</small>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
