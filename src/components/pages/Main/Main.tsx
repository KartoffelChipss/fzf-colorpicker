import Header from "../../layout/Header.tsx";
import EditBox from "../../features/edit/EditBox.tsx";
import ResultBox from "../../features/result/ResultBox.tsx";
import "./Main.scss";
import {ColorPalette, defaultColorPalette} from "../../../interfaces/ColorPalette.ts";
import {useState} from "preact/hooks";

const Main = () => {
    const [colorPalette, setColorPalette] = useState<ColorPalette>(defaultColorPalette);

    return (
        <>
            <Header />
            <main className={"main"}>
                <EditBox onChange={setColorPalette} />
                <ResultBox colorPalette={colorPalette} />
            </main>
        </>
    )
}

export default Main;