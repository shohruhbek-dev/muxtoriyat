import cn from "./style.module.scss";
import clsx from "clsx";
import tarix1 from "../../assets/video.png";
import tarix2 from "../../assets/assets_task_01jrnj4574fm78za4ea2nsycqk_img_0 1.png";
import tarix5 from "../../assets/assets_task_01jsgccxvge9vtvyyvam1fpkwj_img_0 1.png";
import tarix3 from "../../assets/Group 1171275055.png";
import tarix4 from "../../assets/freepik__enhance__36238 2 (3).png";
import { useTranslation } from "react-i18next";

function History() {
  const { t } = useTranslation();
  return (
    <div className=" history p-[40px]">
      <h1
        className={`${clsx(
          cn["headerSpan"]
        )} font-poppins mt-[50px] text-[#021321] font-semibold text-4xl lg:text-[72px] leading-[100%] tracking-[0%]  align-middle`}
        dangerouslySetInnerHTML={{ __html: t("historyPageList.header1") }}
      />

      <p className="font-poppins mt-[30px] mb-[40px] font-normal text-[22.7px]">
        {t("historyPageList.text1")}
      </p>

      <img src={tarix1} alt="" />

      {Array.from({ length: 4 }, (_, i) => i + 2).map((i) => (
        <p key={1} className="font-poppins mt-9 mb-8 font-normal text-[22.7px]">
          {t(`historyPageList.text${i}`)}
        </p>
      ))}

      <img src={tarix2} alt="" />

      {Array.from({ length: 3 }, (_, i) => i + 6).map((i) => (
        <p key={2} className="font-poppins mt-9 mb-8 font-normal text-[22.7px]">
          {t(`historyPageList.text${i}`)}
        </p>
      ))}

      <img src={tarix3} alt="" />

      {Array.from({ length: 4 }, (_, i) => i + 9).map((i) => (
        <p key={3} className="font-poppins mt-9 mb-8 font-normal text-[22.7px]">
          {t(`historyPageList.text${i}`)}
        </p>
      ))}

      <img src={tarix4} alt="" />

      {Array.from({ length: 11 }, (_, i) => i + 13).map((i) => (
        <p key={4} className="font-poppins mt-9 mb-8 font-normal text-[22.7px]">
          {t(`historyPageList.text${i}`)}
        </p>
      ))}

      <h3 className="font-poppins  mb-8 font-medium  text-[32px] ">
        {t("historyPageList.header2")}
      </h3>

      <ol className="mt-2 mb-14 custom-list">
        {Array.from({ length: 8 }, (_, i) => i + 24).map((i) => (
          <li key={5} className="font-poppins   font-normal text-[22.7px] ">
            {t(`historyPageList.text${i}`)}
          </li>
        ))}
      </ol>

      <img src={tarix5} alt="" />

      {Array.from({ length: 20 }, (_, i) => i + 32).map((i) => (
        <p key={6} className="font-poppins mt-9 mb-8 font-normal text-[22.7px]">
          {t(`historyPageList.text${i}`)}
        </p>
      ))}

    </div>
  );
}

export default History;
