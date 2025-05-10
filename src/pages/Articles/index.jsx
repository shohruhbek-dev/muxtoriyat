/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getArticles, postLike } from "../../services/source";
import PaginationComponent from "../../components/Pagination";
import { FiSearch, FiEye } from "react-icons/fi";
import { FaHandsClapping } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Articles() {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const [likedArticles, setLikedArticles] = useState([]);
  const [viewedArticles, setViewedArticles] = useState([]);

  async function fetchData(currentPage) {
    const result = await getArticles(`page=${currentPage}&size=${limit}`);
    setData(result.data);
    setPageSize(result.headers["x-total-count"]);
  }

  // Load liked and viewed videos from localStorage on component mount
  useEffect(() => {
    const storedLikedArticles = localStorage.getItem("likedArticles");
    if (storedLikedArticles) {
      setLikedArticles(JSON.parse(storedLikedArticles));
    }

    const storedViewedArticles = localStorage.getItem("viewedArticles");
    if (storedViewedArticles) {
      setViewedArticles(JSON.parse(storedViewedArticles));
    }
  }, []);

  const handleLike = (id) => {
    let updatedLikedArticles = [...likedArticles];

    const articleIndex = updatedLikedArticles.indexOf(id);

    if (articleIndex === -1) {
      updatedLikedArticles.push(id);
      postLike(id, true);
    } else {
      updatedLikedArticles.splice(articleIndex, 1);
      postLike(id, false);
    }

    setLikedArticles(updatedLikedArticles);
    localStorage.setItem("likedArticles", JSON.stringify(updatedLikedArticles));

    fetchData(currentPage);
  };

  const isArticleLiked = (id) => {
    return likedArticles.includes(id);
  };

  const isArticleViewed = (id) => {
    return viewedArticles.includes(id);
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
        Maqolalar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {data?.map((item, i) => (
          <div key={i} className="group relative cursor-pointer">
            <Link to={`${item.id}`}>
              <div className="aspect-video bg-gray-300 rounded-md relative overflow-hidden">
                <img
                  src={`data:${item?.imageContentType};base64,${item?.image}`}
                  alt={`${item?.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2">
                <p className="text-sm font-normal text-[#6B6B6B] mb-1">
                  {item?.name}
                </p>
                <h3 className="text-[17px] text-[#191919]">
                  {item?.description}
                </h3>
                <p className="text-sm font-normal text-[#6B6B6B] mb-1">
                  {item?.title}
                </p>
              </div>
            </Link>
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
                  isArticleLiked(item.id) ? "text-black" : "text-[#919191]"
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
                  isArticleViewed(item.id) ? "text-black" : "text-[#919191]"
                }`}
              >
                <FiEye /> {item?.views}
              </span>
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
    </div>
  );
}

export default Articles;
