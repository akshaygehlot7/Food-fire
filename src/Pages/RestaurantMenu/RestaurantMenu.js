import React from "react";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../../Constants/Constants";
import { MenuShimmer } from "../../Component/Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResMenuData from "../../Hooks/useResMenuData";
import { FaRegStar } from "react-icons/fa";
import { IoBicycle } from "react-icons/io5";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );
  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="mt-20 w-auto min-h-80">
      <div className="flex justify-center gap-8">
        <img
          className="w-80"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="flex items-center mt-4">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <span className="ml-2">{restaurant?.avgRating}</span>
          </div>
          <div className="flex items-center mt-4">
            <div className="restaurant-rating-slash">|</div>
            <div className="flex items-center gap-1">
              <IoBicycle />
              {restaurant?.sla?.slaString}
            </div>
            <div className="restaurant-rating-slash px-0 py-2">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-8 w-11/12">
          <div className="flex items-center gap-2 ml-28">
            <h3 className="text-xl">Recommended</h3>
            <p className="text-xl">({menuItems.length})</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="flex mt-12 justify-center" key={item?.id}>
                <div className="grid w-3/5">
                  <h3 className="text-xl">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="flex justify-end ml-3">
                  <div>
                    {item?.imageId && (
                      <img
                        className="menu-item-img"
                        src={ITEM_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                      />
                    )}
                    {/* <button className="add-btn"> ADD +</button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
