import CardFirst from "../../components/Sectios/cardFirst";
import CardBigPic from "../../components/Sectios/cardBigPic";
import cn from "./style.module.scss";
import clsx from "clsx";
import SecondTextCard from "../../components/Sectios/secondTextCard";
import MembersSec from "../../components/Sectios/MembersSec";
import MemberAboutSection from "../../components/Sectios/MemberAbout";
import PicsSec from "../../components/Sectios/PicsSec";
import CountersSec from "../../components/Sectios/countersSec";
import ManbaalarSec from "../../components/Sectios/manbalarSec";
import ScrollToTopButton from "../../components/ScrollToTopBtn";
import ThreeVideoPreview from "../../components/Sectios/vedioGalreyaHome";
import { useEffect, useState } from "react";
import { getCategoriesVideosData } from "../../services/source";
import AboutDetail from "../../components/Sectios/aboutSource";

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getCategoriesVideosData("categoryId.equals=1002&page=0&size=3");
        setVideos(result.data || []);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleVideoClick = (video) => {
    // Open modal, navigate, or do something with selected video
    console.log("Clicked video:", video);
  };
  return (
    <>
      <div className={clsx(cn["Home"])}>
        <CardFirst />
        <CardBigPic />
        <SecondTextCard />
        <MemberAboutSection />
        <MembersSec
          heading="heading"
          subheading="subHeading"
          layout="slider"
          scrollType="continuous"
        />

        <ThreeVideoPreview videos={videos} onClickVideo={handleVideoClick} />
        <AboutDetail />
        <PicsSec />
        <CountersSec />
      </div >
      <ScrollToTopButton />
    </>
  );
}

export default Home;
