import React, { useState } from "react";
import ContinueButton from "../../../components/Buttons/AuthButton";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PersonalInfo = () => {
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;

        //    setUserProfile((prevProfile) => ({
        //      ...prevProfile,
        //      profilePicture: imageDataUrl,
        //    }));

        setImage(imageDataUrl);
        //    updateUserProfilePicture(uid, imageDataUrl)
        //      .then(() => {
        //        console.log("Profile picture updated successfully");
        //      })
        //      .catch((error) => {
        //        console.error("Error updating profile picture:", error);
        //      });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full flex items-center justify-center p-4">
        <Link to={"/"}>
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 w-auto object-cover"
            />
          </div>
        </Link>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-1">
        <p className="text-custom-black text-2xl font-semibold whitespace-nowrap tracking-wider">
          Setup your Profile
        </p>
        <p className="text-custom-gray">Personal Details</p>
        <form className="space-y-7">
          <div className="flex flex-row items-center justify-center p-4">
            <input
              type="file"
              className="hidden"
              name="profileImage"
              id="profileImage"
              onChange={handleImageChange}
            />
            <label
              htmlFor="profileImage"
              className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
            >
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <p className="text-md text-black font-semibold">Upload Image</p>
              )}
            </label>
          </div>
          <div className="relative">
            <select
              id="user"
              required
              className="h-12 w-full px-6 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200 appearance-none"
            >
              <option value="" disabled selected>
                Choose User Type
              </option>
              <option value="Investor">Investor</option>
              <option value="Dealer">Dealer</option>
            </select>

            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="relative">
              <input
                id="firstName"
                type="text"
                required
                className="h-12 w-full px-6 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200"
                placeholder="John"
              />
              <label
                htmlFor="text"
                className="absolute -top-3 left-6 bg-white text-gray-500 px-1 text-sm transition-all duration-200"
              >
                First Name
              </label>
            </div>
            <div className="relative">
              <input
                id="lastName"
                type="text"
                required
                className="h-12 w-full px-6 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200"
                placeholder="Smith"
              />
              <label
                htmlFor="text"
                className="absolute -top-3 left-6 bg-white text-gray-500 px-1 text-sm transition-all duration-200"
              >
                Last Name
              </label>
            </div>
          </div>
          <div>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputClass=" w-full px-6 py-2 text-gray-900  rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
          </div>
          <div className="flex items-center justify-center">
            <Link to={"/profileSetup/locationInfo"}>
              <ContinueButton text="Continue" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
