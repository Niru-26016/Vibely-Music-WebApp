import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContextApi";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { BackendUserContext } from "../../context/FetchUserContext";

const Menu = ({ setIsMenuOpen }) => {
  let { authUser, logout } = useContext(AuthUserContext);
  console.log(authUser);

  let { userData } = useContext(BackendUserContext)
  let role = userData?.role;
  console.log(role);

  const handleLinkClick = () => {
    if (setIsMenuOpen) setIsMenuOpen(false);
  };

  //this is for unknown user
  let AnonymousUser = () => {
    return (
      <>
        <li>
          <NavLink
            to={"/auth/login"}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `${isActive ? "bg-[#570a8e]" : ""
              } px-4 py-2 font-semibold text-[#FFFF]  focus:ring-[#570a8e] hover:bg-[#570a8e] hover:scale-105 transition-transform duration-300 rounded-md cursor-pointer text-lg flex gap-2 items-center`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/auth/register"}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `${isActive ? "bg-[#570a8e]" : ""
              } px-4 py-2 font-semibold text-[#FFFF]  focus:ring-[#570a8e] hover:bg-[#570a8e] hover:scale-105 transition-transform duration-300 rounded-md cursor-pointer text-lg flex gap-2 items-center`
            }
          >
            Register
          </NavLink>
        </li>
      </>
    );
  };

  //this is for authicanted user
  let AunthenticatedUser = () => {
    return (
      <>
        {role === "admin" && (
          <li>
            <NavLink
              to={"/admin"}
              onClick={handleLinkClick}
              className="border border-transparent px-4 py-2 font-semibold rounded-md  focus:ring-[#570a8e] hover:bg-[#570a8e] hover:scale-105 transition-transform duration-300 cursor-pointer flex justify-evenly text-lg text-white"
            >
              Admin
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to={"/user/profile"}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `${isActive ? "bg-[#570a8e]" : ""
              } px-4 py-2 font-semibold text-[#FFFF]  focus:ring-[#570a8e] hover:bg-[#570a8e] hover:scale-105 transition-transform duration-300 rounded-md cursor-pointer text-lg flex gap-2 items-center`
            }
          >
            <span>{authUser?.displayName}</span>
            <img
              src={authUser?.photoURL}
              alt=""
              className="w-[25px] h-[25px] rounded-full"

            />

          </NavLink>
        </li>
        <li>
          <button
            onClick={() => {
              logout();
              handleLinkClick();
            }}
            className={`flex px-4 py-2 font-semibold text-[#ff2f00] focus:ring-[#570a8e] hover:bg-red-700 hover:text-white hover:scale-105 transition-transform duration-300 rounded-md cursor-pointer text-lg`}
          >
            <span>Logout</span>
            <span className="mt-1 ml-1">
              <LiaDoorOpenSolid />
            </span>
          </button>
        </li>
      </>
    );
  };
  return (
    <aside className="h-full">
      <ul className="w-full h-full flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-0">
        <li>
          <NavLink
            to={"/"}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `${isActive ? "bg-[#570a8e]" : ""
              } px-4 py-2 font-semibold text-[#FFFF]  focus:ring-[#570a8e] hover:bg-[#570a8e] hover:scale-105 transition-transform duration-300 rounded-md cursor-pointer text-lg flex gap-2 items-center`
            }
          >
            Home
          </NavLink>
        </li>
        {authUser === null ? <AnonymousUser /> : <AunthenticatedUser />}
      </ul>
    </aside>
  );
};

export default Menu;
