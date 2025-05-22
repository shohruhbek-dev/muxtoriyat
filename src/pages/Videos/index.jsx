/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FiSearch, FiEye } from "react-icons/fi";
import {
  getCategoriesVideosData,
  postLike,
  postView,
} from "../../services/source";
import { IoCalendarOutline } from "react-icons/io5";
import { FaHandsClapping } from "react-icons/fa6";
import VideoModal from "../../components/VideoModal";
import PaginationComponent from "../../components/Pagination";

export default function Videos() {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [likedVideos, setLikedVideos] = useState([]);
  const [viewedVideos, setViewedVideos] = useState([]);

  async function fetchData(currentPage) {
    const result = await getCategoriesVideosData(
      `categoryId.equals=1002&page=${currentPage}&size=${limit}`
    );
    setData(result.data);
    setData(result.data);
    setPageSize(result.headers["x-total-count"]);
  }

  // Load liked and viewed videos from localStorage on component mount
  useEffect(() => {
    const storedLikedVideos = localStorage.getItem("likedVideos");
    if (storedLikedVideos) {
      setLikedVideos(JSON.parse(storedLikedVideos));
    }

    const storedViewedVideos = localStorage.getItem("viewedVideos");
    if (storedViewedVideos) {
      setViewedVideos(JSON.parse(storedViewedVideos));
    }
  }, []);

  const handleLike = (id) => {
    let updatedLikedVideos = [...likedVideos];

    const videoIndex = updatedLikedVideos.indexOf(id);

    if (videoIndex === -1) {
      updatedLikedVideos.push(id);
      postLike(id, true);
    } else {
      updatedLikedVideos.splice(videoIndex, 1);
      postLike(id, false);
    }

    setLikedVideos(updatedLikedVideos);
    localStorage.setItem("likedVideos", JSON.stringify(updatedLikedVideos));

    fetchData(currentPage);
  };

  const isVideoLiked = (id) => {
    return likedVideos.includes(id);
  };

  const isVideoViewed = (id) => {
    return viewedVideos.includes(id);
  };

  const handleModal = (id) => {
    if (!isVideoViewed(id)) {
      const updatedViewedVideos = [...viewedVideos, id];
      setViewedVideos(updatedViewedVideos);
      localStorage.setItem("viewedVideos", JSON.stringify(updatedViewedVideos));

      postView(id);

      fetchData(currentPage);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, limit]);

  return (
    <div className="container mx-auto w-[95%] sm:w-full lg:w-[95%] flex gap-4 sm:gap-10 flex-col">
      {/* Qidiruv input */}
      <div className="flex items-center rounded-md bg-[#f6f4f4] pl-3 w-full md:w-[30%] my-2 sm:my-5">
        <FiSearch size={24} className="text-gray-500" />
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Qidirish"
          className="inline-block grow py-4 px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
        />
      </div>

      {/* Video ro'yxati */}
      <h1 className="font-bold text-xl sm:text-3xl text-[#021321]">
        Video gallereya
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {data?.map((item, i) => (
          <div key={i} className="group relative cursor-pointer">
            <div
              className="aspect-video bg-gray-300 rounded-md relative overflow-hidden"
              onClick={() => {
                handleModal(item?.id);
                setSelectedUrl(item?.file.url);
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${
                  item?.file.url.split("/embed/")[1]?.split("?")[0]
                }/0.jpg`}
                alt="Video preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 w-[65px] h-[45px] rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 bg-opacity-40 flex items-center justify-center">
                <svg
                  className="w-[50px] h-[30px] text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm font-normal text-[#6B6B6B] mb-1">
                {item?.name}
              </p>
              <h3 className="text-[17px] text-[#191919]">
                {item?.description}
              </h3>
              <div className="flex items-center gap-3 text-sm mt-5 text-gray-500">
                <span className="flex items-center gap-1">
                  <IoCalendarOutline />{" "}
                  {new Date(item?.createdDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <button
                  className={`flex items-center gap-1 cursor-pointer border-0 outline-0 bg-transparent ${
                    isVideoLiked(item.id) ? "text-black" : "text-[#919191]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(item.id);
                  }}
                >
                  <FaHandsClapping /> {item?.likes}
                </button>
                <span
                  className={`flex items-center gap-1 ${
                    isVideoViewed(item.id) ? "text-black" : "text-[#919191]"
                  }`}
                >
                  <FiEye /> {item?.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PaginationComponent
        currentPage={currentPage + 1}
        totalItems={pageSize}
        pageSize={limit}
        onPageChange={(page) => setCurrentPage(page - 1)}
        onPageSizeChange={(size) => setLimit(size)}
      />

      <VideoModal
        url={selectedUrl}
        isOpen={!!selectedUrl}
        onClose={() => setSelectedUrl(null)}
      />
    </div>
  );
}
