import clsx from "clsx";
import cn from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import LanguageSelector from "../../Card/languageSelecter";
import MediaComponent from "../../MediaComponent";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { getUserNameFromToken } from "../../../services/user";
import { useTranslation } from "react-i18next";
import logo from "/src/assets/logo.png";
import SourcesComponent from "../../SourcesComponent/index.jsx";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [username, setUsername] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const userMenuRef = useRef(null);
  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo = getUserNameFromToken();
      setIsAuthenticated(true);
      setUsername(userInfo.sub || "Foydalanuvchi");
      localStorage.setItem("active", userInfo.active ? "true" : "false");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setShowUserMenu(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <header className={clsx(cn["header"])}>
      <Link to="/" className="inline-block w-auto max-w-[120px]">
        <img src={logo} alt="logo" className="w-full h-auto" />
      </Link>

      <div
        className={clsx(
          "fixed top-0 left-0 bottom-0 z-10 w-screen h-screen bg-[#0000004a] lg:hidden",
          {
            "translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
            "w-full": true,
          }
        )}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        className={clsx(
          "fixed z-20 lg:static top-0 right-0 w-screen sm:w-[50%] h-screen lg:h-auto lg:w-full bg-black lg:bg-transparent transition",
          {
            "translate-x-0 lg:translate-none": isMenuOpen,
            "translate-x-full lg:translate-none": !isMenuOpen,
            "w-full sm:w-1/2": true,
          }
        )}
      >
        <ul className="flex flex-col items-start lg:flex-row mt-24 ml-2 lg:mt-0 gap-8 lg:items-center lg:justify-end pl-12 lg:pl-0">
          <IoCloseSharp
            className="absolute top-8 right-8 cursor-pointer lg:hidden"
            size={32}
            onClick={() => setIsMenuOpen(false)}
          />
          <Link to={"/"}> {t("main")} </Link>
          <Link
            to={"/history"}
            className="block w-32 truncate whitespace-nowrap overflow-hidden"
          >
            {" "}
            {t("history")}{" "}
          </Link>
          <Link to={"/articles"}>{t("articles")}</Link>
          <Link
            to={"/members"}
            className="block w-32 truncate whitespace-nowrap overflow-hidden"
          >
            {t("govermentMembers")}
          </Link>
          <SourcesComponent />
          <MediaComponent />
          <Link
            to={"/write"}
            className="block w-32 truncate whitespace-nowrap overflow-hidden"
          >
            {t("write")}
          </Link>
          <div className={clsx(cn["lan"])}>
            <ul className="flex gap-4">
              <li>
                <LanguageSelector />
              </li>
              {isAuthenticated ? (
                <li className="relative" ref={userMenuRef}>
                  {" "}
                  <button
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      {username.charAt(0).toUpperCase()}
                    </div>
                    <span>{username}</span>
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowUserMenu(false)}
                      >
                        {t("profile")}
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={handleLogout}
                      >
                        <div className="flex items-center gap-2">
                          <IoMdLogOut />
                          {t("logout")}
                        </div>
                      </button>
                    </div>
                  )}
                </li>
              ) : (
                <Link to={"/auth"} className="flex items-center gap-2">
                  <FaUser />
                  {t("login")}
                </Link>
              )}
            </ul>
          </div>
        </ul>
      </div>

      <button
        className="cursor-pointer block lg:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <FaBarsStaggered size={28} />
      </button>
    </header>
  );
}

export default Nav;
