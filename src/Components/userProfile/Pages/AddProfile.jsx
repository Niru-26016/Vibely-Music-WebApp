import React, { use, useContext, useState } from "react";
import toast from "react-hot-toast";
import Languages from "../languages.json";
import Cities from "../cities.json";
import Countries from "../countries.json";
import States from "../states.json";
import { AuthUserContext } from "../../../context/AuthContextApi";
import { doc, setDoc } from "firebase/firestore";
import { __DB } from "../../../backend/firebaseconfig";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../../Helper/spinner";

const AddProfile = () => {
  let { authUser } = useContext(AuthUserContext);

  let navigate = useNavigate();
  let location = useLocation();

  let [isLoading, setIsLoading] = useState(false);

  let [userDetails, setUserDetails] = useState({
    username: location?.state?.username,
    contactNumber: location?.state?.contactNumber,
    gender: location?.state?.gender,
    dob: location?.state?.dob,
    age: location?.state?.age,
    lang: location?.state?.lang,
    country: location?.state?.country,
    state: location?.state?.state,
    city: location?.state?.city,
    address: location?.state?.address,
    role: "user",
  });

  //! Destructuring the user details
  let {
    username,
    contactNumber,
    gender,
    dob,
    age,
    lang,
    country,
    state,
    city,
    address,
    role,
  } = userDetails;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      //! Extracting four properties from the authUser
      let { displayName, photoURL, email, uid } = authUser;

      //! Create an object to send inside the database
      //! Payload object
      //? Payload is nthg but the actual object which is sent to the database
      //? In the programming language actual object is called as payload
      let payload = {
        ...userDetails,
        displayName,
        photoURL,
        email,
        uid,
      };

      //! Step-1: Create a document reference inside the
      //!    databse  (Cloud Firestore)
      let user_profile_collection = doc(__DB, "user_details", uid);

      //! Step-2: Set or store the data inside the database
      await setDoc(user_profile_collection, payload);
      navigate("/user/profile");
      toast.success("User details has been updated successfully");
    } catch (error) {
      toast.error(error.code.slice(5));
      console.log("Error while uploading data:", error);
    }
    setIsLoading(false);
  };
  return (
    <section className="w-[83vw] flex justify-center items-center py-12 mt-[70px] bg-gray-200">
      <article className="bg-gray-900 w-[60%] rounded-lg">
        <header className="text-center text-3xl text-white font-bold pt-6 uppercase">
          <h1>Add Profile</h1>
        </header>
        <form onSubmit={handleSubmit} className="p-6 text-white grid grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="font-semibold mb-1 text-lg">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              onChange={handleInputChange}
              value={username}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contactNumber" className="font-semibold mb-1 text-lg">
              Contact Number:
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your contact number"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              onChange={handleInputChange}
              value={contactNumber}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="font-semibold mb-1 text-lg">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              onChange={handleInputChange}
            >
              <option className="text-gray-600" selected required disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob" className="font-semibold mb-1 text-lg">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              onChange={handleInputChange}
              value={dob}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="font-semibold mb-1 text-lg">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              onChange={handleInputChange}
              value={age}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lang" className="font-semibold mb-1 text-lg">
              Language:
            </label>
            <input
              type="text"
              id="lang"
              name="lang"
              placeholder="Enter your language"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              onChange={handleInputChange}
              list="langList"
              value={lang}
            />
            <datalist id="langList">
              {Languages.map((language, index) => {
                return <option key={index}>{language}</option>;
              })}
            </datalist>
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="font-semibold mb-1 text-lg">
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Enter your country"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              onChange={handleInputChange}
              list="countryList"
              value={country}
            />
            <datalist id="countryList">
              {Countries.map((country, index) => {
                return <option key={index}>{country}</option>;
              })}
            </datalist>
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="font-semibold mb-1 text-lg">
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              placeholder="Enter your state"
              onChange={handleInputChange}
              list="stateList"
              value={state}
            />
            <datalist id="stateList">
              {States.map((state, index) => {
                return <option key={index}>{state}</option>;
              })}
            </datalist>
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="font-semibold mb-1 text-lg">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              onChange={handleInputChange}
              list="citylist"
              value={city}
            />
            <datalist id="citylist">
              {Cities.map((cities, index) => {
                return <option key={index}>{cities}</option>;
              })}
            </datalist>
          </div>
          <div className="flex flex-col col-span-3">
            <label htmlFor="address" className="font-semibold mb-1 text-lg">
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your address"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white"
              rows="3"
              onChange={handleInputChange}
              value={address}
            ></textarea>
          </div>
          <div className="col-span-3 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 font-semibold text-lg hover:bg-blue-700 py-2 px-6 rounded-lg"
            >
              Add Profile
            </button>
          </div>
        </form>
      </article>
      {isLoading && (
        <section className="w-full h-full bg-black/50 fixed top-0 left-0 flex justify-center items-center z-10">
          <Spinner />
        </section>
      )}
    </section>
  );
};

export default AddProfile;
