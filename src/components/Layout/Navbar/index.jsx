import clsx from "clsx";
import cn from "./style.module.scss";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header className={clsx(cn["header"])}>

            <Link to={"/"}>
                <img src="/src/assets/logo.png" alt="" /></Link>

            <ul>
                <Link to={"/"}>

                    Asosiy
                </Link>
                {/* <li><a href="#">Asosiy</a></li> */}
                <Link to={"/history"}>

                    Muxtoriyat tarixi
                </Link>
                {/* <li><a href="#">Muxtoriyat tarixi</a></li> */}
                <li><a href="#">Hukumat a’zolari</a></li>
                <li><a href="#">Manbalar</a></li>
                <li><a href="#">Media</a></li>
                <Link to={"/write"}>
                Maqola нozish
                </Link>
                <li><a href="#">Maqola yozish</a></li>
            </ul>
            <div className={clsx(cn['lan'])}>
                <ul>
                    <li>Uz</li>
                    <li><i class="fa-solid fa-user"></i>Kirish</li>
                </ul>
            </div>

        </header>
    );
}

export default Nav;
