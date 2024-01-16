import React from "react";
// import burger from "../../Assets/images/burger-image.png";
import { IMG_CDN_URL } from "../../Constants/Constants";
import { FaRegStar } from "react-icons/fa";


const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-5  w-56 h-80">
      <div className=" grid w-52 border border-black rounded-lg">
        <div className="flex justify-center">
          <img className="w-44" src={IMG_CDN_URL + cloudinaryImageId} alt="burger" />
        </div>
        <h3 className="p-2 text-x  font-bold">{name}</h3>
        <h5 className="p-2 -mt-4">{cuisines.join(", ")}</h5>
        <h5 className="p-2 -mt-4">{areaName}</h5>
      <span >
        <h4 className="px-2 flex items-center -mt-2  font-bold">
          <FaRegStar />
          {avgRatingString}
        </h4>
        <div className="flex gap-14 p-1 -mt-2 ">
          <h4 className=" font-bold">{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
        </div>
        
      </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
