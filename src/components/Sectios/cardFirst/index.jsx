import clsx from "clsx";
import cn from './style.module.scss'

function CardFirst() {
    return (
        <div className={clsx(cn["firstCard"])}>
            <h1 className="font-poppins mt-[36px] text-[#021321] font-semibold text-[40px]">Erk ista, tik tur, uyg‘on <span className="text-[#003561]">Turkiston!</span></h1>
            <p className="font-poppins">"Turkiston muxtoriyati – ajdodlarimizning buyuk orzusi, millatning sha'ni va g‘ururi! Biz ozodlik, adolat va taraqqiyot yo‘lida kurashamiz! Erk va hurriyat sari intilgan xalq hech qachon qul bo‘lmaydi! Yashasin mustaqil va muxtor Turkiston!"</p>
        </div>
    )
}
export default CardFirst;