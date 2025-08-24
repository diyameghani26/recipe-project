import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="  md:ml-12 hover:scale-95 duration-100  w-[23vw]  md:mr-3 md:mb-3 shadow-md overflow-hidden " 
    >
      <div className="  ml-5 mt-10 bg-white hover:scale-95 duration-100 shadow-md overflow-hidden mr-4 sm:mb-3 
  items-center justify-center text-center gap-10 rounded-xl 
  md:ml-0 md:mt-0  md:shadow-none md:mr-0 md:mb-0 md:gap-0 
">
        <img
          className="block mt-2 ml-14 w-48 h-48 object-cover md:ml-20 rounded-full   "
          src={image}
          alt=""
        />
        <h1 className="  mt-2 font-black px-1  ">{title}</h1>
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
