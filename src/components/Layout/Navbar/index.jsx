import clsx from "clsx";
import cn from "./style.module.scss";
import { Link } from "react-router-dom";
import LanguageSelector from "../../Card/languageSelecter";
import logo from '/src/assets/logo.png';
function Nav() {
    return (
        <header className={clsx(cn["header"])}>

            <Link to={"/"}>
                <img src={logo} alt="" /></Link>

            <ul>
                <Link className="font-poppins font-medium text-base leading-[26.67px] tracking-normal align-middle uppercase" to={"/"}>

                    Asosiy
                </Link>
                <Link className="font-poppins font-medium text-base leading-[26.67px] tracking-normal align-middle uppercase" to={"/history"}>

                    Muxtoriyat tarixi
                </Link>
                <Link className="font-poppins font-medium text-base leading-[26.67px] tracking-normal align-middle uppercase" to={"/article"}>Maqolalar</Link>
                <Link className="font-poppins font-medium text-base leading-[26.67px] tracking-normal align-middle uppercase" to={'/members'}>Hukumat a’zolari</Link>
                <li><a className="font-poppins font-medium text-base leading-[26.67px] tracking-normal align-middle uppercase" href="#">Manbalar</a></li>
                <li><a className="font-poppins font-medium text-base leading-[26.67px] tracking-normal align-middle uppercase" href="#">Media</a></li>
                <Link className="font-poppins font-medium text-base leading-[26.67px] tracking-normal align-middle uppercase" to={"/write"}>
                    Maqola yozish
                </Link>
                <div className='ml-[20px]'>
                    <ul>
                        <li><LanguageSelector /></li>
                        <li><i className="font-poppins font-medium text-base leading-[26.67px] tracking-normal align-middle uppercase" class="mr-2 fa-solid fa-user"></i>Kirish</li>
                    </ul>
                </div>
            </ul>

        </header>
    );
}

export default Nav;
