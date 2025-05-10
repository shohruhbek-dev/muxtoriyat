/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleById } from "../../../services/source";
import { FaArrowLeftLong, FaHandsClapping } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { IoShareOutline } from "react-icons/io5";
import userImg from '/src/assets/user.png'

function ArticleDetail() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const result = await getArticleById(id);
      setData(result);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };
  const handleBackFunc = () => {
    navigate(-1); // Navigates to the previous page
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(data);
  return (
    <div className="container mx-auto w-[95%]">
      {/* go back */}
      <button
        className="flex gap-2 items-center cursor-pointer mb-5 mt-2"
        onClick={handleBackFunc}
      >
        <FaArrowLeftLong size={20} />
        <span className="text-[18px]">{t("goBack")}</span>
      </button>
      {/* content part */}
      <div className="flex flex-col gap-4 w-full md:w-[80%] mx-auto">
        {data && (
          <div className="" key={data.id}>
            <h1 className="font-bold text-4xl leading-10">{data?.name}</h1>
            <p className="font-normal text-[20px] text-[#6B6B6B] mt-3">
              {data?.description}
            </p>
            <div className="flex gap-4">
              <div className="flex gap-1 items-center">
                <div className="w-[32px] h-[32px] bg-red-500 rounded-full">
                  <img
                    src={data?.authorImg ? data?.authorImg : userImg}
                    alt={data?.createdBy}
                    className="w-full h-full "
                  />
                </div>
                <p className="font-bold text-[16px]">{data?.createdBy}</p>
              </div>
              <span className="flex items-center gap-1 text-[#6B6B6B] text-[16px]">
                {new Date(data?.createdDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="border-t border-b border-[#F2F2F2] flex items-center justify-between py-4 mb-10 mt-5">
              <div className="flex items-center gap-4">
                <button
                  className={`flex items-center gap-1 cursor-pointer border-0 outline-0 bg-transparent`}
                >
                  <FaHandsClapping /> {data?.likes}
                </button>
                <span className={`flex items-center gap-1 `}>
                  <FiEye /> {data?.views}
                </span>
              </div>
              <div className="">
                <IoShareOutline size={24} />
              </div>
            </div>
            <div className="aspect-video bg-gray-300 rounded-md relative overflow-hidden h-[453px] w-full">
              <img
                src={`data:${data?.imageContentType};base64,${data?.image}`}
                alt={`${data?.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-7">
              <div
                className="text-[17px] text-[#191919]"
                dangerouslySetInnerHTML={{ __html: data?.content }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleDetail;
