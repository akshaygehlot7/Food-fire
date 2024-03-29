import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import food from "../../Assets/images/burger-image.png";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="text-center m-5">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <>
          <Link to={"/about"}>
              <button
                className="bg-slate-400 text-white p-4 rounded-md border-none cursor-pointer text-lg font-bold hover:bg-slate-200 hover:text-black"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="bg-slate-400 text-white p-4 rounded-md border-none cursor-pointer text-lg font-bold hover:bg-slate-200 hover:text-black"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div className="flex flex-wrap m-10 justify-evenly items-center">
        <div className="flex flex-wrap flex-col justify-start overflow-y-hidden items-start">
          <h1 className='text-5xl p-3 font-bold text-slate-700'>
            Welcome to <br /> The world of <br />
          </h1>
            <h1 className='text-5xl font-bold text-slate-500 p-3 bg-slate-100 rounded-2xl '>Tasty & Fresh Food</h1>
          <h1 className='text-xl font-bold text-slate-700 p-3'>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h1>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center overflow-y-hidden">
          <img className="w-full" src={food} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
