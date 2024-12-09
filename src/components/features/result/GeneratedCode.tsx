import "./GeneratedCode.scss";
import {ColorPalette} from "../../../interfaces/ColorPalette.ts";
import {FunctionalComponent} from "preact";

interface GeneratedCodeProps {
    colorPalette: ColorPalette;
}

const GeneratedCode: FunctionalComponent<GeneratedCodeProps> = ({ colorPalette }) => {
    return (
        <pre className={"generatedCode card"}>
            <code className="code" id="export-code">
                export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'<br/> --color=fg:{colorPalette.fg},bg:{colorPalette.bg},hl:{colorPalette.hl}<br/> --color=fg+:{colorPalette.fgPlus},bg+:{colorPalette.bgPlus},hl+:{colorPalette.hlPlus}<br/> --color=info:{colorPalette.info},prompt:{colorPalette.prompt},pointer:{colorPalette.pointer}<br/> --color=marker:{colorPalette.marker},spinner:{colorPalette.spinner},header:{colorPalette.header}'
            </code>
        </pre>
    )
}

export default GeneratedCode;