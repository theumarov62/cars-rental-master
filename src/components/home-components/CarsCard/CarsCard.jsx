import React from "react";
import { Link } from "react-router-dom";

function CarsCard({ car }) {
  const { image, name, id } = car;
  return (
    <Link
      to={`/cars${id}`}
      className="  w-[220px] p-4
//     bg-white
//     border border-gray-200
//     rounded-xl
//     shadow-md
//     hover:shadow-lg
//     transition
//     duration-300
//     cursor-pointer"
    >
      <img
        src={image}
        className="w-full h-[130px] object-cover rounded-[4px]"
        alt=""
      />
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
    </Link>
  );
}

export default CarsCard;
