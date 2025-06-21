import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postAuth } from "../../services/authService";
import {useTranslation} from "react-i18next";
import BackButton from "../../components/BackButton/index.jsx";
import {FaArrowLeftLong} from "react-icons/fa6";

const Auth = () => {

  const {t} = useTranslation();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.username || !formData.password) {
      toast.error("Barcha maydonlarni to'ldiring");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Call your auth service with the form data
      const response = await postAuth({
        username: formData.username,
        password: formData.password,
        rememberMe: rememberMe,
      });

      // Save the token to localStorage
      if (response && response.id_token) {
        localStorage.setItem("token", response.id_token);

        // If there's a username in the response, save it too
        if (response.username) {
          localStorage.setItem("username", response.username);
        }

        toast.dismiss();
        toast.success("Muvaffaqiyatli kirildi");
        navigate("/");
      } else {
        // Handle case where response doesn't have expected structure
        toast.error("Serverdan noto'g'ri javob qaytdi");
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.message || "Kirishda xatolik yuz berdi";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackFunc = () => {
    navigate("/"); // Navigates to home page
  };

  return (
      <>
        <div className="border-b-[3px] w-[95%] border-[#F2F2F2]">
          <button
              onClick={handleBackFunc}
              className="cursor-pointer gap-2  font-inter font-normal text-base leading-5 tracking-normal text-left  text-[#021321] py-6 ml-28 flex items-center"
          >
            <FaArrowLeftLong size={20} />
            <span className="text-[18px]">{t("goBack")}</span>
          </button>
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                {t("SignIn")}
              </h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                >
                  {t("Username")}
                </label>
                <div className="mt-1">
                  <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                  {t("Password")}
                </label>
                <div className="mt-1">
                  <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                  >
                    {t("RememberMe")}
                  </label>
                </div>

                <div className="text-sm">
                  <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    {t("ForgotPassword")}
                  </a>
                </div>
              </div>

              <div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-[#021321] hover:bg-[#021321d2]  focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? (
                      <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                      >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                  ) : (
                      "Kirish"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
  );
};

export default Auth;
