import cn from "./style.module.scss";
import man1 from "../../../assets/man1.png";
import man2 from "../../../assets/man2.png";
import man3 from "../../../assets/man3.png";
import man4 from "../../../assets/man4.png";
import man5 from "../../../assets/man5.png";
import man6 from "../../../assets/man6.png";
import man7 from "../../../assets/man7.png";
import clsx from "clsx";
import ManPicCard from "../../Card/manPicCard";

function MembersSec() {
    const pics = [
        { img: man1, text: "Muhammadjon Tinishboyev" },
        { img: man2, text: "Muhammadjon Tinishboyev" },
        { img: man3, text: "Muhammadjon Tinishboyev" },
        { img: man4, text: "Muhammadjon Tinishboyev" },
        { img: man5, text: "Muhammadjon Tinishboyev" },
        { img: man6, text: "Muhammadjon Tinishboyev" },
        { img: man7, text: "Muhammadjon Tinishboyev" }
    ];

    return (
        <div className={clsx(cn["allMembers"])}>
            <div className={clsx(cn["membersText"])}>
                <h1>Muxtoriyat hukumati <span>a’zolari</span></h1>
                <div><i>Hijriy 1336 sana 25 Safari oxiri, Milodiy 1917 yil 27 noyabr</i> <i>“Shahri Ho’qand”</i></div>
            </div>
            <div className={clsx(cn["membersSec"], cn["scrollContainer"])}>
                <div className={cn["scrollContent"]}>
                    {[...pics, ...pics].map((pics, index) => (
                        <ManPicCard key={index} img={pics.img} text={pics.text} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MembersSec;
