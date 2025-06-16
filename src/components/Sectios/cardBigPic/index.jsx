import clsx from "clsx";
import cn from "./style.module.scss";
import pic1 from "/src/assets/all1.png";
import { useTranslation } from "react-i18next";

function CardBigPic() {
  const { t } = useTranslation();
  return (
    <div className={clsx(cn["CardBigPic"])}>
      <img src={pic1} alt="Image1" />
      <button>
        <a className="font-poppins " href="#">
          <i className="fa-solid fa-circle-play"></i>
          {t("videoLink")}
        </a>
      </button>
    </div>
  );
}

export default CardBigPic;
