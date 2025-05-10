
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
            <MembersSec
                heading="Muxtoriyat hukumati a’zolari"
                subheading="Hijriy 1336 sana 25 Safari oxiri, Milodiy 1917 yil 27 noyabr — “Shahri Ho’qand”"
                layout="slider"
                scrollType="continuous"
                headingLayout = "column"
            />

            <PicsSec />
            <CountersSec />
        </div>
    );
}

export default Home;
