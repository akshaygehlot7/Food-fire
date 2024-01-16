import React, { useState } from "react";
import RestaurantCard from "../../Component/RestaurantCard/RestaurantCard";
import { swiggy_api_URL } from "../../Constants/Constants";
import { Link } from "react-router-dom";
import { filterData } from "../../Utils/Helper";
import Shimmer from "../../Component/Shimmer/Shimmer";
import useResData from "../../Hooks/useResData";
// import Search from '../../Component/Search/Search'

const Home = () => {
    // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    // const isOnline = useOnline();
  
    // if user is not Online then return UserOffline component
    // if (!isOnline) {
    //   return <UserOffline />
    // }
  
    // use searchData function and set condition if data is empty show error message
    const searchData = (searchText, restaurants) => {
      if (searchText !== "") {
        const filteredData = filterData(searchText, restaurants);
        setFilteredRestaurants(filteredData);
        setErrorMessage("");
        if (filteredData?.length === 0) {
          setErrorMessage(
            `Sorry, we couldn't find any results for "${searchText}"`
          );
        }
      } else {
        setErrorMessage("");
        setFilteredRestaurants(restaurants);
      }
    };
  
    // if allRestaurants are empty don't render restaurants cards
    if (!allRestaurants) return null;
  
  return (
    <div className="body-container mt-5">
      <div className="flex search-container justify-center">
        <input
          type="text"
          className="px-5 w-1/3 border border-gray-400 p-2 rounded-l-full"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => {
            setSearchText(e.target.value);
            // when user will enter the data, it automatically called searchData function so it work same as when you click on Search button
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button
          className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          🔍
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data are fetched then display restaurants cards otherwise display Shimmer UI */}
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
