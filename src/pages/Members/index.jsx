import { useTranslation } from "react-i18next";
import MembersSec from "../../components/Sectios/MembersSec";
import "./style.module.scss";

function Members() {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="pl-10">
        <h1
          className="font-poppins mt-[50px] text-[#021321] font-semibold text-4xl md:text-[72px] leading-[100%] tracking-[0%]  align-middle"
          dangerouslySetInnerHTML={{ __html: t("membersHeading") }}
        ></h1>

        <p className="text-[#021321]  font-poppins font-normal text-[14px] sm:text-[22px] mt-4">
          {t("membersSubText")}
        </p>
      </div>
      <MembersSec layout="grid" headingLayout="column" />
    </div>
  );
}

export default Members;
