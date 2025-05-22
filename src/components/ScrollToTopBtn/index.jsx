// components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showButton ? (
    <button
      onClick={scrollToTop}
      className="cursor-pointer fixed bottom-6 right-6 bg-[#021321] text-white p-3 rounded-full shadow-md hover:bg-[#042d59] transition-all"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  ) : null;
};

export default ScrollToTopButton;
