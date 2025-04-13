import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { __AUTH } from "../backend/firebaseconfig";
import Spinner from "../Helper/spinner";
import bgVideo from "../assets/bg_video.mp4";

const ResetPassword = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  let handleOnChange = (e) => {
    let value = e.target.value;
    setEmail(value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(__AUTH, email);
      toast.success(`Reset password link sent to ${email}`);
      navigate("/auth/login")
    } catch (error) {
      toast.error(error.code.slice(5));
    }
    setIsLoading(false)
  };

  let handleCancel = () => {
    navigate("/auth/login");
  };

  return (
    <section className="w-[100vw] h-[calc(100vh-70px)] flex justify-center items-center mt-[70px] bg-gray-950">
      <article className="w-[40%]  shadow-2xl rounded-lg p-8  z-10 relative right-[300px]">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">Reset Password</h1>
        </header>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-white" htmlFor="email">
              Email
            </label>
            <input
              className="mt-2 p-3 border rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-300 focus:border-0"
              type="email"
              id="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-100 hover:scale-105"
            >
              {isLoading ? "Loading..." : "Reset"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition-all duration-100 hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </form>
      </article>
      <div className="h-[calc(100vh-70px)] w-full absolute top-0 left-0 mt-[70px]">
        <video className="w-full h-full object-cover" autoPlay loop muted>
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

export default ResetPassword;
