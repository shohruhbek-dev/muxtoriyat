import clsx from "clsx";

import cn from "./style.module.scss";

function Footer() {
  return (
    <footer className={clsx(cn["footer"])}>
      <div className={clsx(cn["firstSec"])}>
        <div className={clsx(cn["logoSec"])}>
          <img src="/src/assets/logo.png" alt="" />
          <p className="font-poppins font-normal text-[16px] leading-[37.33px] tracking-normal">A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
        </div>
        <div  className={clsx(cn["ulSec"])}>
          <ul>
            <li><a className="font-poppins font-medium text-[18px] leading-[42.67px] tracking-normal text-center" href="#">Hukumat a’zolari</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Vazirlar</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Milliy majlis a‘zolari</a></li>

          </ul>
          <ul>
            <li><a className="font-poppins font-medium text-[18px] leading-[42.67px] tracking-normal text-center" href="#">Manbaalar</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Adabiyotlar</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Arxiv hujjatlar</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Matbuot nashrlari</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Bibliografiya</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Maqolalar</a></li>

          </ul><ul>
            <li><a className="font-poppins font-medium text-[18px] leading-[42.67px] tracking-normal text-center" href="#">Mediateka</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Fotogalereya</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Videogalereya</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Mobil ilova</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Bibliografiya</a></li>

          </ul><ul>
            <li><a className="font-poppins font-medium text-[18px] leading-[42.67px] tracking-normal text-center" href="#">Biz haqimizda</a></li>
            <li><a className="font-poppins font-normal text-[16px] leading-[40px] tracking-normal" href="#">Loyiha ishtirokchilari</a></li>

          </ul>
        </div>
      </div>
      <div  className={clsx(cn["secondSec"])}А>
        <p className="font-poppins font-normal text-[16px] leading-[37.33px] tracking-normal"> Barcha huquqlar himoyalangan muxtoriyat.uz 2025</p>
        <ul>
          <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
