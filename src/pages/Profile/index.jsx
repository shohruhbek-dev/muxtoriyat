import React, { useState } from "react";
import user from "/src/assets/user.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.scss";

const initialData = {
  img: user,
  firstName: "Abdurahmon",
  lastName: "Tinishboyev",
  dob: "01.01.2000",
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  login: "tinishboyev",
  password: "123456",
  email: "admin@gmail.com",
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
    <div className="container mx-auto w-[95%] mt-10 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center border border-[#EBEFF5] rounded-3xl">
          <div className="relative">
            <img
              src={userInfo.img}
              alt={userInfo.text}
              className="w-40 h-40 object-cover rounded-full"
            />
            <button className="absolute bottom-0 right-0 bg-[#514EF3] rounded-full p-2 shadow-md cursor-pointer hover:shadow-blue-950 transition">
              <BiEditAlt size={20} color="white" />
            </button>
          </div>
          <div className="flex gap-1 p-3">
            <h2 className="text-xl font-bold">{userInfo.firstName}</h2>
            <h2 className="text-xl font-bold">{userInfo.lastName}</h2>
          </div>
          <p className="text-gray-600 pb-2">{userInfo.dob}</p>

          <Link
            to={"/my-article"}
            className="flex justify-between w-full px-[30px] py-[24px] border-t border-b border-[#D7DDE8] text-[#021321] font-[Helvetica Neue] text-[18px] "
          >
            <h3 className="">Mening maqolalarim</h3>
            <p className="font-bold">50</p>
          </Link>
          <Link
            to={"/my-top-article"}
            className="flex justify-between w-full px-[30px] py-[24px] border-b border-[#D7DDE8] text-[#021321] font-[Helvetica Neue] text-[18px] "
          >
            <h3 className="">Eng ko‘p o‘qilgan maqolalarim </h3>
            <p className="font-bold">24</p>
          </Link>
        </div>

        <div className="col-span-2 flex flex-col border border-[#EBEFF5] rounded-3xl p-10 text-[#021321]">
          <h2 className="text-[18px] font-bold border-b border-[#D7DDE8] pb-4">
            Profil sozlamalari
          </h2>

          <div className="grid grid-cols-2 gap-5 pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">Foydalanuvchi nomi</h3>
                {isEditing ? (
                  <input
                    type="text"
                    name="login"
                    value={editData.login}
                    onChange={handleChange}
                    className="input-border"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{userInfo.login}</p>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">Ism</h3>
                {isEditing ? (
                  <input
                    type="text"
                    name="login"
                    value={editData.firstName}
                    onChange={handleChange}
                    className="input-border"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{userInfo.firstName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">Email</h3>
                {isEditing ? (
                  <input
                    type="text"
                    name="login"
                    value={editData.email}
                    onChange={handleChange}
                    className="input-border"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{userInfo.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">Familiya</h3>
                {isEditing ? (
                  <input
                    type="text"
                    name="login"
                    value={editData.lastName}
                    onChange={handleChange}
                    className="input-border"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{userInfo.lastName}</p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-5 pt-6">
            <button className="cancelBtn btn">Bekor qilish</button>
            <button className="saveBtn btn">Saqlash</button>
          </div>

          <h3 className="pt-16 text-[#021321] text-[16px] font-bold">
            Parolni o'zgartirish
          </h3>
          <div className="pt-6 flex flex-col gap-6">
            <div className="password-box">
              <h4 className="password-text">Joriy parolingiz</h4>
              <div className="relative mb-2">
                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Joriy parolingizni kiriting"
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
            </div>
            <div className="password-box">
              <h4 className="password-text">Yangi parolingiz</h4>
              <div className="relative mb-2">
                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Yangi parolingizni kiriting"
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
            </div>
            <div className="password-box">
              <h4 className="password-text">Yangi parolingiz takrorlang</h4>
              <div className="relative mb-2">
                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Yangi parolingizni kiriting"
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
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-5 pt-6">
            <button className="cancelBtn btn">Bekor qilish</button>
            <button className="saveBtn btn">Saqlash</button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Profile;
