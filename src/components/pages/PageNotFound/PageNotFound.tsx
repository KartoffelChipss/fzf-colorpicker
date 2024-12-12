import { HouseChimneyBlank } from "dazzle-icons";
import Header from "../../layout/Header";
import "./PageNotFound.scss";
import { Link } from "wouter";

const PageNotFound = () => {
    return (
        <>
            <Header />
            <main className={"pageNotFound"}>
                <img src={"/fzf-cat.png"} className={"cat"} />
                <h2>Page Not Found</h2>
                <Link
                    className={"button"}
                    href={"/"}
                >
                    <HouseChimneyBlank />
                    Home
                </Link>
            </main>
        </>
    )
}

export default PageNotFound;