import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import engFlag from "../../../assets/engflag.png";
import uzFlag from "../../../assets/uzflag.png";
import ruFlag from "../../../assets/ruflag.png";

const languages = [
  { code: "en", label: "English", flag: engFlag },
  { code: "uz", label: "O‘zbek", flag: uzFlag },
  { code: "ru", label: "Русский", flag: ruFlag },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-12 h-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-8 h-8 rounded-md cursor-pointer"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.code}
          className="w-12 h-6 object-cover"
          loading="lazy"
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-[#0F0F0F] rounded-xl shadow-lg left-1/4 transform -translate-x-1/2 min-w-[120px] py-1 ">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#FF6600] text-white rounded-[8px] transition-colors duration-200 cursor-pointer"
            >
              <img
                loading="lazy"
                src={lang.flag}
                alt={lang.code}
                className="w-8 h-6 object-cover"
              />
              <span className="text-sm">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;