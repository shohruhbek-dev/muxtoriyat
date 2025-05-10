import clsx from "clsx"
import cn from "./style.module.scss"
import pic1 from '/src/assets/all1.png'

function CardBigPic() {
    return (
      <div className={clsx(cn["CardBigPic"])}>
        <img src={pic1} alt="Image1" />
        <button>
          <a href="#">
            <i className="fa-solid fa-circle-play"></i>Videoni ko‘rish uchun
            bosing
          </a>
        </button>
      </div>
    );

}

export default CardBigPic
