import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { __AUTH } from "../backend/firebaseconfig.js";
import { NavLink, useNavigate } from "react-router-dom";
import Spinner from "../Helper/spinner.jsx";
import bgVideo from "../assets/bg_video.mp4";
import { IoEyeOff } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";

const Register = () => {
  let navigate = useNavigate();

  let [showPassword, setShowPassword] = useState(false);

  let handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let [showConfirmPassword, setShowConfirmPassword] = useState(false);

  let handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  let [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let { username, email, password, confirmPassword } = userData;

  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  let [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (password === confirmPassword) {
        let registeredUser = await createUserWithEmailAndPassword(
          __AUTH,
          email,
          password
        );

        toast.success("Form Submitted Successfully");
        sendEmailVerification(registeredUser.user);

        toast.success(" sent Email Verification");

        updateProfile(registeredUser.user, {
          displayName: username,
          photoURL:
            "https://imgs.search.brave.com/YfyNSZIduSszrOd2DIfVpcEZXVPxARydF3-FOuI_1pA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw",
        });

        navigate("/auth/login");
      } else {
        toast.error("Password do not match");
      }
    } catch (error) {
      toast.error(error.code.slice(5));
    }
    setIsLoading(false);
  };

  return (
    <section className="w-[100vw] h-[calc(100vh-70px)] flex justify-center items-center mt-[70px] bg-gray-950">
      <div className="h-[calc(100vh-70px)] w-full absolute top-0 left-0 mt-[70px]">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <article className="w-[40%]  shadow-2xl rounded-lg p-8  z-10 relative right-[300px]">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">Register</h1>
        </header>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              className="text-lg font-medium text-white"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              className="mt-2 p-3 border rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-300 focus:border-0"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInput}
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-white" htmlFor="email">
              Email
            </label>
            <input
              className="mt-2 p-3 border rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-300 focus:border-0"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInput}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="text-lg font-medium text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="mt-2 p-3 border rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-300 focus:border-0"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handleInput}
              placeholder="Enter your password"
            />
            <span onClick={handleShowPassword}>
              {showPassword ? (
                <IoIosEye className="absolute right-3 top-13 text-gray-400 text-[20px]" />
              ) : (
                <IoEyeOff className="absolute right-3 top-13 text-gray-400 text-[20px]" />
              )}
            </span>
          </div>

          <div className="flex flex-col relative">
            <label
              className="text-lg font-medium text-white"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="mt-2 p-3 border rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-300 focus:border-0"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInput}
              placeholder="Confirm your password"
            />
            <span onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? (
                <IoIosEye className="absolute right-3 top-13 text-gray-400 text-[20px]" />
              ) : (
                <IoEyeOff className="absolute right-3 top-13 text-gray-400 text-[20px]" />
              )}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600  font-semibold rounded-lg hover:bg-blue-800 transition-all duration-100 hover:scale-105 text-white"
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
          <div className="flex justify-center text-blue-600">
            <NavLink to={"/auth/login"} className="hover:underline">
              Already have an account?
            </NavLink>
          </div>
        </form>
      </article>
      {isLoading && (
        <section className="w-full h-full bg-black/50 fixed flex top-0 left-0 justify-center items-center z-20">
          <Spinner />
        </section>
      )}
    </section>
  );
};

export default Register;
