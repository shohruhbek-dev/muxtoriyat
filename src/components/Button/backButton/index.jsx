import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Font Awesome icon from react-icons

function BackButton() {
    const handleBack = () => {
        window.history.back();
    };

    return (
      <div className='border-b-[3px] border-[#F2F2F2]'>
          <button
            onClick={handleBack}
            className=" w-full font-inter font-normal text-base leading-5 tracking-normal text-left  text-[#021321] py-6 px-[10%] flex items-center"
        >
            <FaArrowLeft className="mr-[10px]" aria-hidden="true" />
            Ortga qaytish
        </button>
      </div>
    );
}

export default BackButton;
