import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContextProv";

function Navbar() {
  let { IsAutth, logout, login } = useContext(AuthContext);
  let data = !IsAutth ? " You are logout" : " you are login";
  // let log=login?'loggedIn':"Signup"
  let navigate = useNavigate();

  const links = [
    { to: "./", title: "Home" },
    { to: "./User", title: "User" },
    { to: "./About", title: "About" },
    { to: "./Contact", title: "Contact" },
    { to: "./Login", title: data },
  ];
  return (
    <div className="w-full ">
      <div className="flex justify-evenly items-center border w-full h-[60px] m-auto bg-gray-300 text-emerald-800 text-xl  ">
        
        {links.map((el, ind) => {
          return (
            <NavLink className={({isActive})=>{
              if(isActive){
                return 'font-bold underline'
              }
            }}
     
              key={ind}
              to={el.to}
            >
              {el.title}
            </NavLink>
          );
        })}

        <div className="flex gap-10 items-center w-[200px] ">
            
        <button
          className=" rounded-md text-white bg-emerald-500 px-2 hover:underline hover:text-black"
          onClick={() => {

            login();
            navigate('/user')
            alert("Logged-In Suceescully!");
          }}
        >
          Login
        </button>
        <button
          className="rounded-md text-white bg-emerald-500 px-2 hover:underline hover:text-black"
          
          onClick={() => {
            logout();
            alert("Logout Suceescully!");
            navigate('/login')
            
          }
        }
        >
          Logout
        </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
