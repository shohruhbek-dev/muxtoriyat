import clsx from "clsx";
import cn from "./style.module.scss";
import { Link } from "react-router-dom";
import LanguageSelector from "../../Card/languageSelecter";
import MediaComponent from "../../MediaComponent";

function Nav() {
    return (
      <header className={clsx(cn["header"])}>
        <Link to={"/"}>
          <img src="/src/assets/logo.png" alt="" />
        </Link>

        <ul>
          <Link to={"/"}>Asosiy</Link>
          <Link to={"/history"}>Muxtoriyat tarixi</Link>
          <Link to={"/article"}>Maqolalar</Link>
          <Link to={"/members"}>Hukumat a’zolari</Link>
          <li>
            <a href="#">Manbalar</a>
          </li>
          <MediaComponent />
          <Link to={"/write"}>Maqola yozish</Link>
          <div className={clsx(cn["lan"])}>
            <ul>
              <li>
                <LanguageSelector />
              </li>
              <li>
                <i className="fa-solid fa-user"></i>Kirish
              </li>
            </ul>
          </div>
        </ul>
      </header>
    );
}

export default Nav;
