import Header from "../../layout/Header.tsx";
import EditBox from "../../features/edit/EditBox.tsx";
import ResultBox from "../../features/result/ResultBox.tsx";
import "./Main.scss";
import {ColorPalette, extractColorPaletteFromUrl} from "../../../interfaces/ColorPalette.ts";
import {useEffect, useState} from "preact/hooks";

const Main = () => {
    const query = window.location.search;
    const [colorPalette, setColorPalette] = useState<ColorPalette>(
        extractColorPaletteFromUrl(query)
    );

    useEffect(() => {
        const params = new URLSearchParams(colorPalette as any);
        window.history.replaceState(null, "", `?${params.toString()}`);
    }, [colorPalette]);

    return (
        <>
            <Header />
            <main className={"main"}>
                <EditBox onChange={setColorPalette} defaultColorPalette={colorPalette} />
                <ResultBox colorPalette={colorPalette} />
            </main>
        </>
    )
}

export default Main;