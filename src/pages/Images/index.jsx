import React, { useEffect, useState } from "react";
import { getCategoriesImagesData } from "../../services/source";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import ImageLoader from "../../components/Spinner/ImageLoader";
import { EmptyComponent } from "../../components/EmptyData";

const Images = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const result = await getCategoriesImagesData(`categoryId.equals=1003`);
    setData(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto w-full lg:w-[95%] flex gap-10 flex-col">
      <div className="flex items-center rounded-md bg-[#f6f4f4] pl-3 w-[30%] my-5">
        <FiSearch size={24} className="text-gray-500" />
        <input
          id="search"
          name="search"
          type="text"
          placeholder={t("Search")}
          className="inline-block grow py-4 px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
        />
      </div>

      <h1 className="font-bold text-3xl text-[#021321]"> {t("Images")} </h1>
      {loading && <ImageLoader />}
      {!data.length > 0 && !loading && <EmptyComponent />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {data.length > 0 &&
          data.map((item, i) => (
            <div
              key={i}
              className="group relative cursor-pointer"
              onClick={() => openModal(i)}
            >
              <div className="aspect-video bg-gray-300 rounded-md overflow-hidden">
                <img
                  src={item?.file.url}
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#000000e7] bg-opacity-80 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            onClick={closeModal}
          >
            <IoMdClose />
          </button>

          <button
            className="absolute left-5 text-white text-4xl cursor-pointer"
            onClick={(e) => {
              showPrev();
              e.stopPropagation();
            }}
          >
            <IoIosArrowBack />
          </button>

          <div className="max-w-4xl w-full px-4">
            <img
              src={data[currentIndex]?.file.url}
              alt={data[currentIndex]?.name}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
            <div className="text-white mt-4 text-center">
              <h2 className="text-xl font-bold">{data[currentIndex]?.name}</h2>
              <p>{data[currentIndex]?.description}</p>
            </div>
          </div>

          <button
            className="absolute right-5 text-white text-4xl cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}
    </div>
  );
};

export default Images;
