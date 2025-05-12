import clsx from "clsx";
import cn from "./style.module.scss";
import { useTranslation } from "react-i18next";

function SecondTextCard() {
  const { t } = useTranslation();
  return (
    <div className={clsx(cn["SecondTextCard"])}>
      <h3>{t("secondTextCardHeader1")}</h3>
      <h3>{t("secondTextCardHeader2")}</h3>

      <div dangerouslySetInnerHTML={{ __html: t("secondTextCardSub1") }} />
      <div dangerouslySetInnerHTML={{ __html: t("secondTextCardSub2") }} />

      <i>{t("secondTextCardFooter1")}</i>
      <i>
        {t("secondTextCardFooter2")}
      </i>
    </div>
  );
}
export default SecondTextCard;
