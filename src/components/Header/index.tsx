import { SHeader, SNavBar } from "./styles";
import Logo from "../../assets/logo.png"
export function Header(){
    return (
        <SHeader>
            <picture>
                <img src={Logo} alt="Logo" />            
            </picture>
            <SNavBar>
                <input id="menu-toggle" type="checkbox" />
                <label htmlFor = "menu-toggle">
                    <div className="menu-hamburger">
                        <span className="hamburger"/>
                    </div>
                </label>
                <ul>
                    <li>
                        <a href="/">Página Inicial</a>
                    </li>
                    <li>
                        <a href="/lista">Lista</a>
                    </li>
                </ul>
            </SNavBar>
        </SHeader>
    )
}