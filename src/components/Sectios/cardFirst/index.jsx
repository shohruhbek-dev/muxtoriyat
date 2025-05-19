import clsx from "clsx";
import cn from "./style.module.scss";
import { useTranslation } from "react-i18next";

function CardFirst() {
  const { t } = useTranslation();
  return (
    <div className={clsx(cn["firstCard"])}>
      <h1 className="font-poppins mt-[36px] text-[#021321] font-semibold text-[40px]">{t("cardFirstHeaderText")} </h1>
      <p className="font-poppins">{t("cardFirstSubText")}</p>
    </div>
  );
}
export default CardFirst;

