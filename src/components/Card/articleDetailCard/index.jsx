/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getArticleById, postLike, postView} from "../../../services/source";
import {FaHandsClapping} from "react-icons/fa6";
import {FiEye} from "react-icons/fi";
import {IoShareOutline} from "react-icons/io5";
import userImg from "/src/assets/user.png";
import "quill/dist/quill.snow.css";
import BackButton from "../../BackButton";

function ArticleDetail() {
    const {id: idParam} = useParams();
    // Convert ID to number immediately
    const id = parseInt(idParam, 10);

    const [data, setData] = useState(null);
    const [likedArticles, setLikedArticles] = useState([]);
    const [viewedArticles, setViewedArticles] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    const fetchData = async () => {
        try {
            const result = await getArticleById(idParam);
            setData(result);
        } catch (error) {
            console.error("Error fetching article:", error);
        }
    };

    // Load liked and viewed articles from localStorage on component mount
    useEffect(() => {
        const storedLikedArticles = localStorage.getItem("likedArticles");
        if (storedLikedArticles) {
            setLikedArticles(JSON.parse(storedLikedArticles));
        }

        const storedViewedArticles = localStorage.getItem("viewedArticles");
        if (storedViewedArticles) {
            setViewedArticles(JSON.parse(storedViewedArticles));
        }

        setHasLoaded(true);
    }, []);

    // Check if article has been viewed, if not, record the view
    // Only run this effect when viewedArticles has been loaded from localStorage
    useEffect(() => {
        if (!hasLoaded || !id) return;

        const isAlreadyViewed = viewedArticles.includes(id);

        if (!isAlreadyViewed) {
            // Add to viewed articles list
            const updatedViewedArticles = [...viewedArticles, id];
            setViewedArticles(updatedViewedArticles);
            localStorage.setItem(
                "viewedArticles",
                JSON.stringify(updatedViewedArticles)
            );

            // Send view count to API only when article hasn't been viewed before
            postView(idParam);

            // Refresh data to get updated view count
            fetchData();
        }
    }, [id, viewedArticles, hasLoaded]);

    const isArticleLiked = (articleId) => {
        return likedArticles.includes(articleId);
    };

    const isArticleViewed = (articleId) => {
        return viewedArticles.includes(articleId);
    };

    const handleLike = (articleId) => {
        // Create a copy of the current liked articles array
        let updatedLikedArticles = [...likedArticles];

        // Check if article is already liked
        const articleIndex = updatedLikedArticles.indexOf(articleId);

        if (articleIndex === -1) {
            // Article is not liked, add it to liked articles
            updatedLikedArticles.push(articleId);
            postLike(idParam, true);
        } else {
            // Article is already liked, remove it from liked articles
            updatedLikedArticles.splice(articleIndex, 1);
            postLike(idParam, false);
        }

        // Update state and localStorage
        setLikedArticles(updatedLikedArticles);
        localStorage.setItem("likedArticles", JSON.stringify(updatedLikedArticles));

        // Refresh data to show updated like count
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <>
            {/* go back */}
            <BackButton/>
            {/* content part */}
            <div className="flex flex-col gap-4 w-full md:w-[60%] mx-auto">
                {data && (
                    <div className="" key={data.id}>
                        <br/>
                        <br/>
                        <h1 className="font-bold text-4xl leading-10">{data?.name}</h1>
                        <br/>
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
                        <div
                            className="border-t border-b border-[#F2F2F2] flex items-center justify-between py-4 mb-10 mt-5">
                            <div className="flex items-center gap-4">
                                <button
                                    className={`flex items-center gap-1 cursor-pointer border-0 outline-0 bg-transparent ${
                                        isArticleLiked(id) ? "text-black" : "text-[#919191]"
                                    }`}
                                    onClick={() => handleLike(id)}
                                >
                                    <FaHandsClapping/> {data?.likes}
                                </button>
                                <span
                                    className={`flex items-center gap-1 ${
                                        isArticleViewed(id) ? "text-black" : "text-[#919191]"
                                    }`}
                                >
                  <FiEye/> {data?.views}
                </span>
                            </div>
                            <div className="">
                                <IoShareOutline size={24}/>
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
                                className="font-[Source_Serif_Pro] font-normal text-[#242424] text-[20px] leading-[32px] tracking-[0px]"
                                dangerouslySetInnerHTML={{__html: data?.content}}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ArticleDetail;
