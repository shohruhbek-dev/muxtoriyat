import React, { useState } from "react";
import user from "/src/assets/user.png";

const initialData = {
  img: user,
  text: "Tinishboyev Abdurahmon",
  dob: "01.01.2000",
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  login: "tinishboyev",
  password: "123456",
};

const Profile = () => {
  const [userInfo, setUserInfo] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="container mx-auto w-[95%] mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center">
          <img
            src={userInfo.img}
            alt={userInfo.text}
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>

        <div className="col-span-2 flex flex-col justify-center">
          <h2 className="text-xl font-bold">{userInfo.text}</h2>
          <p className="text-gray-600">{userInfo.dob}</p>
          <p className="text-gray-700 mb-4">{userInfo.about}</p>

          <div className="flex justify-between w-[60%] gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Login:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="login"
                  value={userInfo.login}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              ) : (
                <p className="mt-1 text-gray-800">{userInfo.login}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              {isEditing ? (
                <input
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              ) : (
                <p className="mt-1 text-gray-800">••••••</p>
              )}
            </div>
          </div>

          <button
            onClick={toggleEdit}
            className="mt-6 w-28 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
