function ManPicCard({ img, text }) {
    return (
      <div className=" flex flex-col gap-[25px] text-[#021321] text-[22px] items-center">
        <div className="w-full">
          <img
            src={img}
            alt={text}
            className="w-full object-cover rounded-t-[215px]"
          />
        </div>
        <p className="font-poppins font-medium text-[21.3px] leading-[33.33px] tracking-normal align-middle">
          {text}
        </p>
      </div>
    );
}

export default ManPicCard;
