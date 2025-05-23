import { Empty, EmptyDescription, EmptyImage, EmptyTitle } from "keep-react";
import { Link } from "react-router-dom";
import EmptyImg from "../../assets/emptyImg.svg";
import { useTranslation } from "react-i18next";
export const EmptyComponent = () => {
  const {t} = useTranslation()
  return (
    <Empty>
      <EmptyImage>
        <img src={EmptyImg} height={234} width={350} alt="404" />
      </EmptyImage>
      <EmptyTitle className="mb-[14px]">No Data Found</EmptyTitle>
      <Link
        to="/"
        className="inline-block bg-[#021321] text-white py-2 px-6 rounded"
      >
        {t('goHome')}
      </Link>
    </Empty>
  );
};
