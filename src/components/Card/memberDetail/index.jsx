import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MemberDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { img, text, dob, about } = location.state || {};

  if (!location.state) {
    navigate("/");
    return null;
  }
  return (
    <>
      <div className="w-full bg-gray-100 rounded-lg  shadow-lg p-6">
        <div className="flex flex-row items-center  gap-6">
          <img
            src={img}
            alt={text}
            className="w-40 h-40  rounded-full object-cover border"
          />

          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold text-[#021321]">{text}</h1>
            <p className="text-lg text-gray-700 mt-2">{dob}</p>
          </div>
        </div>

        <p className="mt-6 text-lg text-gray-600 text-center md:text-left">
          {about.split("\n").map((line, idx) => (
            <p key={idx} className="mb-2">
              {line}
            </p>
          ))}
        </p>
      </div>
    </>
  );
}

export default MemberDetail;
