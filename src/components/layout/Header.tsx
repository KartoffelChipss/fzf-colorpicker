import {Link} from "wouter";
import GitHub from "../common/icons/GitHub.tsx";
import Discord from "../common/icons/Discord.tsx";
import "./Header.scss";

const Header = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1>fzf Color Picker</h1>
            </Link>

            <div class="links">
                <a
                    href={"https://github.com/Kartoffelchipss/fzf-colorpicker"}
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                >
                    <GitHub />
                    GitHub
                </a>
                <a
                    href={"https://strassburger.org/discord"}
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                >
                    <Discord />
                    Discord
                </a>
            </div>
        </header>
    );
}

export default Header;