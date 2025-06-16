import clsx from "clsx";
import cn from "./style.module.scss";

import { useTranslation } from "react-i18next";

function SecondTextCard() {
  const { t } = useTranslation();
  return (
    <div className={clsx(cn["SecondTextCard"])}>
      <h3 className="font-[Poppins] font-medium text-[100px] text-[#021321]">
        {t("secondTextCardHeader1")}
      </h3>
      <h3 className="font-[Poppins] font-medium text-[100px] text-[#021321] ">
        {t("secondTextCardHeader2")}
      </h3>

      <div
        className="font-[Poppins] font-light text-[32px] text-[#021321]"
        dangerouslySetInnerHTML={{ __html: t("secondTextCardSub1") }}
      />
      <div
        className="font-[Poppins] font-light text-[32px]"
        dangerouslySetInnerHTML={{ __html: t("secondTextCardSub2") }}
      />

      <i className="font-[Poppins] font-semibold ">
        {t("secondTextCardFooter1")}
      </i>
      <i className="font-[Poppins] font-semibold ">
        {t("secondTextCardFooter2")}
      </i>
    </div>
  );
}
export default SecondTextCard;
