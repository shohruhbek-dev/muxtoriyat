import clsx from "clsx";
import cn from "./style.module.scss";

function SecondTextCard() {
    return (
        <div className={clsx(cn["SecondTextCard"])}>
            <h3 class="font-[Poppins] font-medium text-[100px]"  >Yashasun</h3>
            <h3 class="font-[Poppins] font-medium text-[100px] ">Turkiston Muxtoriyati.</h3>
            <p class="font-[Poppins] font-light text-[32px] text-[#021321]">
                Turkiston musulmonlarining to‘rtinchi favqulodda qurultoyi Turkiston o‘lkasida bo‘lg‘an xalqlarning xohishlari bo‘yicha Rusiya inqilobi tarafidan berilgan asoslarga binoan Fidiratsiya asosiga qurulg‘an Rusiya Jumhuriyati ila birgalikda qolg‘ani holda Turkistonni yerlik muxtoriyati, ya’ni <span class="font-[Poppins] font-light text-[32px] text-[#021321]">"территорриальный автономиялик"</span> e’lon qiladur.
            </p>
            <p class="font-[Poppins] font-light text-[32px]">
                Bu muxtoriyatning ne suratda vujudga qo‘yilmog‘ini yaqin orada yig‘iladurg‘on Umumturkiston xalqining <span class="font-[Poppins] font-light text-[32px] text-[#021321]">"Учредительний Собрания"</span>si ("Turkiston Majlisi Muassasasi")ga topshiradur. Shuning ila barobar Turkiston o‘lkasida aqalliyat tashkil qilg‘an millatlarning huquqlarining har jihatidan saqlanilmog‘ini ham tantanali suratda bayon etadur!
            </p>
            <i class="font-[Poppins] font-semibold ">“Shahri Ho’qand”</i>
            <i class="font-[Poppins] font-semibold ">Hijriy 1336 sana 25 Safari oxir / Milodiy 1917 yil 27 noyabr</i>
        </div>
    );
}
export default SecondTextCard;