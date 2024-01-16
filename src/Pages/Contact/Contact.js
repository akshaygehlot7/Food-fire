import React, { useState } from "react";
import contact from "../../Assets/images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="h-screen">
      <div className="flex flex-row flex-wrap justify-evenly items-center h-full">
        <div className="fles justify-center items-center">
          <img className="w-80" src={contact} alt="Contact us" />
        </div>
        <div className="flex flex-col items-center justify-center text-xl">
          <h1 className="text-2xl">Contact us</h1>
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <input
              className="p-3 m-3 rounded-md border border-slate-400 w-72"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="p-3 m-3 rounded-md border border-slate-400 w-72"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="p-3 m-3 rounded-md border border-slate-400 w-72"
              placeholder="Type your Message here..."
              required
            ></textarea>
            <button
              className="bg-slate-200 w-24 h-10 border border-slate-400"
              type="submit"
            >
              Submit
            </button>
            {message && (
              <span className="mt-6">Thanks for contacting FoodFire, We will reply ASAP.</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
