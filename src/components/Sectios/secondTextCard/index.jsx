import clsx from "clsx";
import cn from "./style.module.scss";

import { useTranslation } from "react-i18next";

function SecondTextCard() {
  const { t } = useTranslation();
  return (
    <div className={clsx(cn["SecondTextCard"])}>
      <h3 class="font-[Poppins] font-medium text-[100px]">{t("secondTextCardHeader1")}</h3>
      <h3 class="font-[Poppins] font-medium text-[100px] ">{t("secondTextCardHeader2")}</h3>

      <div class="font-[Poppins] font-light text-[32px] text-[#021321]" dangerouslySetInnerHTML={{ __html: t("secondTextCardSub1") }} />
      <div class="font-[Poppins] font-light text-[32px]" dangerouslySetInnerHTML={{ __html: t("secondTextCardSub2") }} />

      <i class="font-[Poppins] font-semibold ">{t("secondTextCardFooter1")}</i>
      <i class="font-[Poppins] font-semibold ">
        {t("secondTextCardFooter2")}
      </i>
    </div>
  );
}
export default SecondTextCard;
