import { deleteUser } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthUserContext } from "../../../context/AuthContextApi";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  let { authUser } = useContext(AuthUserContext);
  let navigate = useNavigate();

  let [confirmText, setConfirmText] = useState("");

  let handleInputChange = (e) => {
    let value = e.target.value;
    setConfirmText(value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (confirmText === "DELETE") {
        toast.success("Account deleted successfully.");
        await deleteUser(authUser);

        setTimeout(() => {
          navigate("/auth/register");
        }, 1000);
      } else {
        toast.error("Please enter the text 'DELETE' to confirm.");
      }
    } catch (error) {
      toast.error(error.code.slice(5));
    }
  };

  return (
    <section className="w-[83vw] bg-gray-200 flex justify-center items-center py-12 mt-[70px]">
      <article className="bg-gray-900 w-[40%] rounded-lg">
        <header className="text-center text-3xl text-white font-bold pt-6 uppercase">
          <h1>Delete Account</h1>
        </header>
        <form onSubmit={handleSubmit} className="p-6 text-white">
          <div className="flex flex-col mb-3">
            <label htmlFor="confirmText" className="font-semibold mb-1 text-lg">
              To confirm this action, type
              <code className="bg-gray-700 mx-2 px-1 py-0.5 rounded text-red-400">
                "DELETE"
              </code>
            </label>
            <input
              type="text"
              name="confirmText"
              id="confirmText"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              value={confirmText}
              onChange={handleInputChange}
              placeholder="Type DELETE to confirm"
            />
          </div>
          <div className="flex flex-col mb-3">
            <button
              className={`bg-red-600 font-semibold text-lg hover:bg-red-700 py-2 mt-2 rounded-lg text-white ${
                confirmText === "DELETE" ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              disabled={confirmText !== "DELETE"}
            >
              Delete
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default DeleteAccount;
