import MembersSec from "../../components/Sectios/MembersSec";

function Members() {
    return (
        <div className="">
            <div className="pl-10">

                <h1 className="font-poppins mt-[50px] text-[#021321] font-semibold text-[72px] leading-[100%] tracking-[0%]  align-middle"
                >Muxtoriyat <span className="text-[#003561]">hukumati</span> a’zolari</h1>

                <p className="text-[#021321]  font-poppins font-normal text-[22px] mt-4 pr-[50px]">
                    Turkiston Muxtoriyatining Muvaqqat hukumati tarkibiga muxtoriyatchilik harakatining faol ishtirokchilari kirdi. Quyidagi kishilar hukumat aʼzolari bo‘ldilar:</p>
            </div>
            <MembersSec

                layout="grid"
                headingLayout="column"
            />
        </div>

    );

}

export default Members;