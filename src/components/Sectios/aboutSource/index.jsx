
import { useNavigate } from "react-router-dom";

function AboutDetail() {
    const navigate = useNavigate();

    return (
        <div className="aboutDetail w-full flex flex-row gap-4 my-8    p-10">
            <h1 class="font-poppins font-medium text-[50px] md:1/5 leading-[100%] tracking-[0%] align-middle"
            >Turkiston Muxtoriyati haqida manbaalar</h1>
            <div className="w-full md:w-4/5 flex flex-col justify-center items-start">
                <p>Bugungi kunda yurtimizda milliy-demokratik davlatchilikni barpo etishda ilk tajriba bo‘lgan Turkiston Muxtoriyati uchun kurash tarixi alohida ahamiyat kasb etadi. Ilmiy jamoatchilik eʼtiborini o‘ziga jalb etgan bu tarix hozirda nafaqat ilmiy, balki amaliy va hatto siyosiy qiziqish uyg‘otdi.</p>
                <div className="mt-6">
                    <button
                        onClick={() => navigate("/sources")}
                        className="text-sm font-medium bg-[#021321] text-white border border-none px-11 py-3 rounded-tr-[24px]"
                    >
                        Ko‘proq o‘qish →
                    </button>
                </div>     </div>
        </div>
    );
}

export default AboutDetail;
