import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Books from "../books";
import BackButton from "../../Button/backButton";

function MemberDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const { img, text, dob, about, books } = location.state || {};

    if (!location.state) {
        navigate("/");
        return null;
    }
    return (
        <>

            <BackButton />
            <div className="memberDetail w-[50%] mt-[20px] m-auto  p-6">
                <div className="flex flex-row items-center mb-4  gap-6">
                    <img
                        src={img}
                        alt={text}
                        className="w-40 h-40  rounded-full object-cover"
                    />

                    <div className="flex flex-col items-start">
                        <h1 className="font-inter text-3xl font-bold text-[#021321]">{text}</h1>
                        <p className="font-inter text-lg text-gray-700 mt-2">{dob}</p>
                    </div>
                </div>

                <p className="font-[Source_Serif_Pro] font-normal text-[#242424] text-[20px] leading-[32px] tracking-[0px]">
                    {about.split('\n').map((line, idx) => (
                        <p key={idx} className="mb-2">{line}</p>
                    ))}
                </p>
                <div>
                    <Books books={books} />
                </div>
            </div>
        </>
    );
}

export default MemberDetail;
