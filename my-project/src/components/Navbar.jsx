import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContextProv";

function Navbar() {
  let { IsAutth, logout, login } = useContext(AuthContext);
  let navigate = useNavigate();
  let data;
  const links = [
    { to: "./", title: "Home" },
    { to: "./User", title: "User" },
    { to: "./About", title: "About" },
    { to: "./Contact", title: "Contact" },
    { to: "./Login", title: data },
  ];
  return (
    <div className="w-full  flex">
      <div className="flex justify-around items-center border border-black   w-full h-[60px] m-auto bg-gray-300 text-emerald-800 text-xl  ">
        {links.map((el, ind) => {
          return (
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "font-bold underline";
                }
              }}
              key={ind}
              to={el.to}
            >
              {el.title}
            </NavLink>
          );
        })}

        <div className=" flex gap-20 items-center  relative right-36">
          <button
            className=" rounded-md text-white bg-emerald-500 px-2 hover:underline hover:text-black"
            onClick={() => {
              logout();
              navigate("/login");
              alert("Logout-Successfully!");
            }}>Logout</button>
          <div className=" ">
          {data = IsAutth ? <p className="font-semibold text-[16px] w-fit text-black">You are LoggedIn</p> : <p  className="font-semibold text-[16px] w-fit text-black">You are Logged-Out</p>
          }
          </div>

          {/* <button
          className="rounded-md text-white bg-emerald-500 px-2 hover:underline hover:text-black"
          
          onClick={() => {
            logout();
            alert("Logout Suceescully!");
            navigate('/login')
            
          }
        }
        >
          Logout
        </button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
