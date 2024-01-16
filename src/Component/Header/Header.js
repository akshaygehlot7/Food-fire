import React, { useEffect } from "react";
import logo from "../../Assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../../Hooks/useLocalStorage";
import useAuth from "../../Hooks/useAuth";
import useOnline from "../../Hooks/useOnline";

const Header = () => {
  const navigate = useNavigate();

  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

  // call custom hook useAuth for user is loggedin or not
  const [isLoggedin, setIsLoggedin] = useAuth();
  console.log(isLoggedin)

  useEffect(() => {
    // if value of getLocalStorage is equal to null setIsLoggedin to false
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage]);

  // call custom hook useOnline if user is online or not
  const isOnline = useOnline();

  return (
    <div className="flex justify-around bg-slate-100">
      <div className="flex w-14 h-16">
        <img src={logo} alt="Logo" />
      </div>
      {isLoggedin && (
        <div className="text-2xl text-black">
          Hi {getLocalStorage?.userName}!
        </div>
      )}
      <div className="flex gap-4 text-center items-center">
        <Link to="/">
          <h5>Home</h5>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
        <Link to="/contact">
          <h1>Contact</h1>
        </Link>
        <li>
          {/* use conditional rendering for login and logout */}
          {isLoggedin ? (
            <button
              className="logout-btn"
              onClick={() => {
                clearLocalStorage();
                setIsLoggedin(false);
              }}
            >
              Logout
              <span className={isOnline ? "login-btn-green" : "login-btn-red"}>
                {" "}
                ●
              </span>
            </button>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
              <span className={isOnline ? "login-btn-green" : "login-btn-red"}>
                {" "}
                ●
              </span>
            </button>
          )}
        </li>
      </div>
    </div>
  );
};

export default Header;
