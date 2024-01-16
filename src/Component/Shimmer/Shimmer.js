import {
  shimmer_card_unit,
  shimmer_menu_card_unit,
} from "../../Constants/Constants";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="bg-slate-100 w-52 h-80 p-3 mb-3 mt-5">
      <div className="h-36 w-56"></div>
      <div className="w-3/5 mt-3"></div>
      <div className="w-4/5 mt-1"></div>
      <div className="w-full mt-1 stroke animate "></div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="mt-20  w-auto">
      <div className="flex h-52 justify-center items-center bg-slate-100 text-white overflow-y-hidden stroke-color animate">
        <div className="flex justify-center bg-slate-200">
          <div className="h-36 w-56 stroke animate" alt="shimer"></div>
          <div className="flex flex-col m-5">
            <h2 className="shimmer-w40  stroke animate"></h2>
            <p className="shimmer-w20 stroke animate"></p>
            <div className="shimmer-w60  stroke animate"></div>
          </div>
        </div>
      </div>

      <div className="flex mt-10 justify-center mb-10">
        <div className="mt-8 w-4/5 ">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="flex mb-10 flex-col justify-center ">
            {Array(shimmer_menu_card_unit)
              .fill("")
              .map((element, index) => (
                <div className="h-60 mb-5 bg-slate-200" key={index}>
                  <div className="shimmer-item-details">
                    <h3 className="shimmer-w40  stroke animate"></h3>
                    <p className="shimmer-w20  stroke animate"> </p>
                    <p className="shimmer-w60  stroke animate"></p>
                  </div>
                  <div className="shimmer-img-wrapper">
                    <div className="shimmer-img stroke animate" alt="shimer"></div>
                    <div className="shimmer-btn stroke animate"> </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap">
      {/* create a new Array instance using Array() constructor and map through every element of array */}
      {Array(shimmer_card_unit)
        .fill("")
        .map((element, index) => {
          return <CardShimmer key={index} />;
        })}
    </div>
  );
};
export default Shimmer;
