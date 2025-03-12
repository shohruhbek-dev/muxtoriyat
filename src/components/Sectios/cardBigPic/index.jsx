import clsx from "clsx"
import cn from "./style.module.scss"

function CardBigPic() {
    return (

        <div className={clsx(cn["CardBigPic"])}>
            <img src="/src/assets/all1.png" alt="" />
            <button><a href="#"><i class="fa-solid fa-circle-play"></i>Videoni ko‘rish uchun bosing</a></button>
        </div>
    )

}

export default CardBigPic

