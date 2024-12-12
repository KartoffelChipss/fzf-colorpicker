import "./ResultBox.scss";
import {ChevronRight, CircleQuestion} from "dazzle-icons";
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

            <div className="questionBox">
                <CircleQuestion />
                To apply the generated color scheme, you can either copy the generated code into your terminal or add it to the top of your .zshrc file to make the changes permanent.
            </div>
        </div>
    );
}

export default ResultBox;