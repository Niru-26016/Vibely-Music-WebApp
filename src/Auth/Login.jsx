import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { __AUTH } from "../backend/firebaseconfig";
import Spinner from "../Helper/spinner";
import bgVideo from "../assets/bg_video.mp4";
import { IoIosEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  let navigate = useNavigate();

  let [showPassword, setShowPassword] = useState(false);
  let handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });



  let [isLoading, setIsLoading] = useState(false);

  let handleOnChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setLoginData({ ...loginData, [name]: value });
  };

  let handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let { email, password } = loginData;
      let RegisteredUser = await signInWithEmailAndPassword(
        __AUTH,
        email,
        password
      );
      if (RegisteredUser.user.emailVerified) {
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error("Please verify your email before logging in.");
      }
    } catch (error) {
      toast.error(error.code.slice(5));
    }
    setIsLoading(false);
  };

  let { email, password } = loginData;
  return (
    <section className="w-[100vw] h-[calc(100vh-70px)] flex justify-center items-center mt-[70px]">
      <article className="w-[40%] shadow-2xl rounded-lg p-8   z-10 relative right-[300px]">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold ">Login</h1>
        </header>
        <form className="space-y-6" onSubmit={handleOnSubmit}>
          <div className="flex flex-col">
            <label className="text-lg font-medium " htmlFor="email">
              Email
            </label>
            <input
              className="mt-2 p-3 border rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-300 focus:border-0"
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleOnChange}
              name="email"
              value={email}
            />
          </div>
          <div className="flex flex-col relative">
            <label className="text-lg font-medium " htmlFor="password">
              Password
            </label>
            <input
              className="mt-2 p-3 border rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-100 focus:border-0 "
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              onChange={handleOnChange}
              name="password"
              value={password}
            />
            <span onClick={handleShowPassword}>
              {showPassword ? (
                <IoIosEye className="absolute right-3 top-13 text-gray-400 text-[20px]" />
              ) : (
                <IoEyeOff className="absolute right-3 top-13 text-gray-400 text-[20px]" />
              )}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600  font-semibold rounded-lg hover:bg-gray-700 hover:scale-105 transition-transform duration-300 text-white"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          <div className="flex justify-center text-blue-600 hover:underline">
            <NavLink to={"/auth/reset-password"}>Forgot Password?</NavLink>
          </div>
          <div className="flex justify-center text-blue-600 hover:underline">
            <NavLink to={"/auth/register"}>Don't have an account?</NavLink>
          </div>
        </form>
      </article>
      <div className="h-[calc(100vh-70px)] w-full  absolute top-0 left-0 mt-[70px] ">
        <video className="  w-full h-full object-cover" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {isLoading && (
        <section className="w-full h-full bg-black/50 fixed top-0 left-0 flex justify-center items-center z-20">
          <Spinner />
        </section>
      )}
    </section>
  );
};

export default Login;
