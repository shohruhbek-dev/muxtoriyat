import clsx from "clsx";

import cn from "./style.module.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={clsx(cn["footer"])}>
      <div className={clsx(cn["firstSec"])}>
        <div className={clsx(cn["logoSec"])}>
          <img src="/src/assets/logo.png" alt="" />
          <p>{t("footer.text1")}</p>
        </div>
        <div className={clsx(cn["ulSec"])}>
          <ul>
            <li>
              <a href="#">{t("govermentMembers")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text2")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text3")}</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">{t("sources")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text4")}</a>
            </li>
            <li>
              <a href="#">{t("historyDoc")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text5")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text6")}</a>
            </li>
            <li>
              <a href="#">{t("articles")}</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">{t("footer.text13")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text7")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text8")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text9")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text6")}</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">{t("footer.text10")}</a>
            </li>
            <li>
              <a href="#">{t("footer.text11")}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={clsx(cn["secondSec"])} А>
        <p>{t("footer.text12")} muxtoriyat.uz 2025</p>
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
