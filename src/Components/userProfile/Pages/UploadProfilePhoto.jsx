import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthUserContext } from "../../../context/AuthContextApi";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../Helper/spinner";

const UploadProfilePhoto = () => {
  let { authUser } = useContext(AuthUserContext);
  let navigate = useNavigate();

  let [photoFile, setPhotoFile] = useState("");
  let [photoPreview, setPhotoPreview] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  let handleFileInputChange = (e) => {
    let file = e.target.files[0];
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!photoFile) {
        toast.error("Please select a file before uploading");
        setIsLoading(false);
        return;
      }

      let fileData = new FormData();
      fileData.append("file", photoFile);
      fileData.append("upload_preset", "profile_photo");
      fileData.append("cloud_name", "dcoajlkmk");

      let response = await fetch(
        "https://api.cloudinary.com/v1_1/dcoajlkmk/image/upload",
        {
          method: "POST",
          body: fileData,
        }
      );

      let result = await response.json();
      let imageUrl = result.url;

      await updateProfile(authUser, {
        photoURL: imageUrl,
      });

      toast.success("Profile photo updated successfully");
      navigate("/user/profile");
    } catch (error) {
      toast.error(error.code.slice(5));
      console.log("Error while uploading:", error);
    }
    setIsLoading(false);
  };
  return (
    <section className="w-[83vw] bg-gray-200 flex justify-center items-center py-12 mt-[70px]">
      {isLoading && (
        <section className="w-full h-full bg-black/50 fixed top-0 left-0 flex justify-center items-center z-10">
          <Spinner />
        </section>
      )}
      <article className="bg-gray-900 w-[40%] rounded-lg">
        <header className="text-center text-3xl text-white font-bold pt-6 uppercase">
          <h1>Upload Profile Photo</h1>
        </header>
        <form onSubmit={handleSubmit} className="p-6 text-white">
          <div className="flex flex-col mb-3">
            <label htmlFor="profile" className="font-semibold mb-1 text-lg">
              Upload your profile photo here
            </label>
            <input
              type="file"
              name="photoFile"
              id="profile"
              className="outline-none border border-gray-500 p-2 rounded-md bg-gray-800 text-white file:bg-gray-700 file:text-white file:p-1 file:rounded file:cursor-pointer cursor-pointer"
              onChange={handleFileInputChange}
            />
          </div>
          {photoPreview && (
            <div className="flex justify-center mb-3">
              <img
                src={photoPreview}
                alt="Preview"
                className="w-[150px] h-[150px] border rounded-full bg-gray-700"
              />
            </div>
          )}
          <div className="flex flex-col mb-3">
            <button className="bg-blue-600 font-semibold text-lg hover:bg-blue-700 py-2 mt-2 rounded-lg cursor-pointer">
              Upload Profile
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UploadProfilePhoto;