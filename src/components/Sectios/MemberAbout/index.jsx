import React, { useState, useEffect } from "react";
import clsx from "clsx";
import cn from "./style.module.scss";
import man1 from "../../../assets/cholpon.png";
import man2 from "../../../assets/abdurashidxon.png";
import man3 from "../../../assets/behbudiy.png";
import { useTranslation } from "react-i18next";

const membersInfo = [
  {
    img: man1,
    h1: "cholpon",
    p: "cholponText",
  },
  {
    h1: "munavvar",
    p: "munavvarText",
    img: man2,
  },
  {
    img: man3,
    h1: "behbudiy",
    p: "behbudiyText",
  },
];
const MemberAboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const { t } = useTranslation();
  function getCardsToShow() {
    const width = window.innerWidth;
    if (width < 700) return 1;
    if (width < 1024) return 2;
    return 3;
  }
  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + membersInfo.length) % membersInfo.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % membersInfo.length);
  };

  const visibleCards = Array.from({ length: cardsToShow }).map((_, i) => {
    const index = (currentIndex + i) % membersInfo.length;
    return membersInfo[index];
  });

  return (
    <div className={clsx(cn.MemberAboutSectionFull)}>
      <div className={clsx(cn.MemberAboutSection1)}>
        {cardsToShow < membersInfo.length && (
          <div className={clsx(cn.rightleftSec)}>
            <button onClick={handlePrev} className="cursor-pointer">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button onClick={handleNext} className="cursor-pointer">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        )}
        <div className={clsx(cn.MemberAboutSection)}>
          {visibleCards.map((member, index) => (
            <div className={clsx(cn.MemberAbout)} key={index}>
              {Object.keys(member).map((key) => {
                switch (key) {
                  case "img":
                    return <img key={key} src={member[key]} alt="Member" />;
                  case "h1":
                    return <h1 key={key}>{t(`${member[key]}`)}</h1>;
                  case "p":
                    return <p key={key}>{t(`${member[key]}`)}</p>;
                  default:
                    return null;
                }
              })}
            </div>
          ))}
        </div>
        <div
          className={clsx(cn["textSect"])}
          dangerouslySetInnerHTML={{ __html: t("memberAboutFooterText") }}
        />
      </div>
    </div>
  );
};

export default MemberAboutSection;
