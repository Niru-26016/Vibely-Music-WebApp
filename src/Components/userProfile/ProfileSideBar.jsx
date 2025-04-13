import React from "react";
import { NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { MdAddAPhoto } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiDeleteBinFill } from "react-icons/ri";

const ProfileSideBar = () => {
  return (
    <>
      <aside className="basis-[17%] bg-[#3893c5] h-[calc(100vh-70px)] text-white shadow-2xl mt-[70px]  p-4">
        <nav className=" mt-5">
          <ul className="space-y-4">
            <NavLink
              to={"/user/profile/"}
              end
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center gap-3 p-2 rounded-md bg-[#2d7aa3] scale-[1.1] transition-colors "
                    : ""
                } flex items-center gap-3 p-2 rounded-md hover:bg-[rgb(45,122,163)] hover:scale-[1.1] transition-colors `
              }
            >
              <span className="text-2xl">
                <MdAccountCircle />
              </span>
              <span className="text-lg font-medium">My Account</span>
            </NavLink>

            <NavLink
              to={"add-profile"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center gap-3 p-2 rounded-md bg-[#2d7aa3] scale-[1.1] transition-colors "
                    : ""
                } flex items-center gap-3 p-2 rounded-md hover:bg-[#2d7aa3] hover:scale-[1.1] transition-colors `
              }            >
              <span className="text-2xl">
                <IoPersonAdd />
              </span>
              <span className="text-lg font-medium">Add Profile</span>
            </NavLink>

            <NavLink
              to={"upload-profile-photo"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center gap-3 p-2 rounded-md bg-[#2d7aa3] scale-[1.1] transition-colors "
                    : ""
                } flex items-center gap-3 p-2 rounded-md hover:bg-[#2d7aa3] hover:scale-[1.1] transition-colors `
              }            >
              <span className="text-2xl">
                <MdAddAPhoto />
              </span>
              <span className="text-lg font-medium">Upload Profile Photo</span>
            </NavLink>

            <NavLink
              to={"change-password"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center gap-3 p-2 rounded-md bg-[#2d7aa3] scale-[1.1] transition-colors "
                    : ""
                } flex items-center gap-3 p-2 rounded-md hover:bg-[#2d7aa3] hover:scale-[1.1] transition-colors `
              }            >
              <span className="text-2xl">
                <RiLockPasswordFill />
              </span>
              <span className="text-lg font-medium">Change Password</span>
            </NavLink>

            <NavLink
              to={"delete-account"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "flex items-center gap-3 p-2 rounded-md bg-[#2d7aa3] scale-[1.1] transition-colors "
                    : ""
                } flex items-center gap-3 p-2 rounded-md hover:bg-[#2d7aa3] hover:scale-[1.1] transition-colors `
              }            >
              <span className="text-2xl">
                <RiDeleteBinFill />
              </span>
              <span className="text-lg font-medium">Delete Account</span>
            </NavLink>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default ProfileSideBar;
