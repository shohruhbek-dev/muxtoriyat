import React from 'react';

import MemberAbout from '../../Card/menberAbout';
import clsx from 'clsx';
import cn from './style.module.scss';
import man1 from '../../../assets/cholpon.png';
import man2 from '../../../assets/abdurashidxon.png';
import man3 from '../../../assets/behbudiy.png';

const membersInfo = [
    {
        img: man1,
        h1: "Abdulhamid cho’lpon ",
        p: `Bilmadim, kimlarning umidi yo’q bo’lur,
So’ng damda yaproqlar qizorib yondilar?
Bilmadim, kimlarning qismati uzulur,
Kuz chog’i... tuproqlar gezarib qoldilar?
`
    },
    {
        h1: "Munavvar qori Abdurashidxonov",
        p: `Bugungacha Ovrupo xalqi osmonga uchar ekan, bizda soch soqol nizolari, ovrupoliklar dengiz ostida suzar ekan,  bizda uzun va qisqa kiyim janjallari, Ovrupo shahrlari butun elektr bilan isitulur va yoritulur ekan, bizda maktablarda jo'g'rofiya va tibbiyot o'qitish, o'qitmaslik ixtiloflari...
        davom etar.`,
        img: man2,
    },
    {
        img: man3,
        h1: "Mahmudxo’ja Behbudiy",
        p: `O’rtadan nifoqni ko‘taringiz! Turkiston bolalarini ilmsiz qo‘ymangizlar! Hammaga ozodlik yo‘lini ko‘rsatingizlar! Ozodlikni tezlik ila yuzaga chiqaringizlar! Bizlar ul choqda qabrimizda tinch yoturmiz!`,

    },
];

const MemberAboutSection = () => {
    return (

        <div className={clsx(cn["MemberAboutSectionFull"])}>


            <div className={clsx(cn["MemberAboutSection1"])}>

                <div className={clsx(cn["rightleftSec"])}>
                    <i className="fa-solid fa-angle-left"></i>
                    <i className="fa-solid fa-angle-right"></i>
                </div>

                <div className={clsx(cn["MemberAboutSection"])}>
                    {membersInfo.map((member, index) => (
                        <div key={index} className={clsx(cn["MemberAbout"])}>
                            {Object.keys(member).map((key) => {
                                switch (key) {
                                    case 'img':
                                        return <img key={key} src={member[key]} alt="Member" />;
                                    case 'h1':
                                        return <h1 key={key}>{member[key]}</h1>;
                                    case 'p':
                                        return <p key={key}>{member[key]}</p>;
                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    ))}
                </div>

                <div className={clsx(cn["textSect"])}>
                    <h1>
                        Xalq dengizdir, <span>Xalq kuchdir</span>
                    </h1>
                </div>
            </div>


        </div>
    );
};
export default MemberAboutSection;