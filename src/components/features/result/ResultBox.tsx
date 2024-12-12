import "./ResultBox.scss";
import {ChevronRight} from "dazzle-icons";
import Preview from "./Preview.tsx";
import {ColorPalette} from "../../../util/ColorPalette.ts";
import {FunctionalComponent} from "preact";
import GeneratedCode from "./GeneratedCode.tsx";

interface ResultBoxProps {
    colorPalette: ColorPalette;
}

const ResultBox: FunctionalComponent<ResultBoxProps> = ({ colorPalette }) => {
    return (
        <div className={"resultBox"}>
            <h2>
                <ChevronRight/>
                Preview
            </h2>

            <Preview colorPalette={colorPalette} />

            <h2>
                <ChevronRight/>
                Generated Code
            </h2>

            <GeneratedCode colorPalette={colorPalette} />
        </div>
    );
}

export default ResultBox;