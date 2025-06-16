import clsx from "clsx";
import cn from "./style.module.scss";
import { useTranslation } from "react-i18next";

function CardFirst() {
  const { t } = useTranslation();
  const headerText = t("cardFirstHeaderText"); // full string
  const [before, highlighted] = headerText.split("Turkiston");

  return (
    <div className={clsx(cn["firstCard"])}>
      <h1 className="font-poppins mt-[36px] text-[#021321] font-semibold text-[40px]">
        {before}
        <span style={{ color: "#003561" }}>Turkiston</span>
      </h1>
      <p className="font-poppins">{t("cardFirstSubText")}</p>
    </div>
  );
}

export default CardFirst;
