import React, { useContext } from "react";
import { FaUserXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../../context/AuthContextApi";
import { BackendUserContext } from "../../../context/FetchUserContext";
import { TbPhotoEdit } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";

const MyAccount = () => {
  let { authUser } = useContext(AuthUserContext);
  let { userData } = useContext(BackendUserContext);

  return (
    <section className="w-[83vw] flex justify-center items-center mt-[70px] h-[calc(100vh-70px)] bg-gray-200">
      <article className="bg-gray-900 w-[80%] rounded-lg">
        <header className="text-center text-3xl text-white font-bold pt-6 uppercase">
          <h1>My Account</h1>
        </header>
        <main className="p-6 text-white">
          <div className="flex flex-col items-center mb-6 relative">
            <img
              src={authUser?.photoURL}
              alt=""
              className="w-[120px] h-[120px] border rounded-full"
            />
            <h1 className="text-2xl font-semibold mt-4">{authUser?.displayName}</h1>
            <p className="text-gray-400">{authUser?.email}</p>
            <NavLink
              to={"/user/profile/upload-profile-photo"}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 rounded-full flex items-center  absolute bottom-[70px] right-[420px]"
            >
              <TbPhotoEdit />
              
            </NavLink>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Personal Details</h2>
            <NavLink
              to={"/user/profile/add-profile"}
              state={userData}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center gap-2"
            >
              <FaEdit />
              Edit
            </NavLink>
          </div>
          {userData === null ? (
            <div className="text-center">
              <FaUserXmark className="text-9xl text-gray-500 mx-auto" />
              <h2 className="text-lg mt-4">User Data Not Found!!</h2>
              <NavLink
                to={"/user/profile/add-profile"}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
              >
                Add Profile
              </NavLink>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">Name:</h3>
                <p className="text-white font-medium">{userData?.username}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">Contact:</h3>
                <p className="text-white font-medium">{userData?.contactNumber}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">Gender:</h3>
                <p className="text-white font-medium">{userData?.gender}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">DOB:</h3>
                <p className="text-white font-medium">{userData?.dob}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">Age:</h3>
                <p className="text-white font-medium">{userData?.age}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">Language:</h3>
                <p className="text-white font-medium">{userData?.lang}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">Country:</h3>
                <p className="text-white font-medium">{userData?.country}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">State:</h3>
                <p className="text-white font-medium">{userData?.state}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">City:</h3>
                <p className="text-white font-medium">{userData?.city}</p>
              </div>
              <div className="col-span-3 bg-gray-800 p-4 rounded flex gap-4 items-center">
                <h3 className="text-lg font-semibold">Address:</h3>
                <p className="text-white font-medium">{userData?.address}</p>
              </div>
            </div>
          )}
        </main>
      </article>
    </section>
  );
};

export default MyAccount;
