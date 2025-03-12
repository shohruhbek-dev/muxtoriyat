
import CardFirst from "../../components/Sectios/cardFirst";
import CardBigPic from "../../components/Sectios/cardBigPic";
import cn from "./style.module.scss"
import clsx from "clsx";
import SecondTextCard from "../../components/Sectios/secondTextCard";
import MembersSec from "../../components/Sectios/MembersSec";
import MemberAboutSection from "../../components/Sectios/MemberAbout";
import PicsSec from "../../components/Sectios/PicsSec";
import CountersSec from "../../components/Sectios/countersSec";
import ManbaalarSec from "../../components/Sectios/manbalarSec";

function Home() {
    return (
        <div className={clsx(cn["Home"])}>
            <CardFirst />
            <CardBigPic />
            <SecondTextCard />
            <MemberAboutSection />
            <MembersSec />
            <ManbaalarSec />
            <PicsSec />
            <CountersSec />
        </div>
    );
}

export default Home;
