import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import man1 from "../../../assets/man1.png";
import man2 from "../../../assets/man2.png";
import man3 from "../../../assets/man3.png";
import man4 from "../../../assets/man4.png";
import man5 from "../../../assets/man5.png";
import man6 from "../../../assets/man6.png";
import man7 from "../../../assets/man7.png";
import ManPicCard from "../../Card/manPicCard";

function MembersSec({ heading, subheading, layout = "slider", scrollType = "continuous" }) {
    const pics = [
        {
            img: man1, text: "Muhammadjon Tinishboyev", dob: "1879-1939-yillar", about:
                "Muhammadjon Tinishboyev [Muxamedjan Tinishpayev]– davlat va jamoat arbobi, tarixchi olim. 1879-yil 12-mayda Yettisuv viloyati Lepsinsk uyezdi Sadir volostining Echkiolmas togʻi etagida tugʻilgan. Millati – qozoq. U 1889 – 1900-yillarda Verniy erkaklar gimnaziyasi, 1900 – 1906-yillarda Sankt-Peterburg Imperatorlik instituti – Aleksandr I nomidagi temir yoʻl transporti injenerlar institutida oʻqidi. 1907-yili II chaqiriq Rossiya Davlat dumasi deputati qilib saylandi. 1917-yil aprelda tuzilgan Muvaqqat hukumatning Turkiston komiteti aʼzosi. Ayni paytda Muvaqqat hukumatning Yettisuv viloyati komissari[2]. Qoʻqonda Turkiston Muxtoriyati hukumati 1917-yil 27-noyabrda tashkil topgach, hukumatning Bosh vaziri (1917-yil noyabr – dekabr) va ichki ishlar vaziri (1917-yil noyabr – 1918-yil fevral). 1917-yil 5 – 13-dekabrda Orenburgda oʻtkazilgan II Butunqozoq syezdida qatnashdi. Bu syezdda Alixon Bukeyxonov (1866 – 1937) boshchiligida Alash avtonomiyasi [Alash Oʻrda hukumati] tashkil topdi. U Alash Oʻrda hukumatida ichki ishlar vaziri (1917-yil dekabr – 1920-yil mart) va keyinchalik Bosh vazir oʻrinbosari lavozimlarida ishladi. M.Tinishboyev keyinchalik Turkiston ASSR va Qozogʻiston ASSRda turli lavozimlarda faoliyat koʻrsatdi. Turkiy xalqlar tarixi va etnografiyasiga oid turli asarlar yozgan hamda ular rus tilida Toshkentda nashr qilingan. Sovet hokimiyati tomonidan M. Tinishboyev birinchi marta 1930-yil 3-avgustda qamoqqa olindi va besh yilga RSFSRning Markaziy qoratuproq hududi (hozirgi Voronej oblasti)ga surgun qilindi (1930 – 1935). Keyinchalik Toshkentda NKVD tomonidan 1937-yil 21-noyabrda qayta qamoqqa olindi hamda Toshkent turmasidagi kasalxonada u 1939-yil 3-iyulda vafot etdi. 1970-yil 27-fevralda Oʻzbekiston SSR Ministrlar Soveti huzuridagi KGB tergov boʻlimi tomonidan M.Tinishboyevga nisbatan jinoiy ish qayta koʻrib chiqilib, u reabilitatsiya qilindi. M.Tinishboyevning tanlangan asarlari va boshqa kitoblari Almatida 1991-yildan keyin nashr etildi. SSSR tarqalgach, Qozogʻistonda uning xotirasi sharafiga koʻplab haykallari oʻrnatildi. Qozogʻistonda maxsus medal chiqarilgan."

        },
        {
            img: man2, text: "Abdurahmon O‘razboyev ", dob: "1938-01-30", about: "Abdurahmon O‘razboyev -  taniqli davlat va jamoat arbobi.1888 yilda Yangi Marg‘ilon (hozirgi Farg‘ona) shahrida amaldor oilasida tug‘ilgan. Abdurahmonbek ota tomondan xuddi Mustafo Cho‘qay ajdodlari singari qozoqlarning qipchoq urug‘iga borib taqaladi. Otasi – Muhammad O‘razayev (1898 yil 10 mayda vafot etgan) O‘rta juzdagi aslzodalardan biri bo‘lib, 2-Orenburg kadet korpusini tugatgan hamda Marg‘ilon uyezdi boshqarmasida tarjimon va kotib bo‘lib ishlagan. Onasi – Niyozjon Bibixonim Farg‘ona viloyati Yangi Marg‘ilon uyezdi Avval qishlog‘ida tug‘ilgan o‘zbek ayoli bo‘lib, u erining vafotidan so‘ng o‘qituvchilik qilgan. Yosh Abdurahmonbek tarbiyasida onasining xizmati katta edi. \n" +
            "A.O‘razayev Skobelev gimnaziyasi (1910) va Moskva universitetining yuridik fakultetini (1915) tugatgan. Advokat yordamchisi lavozimida ishlagan. Farg‘ona saylov okrugidan Butunrossiya Ta’sis Majlisi a’zosi (1917) qilib saylandi. Turkiston Muxtoriyati hukumati 1917 yil noyabrda tashkil qilingach, u ichki ishlar vazirining o‘rinbosari hamda Milliy Majlis a’zosi bo‘ldi. So‘ngra ichki ishlar vaziri lavozimida faoliyat ko‘rsatdi. Eserlar partiyasiga xayrixoh bo‘lgan. Muxtoriyat hukumati bolsheviklar tomonidan ag‘darilgach, 1918 yil fevral oyi oxirida A. O‘razayev bolsheviklar qo‘liga tushib qolgan. U 1918 yil may oyida dastlab amnistiya qilindi hamda sovet hokimiyati idoralarida turli lavozimlarda ishladi. A.O‘razayev keyinchalik Sibirga surgun qilindi. U yerda sil kasali bilan qattiq og‘rib qolgach, Toshkentdagi qarindoshlari (singlisi) oilasiga qaytishga ruxsat berildi. U bo‘lg‘usi akademik bo‘lgan kuyovi Qori Niyoziy xonadonida yashadi. Toshkentda bir muddat istiqomat qilgach, taxminan 1937 yilda og‘ir kasallik natijasida vafot etdi.\n" +       "Abdurahmonbek O‘razayevning ikki nafardan akasi va singlisi bo‘lgan. Uning shaxsiy hayoti haqida yetarlicha ma’lumotlar saqlanib qolmagan. A.O‘razayevning singlisi: Oyshaxonim O‘razayeva (1897 yil 2 sentyabr – 1988 yil 31 yanvar) onasi singari sovet maktablarida ishlagan. Turkistonda dastlabki ayol o‘qituvchilardan biri bo‘lgan. U Skobelev (hozirgi Farg‘ona) shahridagi ayollar gimnaziyasini tugatib, Namangandagi rus-tuzem maktabida rus tilidan dars bergan. So‘ngra Skobelevdagi sovet maktabida faoliyat ko‘rsatdi. U keyinchalik mashhur matematik olim bo‘lib yetishgan O‘zbekiston fan arbobi (1939), O‘zbekiston Fanlar akademiyasi akademigi va birinchi prezidenti (1943-1947), fizika-matematika fanlari doktori (1939), professor, Sosialistik Mehnat Qahramoni (1967) bo‘lgan.\n" + 

            "Toshmuhammad Niyozovich Qori-Niyoziy (1897, Xo‘jand – 1970, Toshkent)ga turmushga chiqqan. T.N.Qori-Niyoziy O‘rta Osiyo davlat universitetini tugatgach (1929), shu universitet rektori (1931-1933), O‘zbekiston SSR Maorif xalq komissari va ayni paytda O‘zbekiston XKS huzuridagi Fan qo‘mitasi Prezidiumi raisi (1937-1938), O‘zbekiston SSR XKS raisi o‘rinbosari (1939-1943), SSSR FA  O‘zbekiston filiali Prezidiumi raisi (1940-1943) hamda boshqa mas’ul lavozimlarda faoliyat ko‘rsatdi. Shu narsa xarakterli holki, sovet davrida o‘z tarjimai holini ancha o‘zgartirgan er-xotin Toshmuhammad va Oyshaxonim ikkalasi go‘yoki ham bir kunda, ham bir yilda – 1897 yil 2 sentyabrda biri Xo‘jandda, ikkinchisi Skobelev shahrida tug‘ilganligi to‘g‘risida rasmiy hujjatlarda yozishgan. Qori-Niyoziy sovet rejimi davrida, bir tomondan, O‘zbekistonda sovet madaniyati va ilm-fanini rivojlantirishga katta hissa qo‘shgan bo‘lsa, ikkinchi tomondan, o‘zbek xalqi ma’naviyati va milliy madaniyatga qaqshatqich va ayovsiz zarba bergan." },

        { img: man3, text: "Abdulla Qodiriy", dob: "1894-04-10", about: "A renowned author and thinker who shaped literature." },
        { img: man4, text: "Avaz O‘tar", dob: "1855-07-12", about: "Avaz was an influential figure in the cultural renaissance." },
        { img: man5, text: "Alisher Navoi", dob: "1441-02-09", about: "One of the greatest poets and thinkers of his era." },
        { img: man6, text: "Erkin Vohidov", dob: "1936-12-28", about: "An admired writer and linguist." },
        { img: man7, text: "Zulfiyaxonim", dob: "1915-03-01", about: "A celebrated poetess known for her deep and emotional works." }
    ];

    const [clones, setClones] = useState([]);
    const sliderRef = useRef(null);
    const navigate = useNavigate();

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
    };

    return (
        <div className="w-full p-10 my-5">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-5">
                <h1 className="text-[#021321] text-5xl lg:text-6xl">{heading}</h1>
                <p className="text-right text-2xl text-[#2D2D2D] space-y-2">{subheading}</p>
            </div>

            <div className="relative w-full mt-16">
                {layout === "slider" ? (
                    <div
                        ref={sliderRef}
                        className="flex gap-6 w-full overflow-x-auto whitespace-nowrap no-scrollbar"
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
