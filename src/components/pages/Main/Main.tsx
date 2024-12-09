import Header from "../../layout/Header.tsx";
import EditBox from "../../features/edit/EditBox.tsx";
import ResultBox from "../../features/result/ResultBox.tsx";
import "./Main.scss";
import {ColorPalette} from "../../../interfaces/ColorPalette.ts";
import {useState} from "preact/hooks";

const Main = () => {
    const [colorPalette, setColorPalette] = useState<ColorPalette>({
        fg: "#d0d0d0",
        fgPlus: "#d0d0d0",
        bg: "#121212",
        bgPlus: "#262626",
        hl: "#5f87af",
        hlPlus: "#5fd7ff",
        info: "#afaf87",
        marker: "#87ff00",
        prompt: "#d7005f",
        spinner: "#af5fff",
        pointer: "#af5fff",
        header: "#87afaf",
    });

    return (
        <>
            <Header />
            <main className={"main"}>
                <EditBox />
                <ResultBox colorPalette={colorPalette} />
            </main>
        </>
    )
}

export default Main