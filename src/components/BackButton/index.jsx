import { FaArrowLeftLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBackFunc = () => {
    navigate(-1); // Navigates to the previous page
  };
  return (
    <div className="border-b-[3px] w-[95%] border-[#F2F2F2]">
      <button
        onClick={handleBackFunc}
        className="cursor-pointer gap-2  font-inter font-normal text-base leading-5 tracking-normal text-left  text-[#021321] py-6 ml-28 flex items-center"
      >
        <FaArrowLeftLong size={20} />
        <span className="text-[18px]">{t("goBack")}</span>
      </button>
    </div>
  );
};
export default BackButton;
