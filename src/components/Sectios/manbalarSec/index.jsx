import clsx from "clsx";
import cn from './style.module.scss'

function ManbaalarSec() {
    return (
        <div className={clsx(cn["manbaalar"])}>
            <h1>Turkiston Muxtoriyati haqida manbaalar</h1>
            <div className={clsx(cn["manbaalarText"])}>
                <p>Bugungi kunda yurtimizda milliy-demokratik davlatchilikni barpo etishda ilk tajriba bo‘lgan Turkiston Muxtoriyati uchun kurash tarixi alohida ahamiyat kasb etadi. Ilmiy jamoatchilik eʼtiborini o‘ziga jalb etgan bu tarix hozirda nafaqat ilmiy, balki amaliy va hatto siyosiy qiziqish uyg‘otdi.</p>
                <a href="#">
                    Ko‘proq o‘qish
                </a>
            </div>
        </div>
    )
}
export default ManbaalarSec;