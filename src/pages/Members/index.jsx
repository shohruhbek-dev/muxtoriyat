import MembersSec from "../../components/Sectios/MembersSec";

function Members() {
    return (
        <div className="Memmbers">
            <div className="pl-10">

                <h1 className="font-inter mt-[56px] text-[#021321] font-semibold text-[64px] leading-[100%] tracking-[0%]  align-middle"
                >Muxtoriyat hukumati a’zolari</h1>

                <p className="text-[#242424]  font-poppins font-normal text-[22px] mt-6 pr-[50px]">
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