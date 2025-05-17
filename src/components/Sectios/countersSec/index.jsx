import clsx from "clsx";
import Counter from "../../Card/counter";
import cn from "./style.module.scss";
function CountersSec() {
    return (
        <div className={clsx(cn["bigcounters"])}>
            <div className={clsx(cn["countersText"])}>
                <h1 className="font-poppins font-medium text-[64px] leading-none tracking-normal align-middle">Asosiy ko‘rsatkichlar</h1>

                <p className="font-poppins font-normal text-[22.7px] leading-[36px] tracking-normal align-middle">Bugungi kunda yurtimizda milliy-demokratik davlatchilikni barpo etishda ilk tajriba bo‘lgan Turkiston Muxtoriyati uchun kurash tarixi alohida ahamiyat kasb etadi. Ilmiy jamoatchilik eʼtiborini o‘ziga jalb etgan bu tarix hozirda nafaqat ilmiy, balki amaliy va hatto siyosiy qiziqish uyg‘otdi.</p>
            </div>

            <div className={clsx(cn["counters"])}>
                <Counter start={0} end={54} duration={1.5} text={"Maqolalar"} />
                <Counter start={0} end={47} duration={1.5} text={"Kitoblar"} />
                <Counter start={0} end={16} duration={1.5} text={"Arxiv hujjatlar"} />
                <Counter start={0} end={21} duration={1.5} text={"Avtoreferatlar"} />
            </div>
        </div>
    )
}

export default CountersSec;