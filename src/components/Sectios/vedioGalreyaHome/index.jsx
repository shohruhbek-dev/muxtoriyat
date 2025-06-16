import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ThreeVideoPreview({ videos = [], onClickVideo }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (videos.length > 0) {
      setActiveVideo(videos[0]);
    }
  }, [videos]);

  return (
    <div className="bg-[#0D2847] p-10  w-full  flex flex-col md:flex-row gap-6">
      {/* Left: video list */}
      <div className="w-full md:w-2/5">
        <h2 className="text-white text-xl  mb-6 font-poppins font-medium text-[48px] ">Videogaleriya</h2>
        <div className="h-[75%] flex flex-col  justify-between gap-4">
          <ul className="space-y-6 pr-3">
            {videos.slice(0, 3).map((video, idx) => {
              const isActive = activeVideo?.id === video.id;
              return (
                <li
                  key={idx}
                  onClick={() => {
                    setActiveVideo(video);
                    onClickVideo?.(video);
                  }}
                  className={`cursor-pointer flex   gap-2 ${isActive ? "text-[#00B1EB] font-semibold" : "text-white"
                    } hover:text-[#00B1EB] transition`}
                >
                  <i class="fa-solid fa-circle-play pt-2"></i> <span className="text-xl ">{video.name}</span>
                </li>
              );
            })}
          </ul>

          {/* All videos button */}
          <div className="mt-6">
            <button
              onClick={() => navigate("/videos")} // ✅ lowercase navigate
              className="text-sm font-medium bg-[#1E4F68] text-white border border-none px-11 py-3 rounded-tr-[24px]

   hover:bg-white hover:text-[#0D2847] transition"
            >
              Barcha videolar →
            </button>
          </div>
        </div>
      </div>

      {/* Right: Active video */}
      <div className="w-full  md:w-3/5">
        {activeVideo && (
          <div className="w-full aspect-video rounded overflow-hidden">
            <iframe
              src={activeVideo.file.url}
              title={activeVideo.name}
              className="w-full h-full rounded"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
