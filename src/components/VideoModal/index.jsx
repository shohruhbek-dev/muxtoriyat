import { useEffect } from "react";

export default function VideoModal({ url, isOpen, onClose }) {
    useEffect(() => {
      const handleEscKey = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleEscKey);

      return () => {
        document.removeEventListener("keydown", handleEscKey);
      };
    }, [onClose]);
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#000000c3]  z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl bg-white rounded-md overflow-hidden shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold z-10 cursor-pointer"
        >
          &times;
        </button>
        <div className="w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="object-cover"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
