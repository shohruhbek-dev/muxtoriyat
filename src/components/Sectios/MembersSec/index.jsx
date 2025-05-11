/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import man1 from "../../../assets/man1.png";
import man2 from "../../../assets/man2.png";
import man3 from "../../../assets/man3.png";
import man4 from "../../../assets/man4.png";
import man5 from "../../../assets/man5.png";
import man6 from "../../../assets/man6.png";
import man7 from "../../../assets/man7.png";
import man8 from "../../../assets/man8.png";
import ManPicCard from "../../Card/manPicCard";
import { useTranslation } from "react-i18next";

function MembersSec({
  heading,
  subheading,
  layout = "slider",
  scrollType = "continuous",
}) {
  const { t } = useTranslation();

  const pics = useMemo(()=>[
    {
      img: man1,
      text: t("members.tinishboyev.text"),
      dob: t("members.tinishboyev.dob"),
      about: t("members.tinishboyev.about"),
    },
    {
      img: man2,
      text: t("members.abdurahmon.text"),
      dob: t("members.abdurahmon.dob"),
      about: t("members.abdurahmon.about"),
    },

    {
      img: man8,
      text: t("members.hidoyatbek.text"),
      dob: t("members.hidoyatbek.dob"),
      about: t("members.hidoyatbek.about"),
    },
    {
      img: man3,
      text: t("members.solomon.text"),
      dob: t("members.solomon.dob"),
      about: t("members.solomon.about"),
    },
    {
      img: man4,
      text: t("members.mustafo.text"),
      dob: t("members.mustafo.dob"),
      about: t("members.mustafo.about"),
    },
    {
      img: man6,
      text: t("members.sulton.text"),
      dob: t("members.sulton.dob"),
      about: t("members.sulton.about"),
    },
    {
      img: man5,
      text: t("members.ubaydulla.text"),
      dob: t("members.ubaydulla.dob"),
      about: t("members.ubaydulla.about"),
    },
    {
      img: man7,
      text: t("members.obidjon.text"),
      dob: t("members.obidjon.dob"),
      about: t("members.obidjon.about1") + t("members.obidjon.about2"),
    },
  ]);
  const [clones, setClones] = useState([]);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (layout === "slider" && scrollType === "continuous") {
      setClones([...pics, ...pics]);
    } else {
      setClones(pics);
    }
  }, [layout, scrollType]);

  useEffect(() => {
    if (layout === "slider" && scrollType === "continuous") {
      const slider = sliderRef.current;
      let scrollInterval;

      const startScrolling = () => {
        scrollInterval = setInterval(() => {
          if (slider) {
            slider.scrollLeft += 1;
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
              slider.scrollLeft = 0;
            }
          }
        }, 20);
      };

      startScrolling();
      return () => clearInterval(scrollInterval);
    }
  }, [clones, layout, scrollType]);

  const handleMemberClick = (index) => {
    navigate(`/member/${index}`, { state: pics[index] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full pl-10 pr-10 my-5">
      <div
        className={`headings flex  justify-between flex-col lg:flex-row items-start gap-5 md:gap-12`}
      >
        {heading && (
          <h1 className="text-[#021321] text-2xl md:text-5xl lg:text-6xl">
            {t(`${heading}`)}
          </h1>
        )}
        {subheading && (
          <p
            className={`text-2xl  text-left lg:text-right text-[#2D2D2D] space-y-2`}
          >
            {t(`${subheading}`)}
          </p>
        )}
      </div>

      <div className="relative w-full mt-5">
        {layout === "slider" ? (
          <div
            ref={sliderRef}
            className="flex gap-6 mt-10 w-full overflow-x-auto whitespace-nowrap no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clones.map((pic, index) => (
              <div
                key={index}
                className="min-w-[250px] flex-shrink-0 cursor-pointer"
                onClick={() => handleMemberClick(index % pics.length)}
              >
                <ManPicCard img={pic.img} text={pic.text} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2  mb-20 md:grid-cols-4 gap-6">
            {pics.map((pic, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleMemberClick(index)}
              >
                <ManPicCard img={pic.img} text={pic.text} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MembersSec;
