import clsx from "clsx";
import cn from "./style.module.scss";
import { useTranslation } from "react-i18next";

function CardFirst() {
  const { t } = useTranslation();
  return (
    <div className={clsx(cn["firstCard"])}>
      <h1>{t("cardFirstHeaderText")} </h1>
      <p>{t("cardFirstSubText")}</p>
    </div>
  );
}
export default CardFirst;
