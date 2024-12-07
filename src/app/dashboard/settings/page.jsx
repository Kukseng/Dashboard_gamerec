"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function SettingsPage() {
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    bio: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setProfileImage(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted", { ...formData, profileImage });
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      {/* Sidebar */}
      <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
          <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

          <nav className="flex flex-col space-y-2">
            {[
              "Public Profile",
              "Account Settings",
              "Notifications",
              "PRO Account",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className={`flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full ${
                  item === "Public Profile"
                    ? "bg-white text-indigo-900 border rounded-full"
                    : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">
              Public Profile
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid max-w-2xl mx-auto mt-8"
            >
              {/* Profile Image Section */}
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <Image
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                  src={profileImage}
                  alt="Profile avatar"
                  width={160}
                  height={160}
                />

                <div className="flex flex-col space-y-5 sm:ml-8">
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <label
                    htmlFor="imageUpload"
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 cursor-pointer"
                  >
                    Change picture
                  </label>
                  <button
                    type="button"
                    onClick={handleImageDelete}
                    className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
                  >
                    Delete picture
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Your first name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Your last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="your.email@mail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="profession"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Profession
                  </label>
                  <input
                    type="text"
                    id="profession"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Your profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="bio"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Write your bio here..."
                    value={formData.bio}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
