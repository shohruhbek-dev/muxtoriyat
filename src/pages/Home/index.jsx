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

function Home() {
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

        <PicsSec />
        <CountersSec />
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Home;
