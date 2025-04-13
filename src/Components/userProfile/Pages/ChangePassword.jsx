import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthUserContext } from "../../../context/AuthContextApi";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "firebase/auth";

const ChangePassword = () => {
  let { authUser } = useContext(AuthUserContext);
  let navigate = useNavigate();

  let [userPassword, setUserPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  //! Destucturing of an object
  let { password, confirmPassword } = userPassword;

  //! State for password
  let [showPassword1, setShowPassword1] = useState(false);

  //! State for confirm password
  let [showPassword2, setShowPassword2] = useState(false);

  let [isLoading, setIsLoading] = useState(false);

  //! toggle password for first input field
  let togglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  //! toggle password for second input field
  let togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserPassword({ ...userPassword, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if(password === confirmPassword){
        await updatePassword(authUser,password)
        toast.success("password updated successfully")
        navigate("/user/profile")
      }
      else{
        toast.error("password does not matched")
      }
      
    } catch (error) {
      toast.error(error.code.slice(5));
    }
    setIsLoading(false);
  };
  return (
    <section className="w-[83vw] flex justify-center items-center py-12 mt-[70px] bg-gray-200">
      <article className="bg-gray-900 w-[40%] rounded-lg">
        <header className="text-center text-3xl text-white font-bold pt-6 uppercase">
          <h1>Change Password</h1>
        </header>
        <form onSubmit={handleSubmit} className="p-6 text-white">
          <div className="flex flex-col mb-3 relative">
            <label htmlFor="password" className="font-semibold mb-1 text-lg">
              Enter new password
            </label>
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Enter your new password"
              id="password"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <span
              onClick={togglePassword1}
              className="absolute right-[10px] bottom-[11px] cursor-pointer text-gray-400"
            >
              {showPassword1 ? <IoEye /> : <IoEyeOff />}
            </span>
          </div>
          <div className="flex flex-col mb-3 relative">
            <label htmlFor="email" className="font-semibold mb-1 text-lg">
              Confirm new password
            </label>
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Re-enter your password"
              id="confirmPassword"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
            <span
              onClick={togglePassword2}
              className="absolute right-[10px] bottom-[11px] cursor-pointer text-gray-400"
            >
              {showPassword2 ? <IoEye /> : <IoEyeOff />}
            </span>
          </div>
          <div className="flex flex-col mb-3">
            <button className="bg-blue-600 font-semibold text-lg hover:bg-blue-700 py-2 mt-2 rounded-lg text-white cursor-pointer">
              {isLoading ? "Updating..." : "Change Password"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ChangePassword;