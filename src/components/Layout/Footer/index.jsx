import clsx from "clsx";

import cn from "./style.module.scss";

function Footer() {
  return (
    <footer className={clsx(cn["footer"])}>
      <div className={clsx(cn["firstSec"])}>
        <div className={clsx(cn["logoSec"])}>
          <img src="/src/assets/logo.png" alt="" />
          <p>
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
        </div>
        <div className={clsx(cn["ulSec"])}>
          <ul>
            <li>
              <a href="#">Hukumat a’zolari</a>
            </li>
            <li>
              <a href="#">Vazirlar</a>
            </li>
            <li>
              <a href="#">Milliy majlis a‘zolari</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Manbaalar</a>
            </li>
            <li>
              <a href="#">Adabiyotlar</a>
            </li>
            <li>
              <a href="#">Arxiv hujjatlar</a>
            </li>
            <li>
              <a href="#">Matbuot nashrlari</a>
            </li>
            <li>
              <a href="#">Bibliografiya</a>
            </li>
            <li>
              <a href="#">Maqolalar</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Mediateka</a>
            </li>
            <li>
              <a href="#">Fotogalereya</a>
            </li>
            <li>
              <a href="#">Videogalereya</a>
            </li>
            <li>
              <a href="#">Mobil ilova</a>
            </li>
            <li>
              <a href="#">Bibliografiya</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Biz haqimizda</a>
            </li>
            <li>
              <a href="#">Loyiha ishtirokchilari</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={clsx(cn["secondSec"])} А>
        <p>Barcha huquqlar himoyalangan muxtoriyat.uz 2025</p>
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
