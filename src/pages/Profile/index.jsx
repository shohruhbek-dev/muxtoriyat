import React, { useEffect, useState } from "react";
import user from "/src/assets/user.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";
import "./style.scss";
import {
  getMyArticlesCount,
  getProfileData,
  postPassword,
  postProfileData,
} from "../../services/source";
import {useTranslation} from "react-i18next";
import ProfileLoader from "../../components/Spinner/ProfileLoader";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordReset, setNewPasswordReset] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordReset, setShowNewPasswordReset] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [myArticlesCount, setMyArticlesCount] = useState(0);

  const fetchData = async () => {
    try {
      const res = await getProfileData();
      const count = await getMyArticlesCount();
      setUserInfo(res);
      setMyArticlesCount(count);
      setLoading(false);
    } catch {
      toast.error("Ma'lumotlarni yuklashda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDataEdit = () => {
    setEditData(userInfo); // reset editData when entering edit mode
    setOldPassword("");
    setNewPassword("");
    setIsEditing(true);
  };

  const handleDataCancel = () => {
    setIsEditing(false);
  };

  const handleDataSave = async () => {
    try {
      const response = await postProfileData(editData);

      if (response.status === 200) {
        toast.success(
          response.message || "Ma'lumotlar muvaffaqiyatli saqlandi."
        );
        setUserInfo(response.data); // APIdan qaytgan yangi ma'lumotlarni o‘rnatamiz
        setIsEditing(false);
      } else {
        toast.error(
          response.message || "Ma'lumotlarni saqlashda xatolik yuz berdi."
        );
      }
    } catch {
      toast.error("Server bilan bog‘lanishda xatolik yuz berdi.");
    }
  };

  const handlePasswordCancel = () => {
    setEditData(userInfo);
    setOldPassword("");
    setNewPassword("");
    setNewPasswordReset("");
    setIsPasswordEditing(false);
  };

  const handlePasswordSave = async () => {
    if (!oldPassword || !newPassword || !newPasswordReset) {
      toast.error("Iltimos, barcha parol maydonlarini to‘ldiring!");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Yangi parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
      return;
    }

    if (newPassword !== newPasswordReset) {
      toast.error("Yangi parollar mos kelmayapti!");
      return;
    }

    try {
      const response = await postPassword({
        oldPassword,
        newPassword,
        confirmPassword: newPasswordReset,
      });

      console.log(response);

      if (response.status === 200) {
        toast.success("Parol muvaffaqiyatli yangilandi!");
        setIsPasswordEditing(false);
        setOldPassword("");
        setNewPassword("");
        setNewPasswordReset("");
        localStorage.removeItem("token");
        navigate("/auth");
      } else {
        toast.error(
          response.message || "Parolni o‘zgartirishda xatolik yuz berdi"
        );
      }
    } catch {
      toast.error("Eski parol noto‘g‘ri kiritilgan!");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-end items-end w-full mt-5">
        <ProfileLoader />
      </div>
    );
  }

  return (
    <div className="container mx-auto w-[95%] mt-10 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center border border-[#EBEFF5] rounded-3xl">
          <div className="relative">
            <img
              src={userInfo?.img ? userInfo.img : user}
              alt={userInfo?.login}
              className="w-40 h-40 object-cover rounded-full"
            />
            <button className="absolute bottom-0 right-0 bg-[#514EF3] rounded-full p-2 shadow-md cursor-pointer hover:shadow-blue-950 transition">
              <BiEditAlt size={20} color="white" />
            </button>
          </div>
          <div className="flex gap-1 p-3">
            <h2 className="text-xl font-bold">{userInfo?.firstName}</h2>
            <h2 className="text-xl font-bold">{userInfo?.lastName}</h2>
          </div>

          <div
            to={"/my-article"}
            className="flex justify-between w-full px-[30px] py-[24px] border-t border-b border-[#D7DDE8] text-[#021321] font-[Helvetica Neue] text-[18px] "
          >
            <h3 className="">{t("MyArticles")}</h3>
            <p className="font-bold">{myArticlesCount}</p>
          </div>
          <div
            to={"/my-top-article"}
            className="flex justify-between w-full px-[30px] py-[24px] border-b border-[#D7DDE8] text-[#021321] font-[Helvetica Neue] text-[18px] "
          >
            <h3 className="">{t("TheMostReadArticles")}</h3>
            <p className="font-bold">24</p>
          </div>
        </div>

        <div className="col-span-2 flex flex-col border border-[#EBEFF5] rounded-3xl p-10 text-[#021321]">
          <div className="flex items-center justify-between pb-4 border-b border-[#D7DDE8]">
            <h2 className="text-[18px] font-bold">{t("ProfileSettings")}</h2>

            <button
              onClick={handleDataEdit}
              className="text-[#021321] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <BiEditAlt size={18} />
              {t("Edit")}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5 pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">{t("Username")}</h3>
                {isEditing ? (
                  <input
                    type="text"
                    name="login"
                    value={editData?.login}
                    onChange={handleChange}
                    className="input-border"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{userInfo.login}</p>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">{t("Name")}</h3>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={editData?.firstName}
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
                <h3 className="font-semibold">{t("Email")}</h3>
                {isEditing ? (
                  <input
                    type="text"
                    name="email"
                    value={editData?.email}
                    onChange={handleChange}
                    className="input-border"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{userInfo.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">{t("Surname")}</h3>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={editData?.lastName}
                    onChange={handleChange}
                    className="input-border"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{userInfo.lastName}</p>
                )}
              </div>
            </div>
          </div>
          {isEditing && (
            <div className="w-full grid grid-cols-2 gap-5 pt-6">
              <button className="cancelBtn btn" onClick={handleDataCancel}>
                {t("Cancel")}
              </button>
              <button className="saveBtn btn" onClick={handleDataSave}>
                {t("Save")}
              </button>
            </div>
          )}

          <div className="flex items-center justify-between pt-16">
            <h3 className="text-[#021321] text-[16px] font-bold">
              {t("ChangePassword")}
            </h3>
            <button
              onClick={() => setIsPasswordEditing(true)}
              className="text-[#021321] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <BiEditAlt size={18} />
              {t("Edit")}
            </button>
          </div>
          {isPasswordEditing && (
            <>
              <div className="pt-6 flex flex-col gap-6">
                <div className="password-box">
                  <h4 className="password-text">{t("CurrentPassword")}</h4>
                  <div className="relative mb-2">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      placeholder={t("CurrentPassword")}
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
                  <h4 className="password-text">{t("NewPassword")}</h4>
                  <div className="relative mb-2">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder={t("NewPassword")}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="mt-1 p-2 border rounded w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword((prev) => !prev)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                    >
                      {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div className="password-box">
                  <h4 className="password-text">{t("ConfirmPassword")}</h4>
                  <div className="relative mb-2">
                    <input
                      type={showNewPasswordReset ? "text" : "password"}
                      placeholder={t("ConfirmPassword")}
                      value={newPasswordReset}
                      onChange={(e) => setNewPasswordReset(e.target.value)}
                      className="mt-1 p-2 border rounded w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPasswordReset((prev) => !prev)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                    >
                      {showNewPasswordReset ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-5 pt-6">
                <button
                  className="cancelBtn btn"
                  onClick={handlePasswordCancel}
                >
                  {t("Cancel")}
                </button>
                <button className="saveBtn btn" onClick={handlePasswordSave}>
                  {t("Save")}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Profile;
