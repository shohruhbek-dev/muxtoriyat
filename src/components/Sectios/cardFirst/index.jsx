import clsx from "clsx";
import cn from './style.module.scss'

function CardFirst() {
    return (
        <div className={clsx(cn["firstCard"])}>
            <h1>Erk ista, tik tur, uyg‘on Turkiston!</h1>
            <p>"Turkiston muxtoriyati – ajdodlarimizning buyuk orzusi, millatning sha'ni va g‘ururi! Biz ozodlik, adolat va taraqqiyot yo‘lida kurashamiz! Erk va hurriyat sari intilgan xalq hech qachon qul bo‘lmaydi! Yashasin mustaqil va muxtor Turkiston!"</p>
        </div>
    )
}
export default CardFirst;