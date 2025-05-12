import React, { useState } from "react";
import user from "/src/assets/user.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  const [editData, setEditData] = useState(initialData);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setEditData(userInfo); // reset editData when entering edit mode
    setOldPassword("");
    setNewPassword("");
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditData(userInfo);
    setOldPassword("");
    setNewPassword("");
    setIsEditing(false);
  };

  const handleSave = () => {
    if (oldPassword || newPassword) {
      if (oldPassword !== userInfo.password) {
        toast.error("Eski parol noto‘g‘ri!");
        return;
      }

      if (newPassword.length < 6) {
        toast.error("Yangi parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
        return;
      }
    }

    const isChanged = editData.login !== userInfo.login || newPassword;

    if (!isChanged) {
      toast.info("Hech qanday o‘zgarish kiritilmadi.");
      return;
    }

    const updatedData = {
      ...editData,
      password: newPassword ? newPassword : userInfo.password,
    };

    setUserInfo(updatedData);
    setIsEditing(false);
    toast.success("Ma'lumotlar muvaffaqiyatli saqlandi.");
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
                  value={editData.login}
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
                <>
                  <div className="relative mb-2">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      placeholder="Eski parol"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="mt-1 p-2 border rounded w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowOldPassword((prev) => !prev)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                    >
                      {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Yangi parol"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="p-2 border rounded w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword((prev) => !prev)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                    >
                      {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </>
              ) : (
                <p className="mt-1 text-gray-800">••••••</p>
              )}
            </div>
          </div>

          {isEditing ? (
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSave}
                className={`cursor-pointer w-28 py-2 px-4 rounded text-white ${
                  editData.login !== userInfo.login || newPassword
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-green-300 cursor-not-allowed"
                }`}
                disabled={!(editData.login !== userInfo.login || newPassword)}
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="cursor-pointer w-28 bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={toggleEdit}
              className="cursor-pointer mt-6 w-28 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Profile;
