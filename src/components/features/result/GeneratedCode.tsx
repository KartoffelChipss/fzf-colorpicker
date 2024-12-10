import "./GeneratedCode.scss";
import {ColorPalette} from "../../../interfaces/ColorPalette.ts";
import {FunctionalComponent} from "preact";
import { Check, FileCopy } from "dazzle-icons";
import { useState } from "preact/hooks";

interface GeneratedCodeProps {
    colorPalette: ColorPalette;
}

const GeneratedCode: FunctionalComponent<GeneratedCodeProps> = ({ colorPalette }) => {
    const [copied, setCopied] = useState(false);

    const code = `export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'\n --color=fg:${colorPalette.fg},bg:${colorPalette.bg},hl:${colorPalette.hl}\n --color=fg+:${colorPalette.fgPlus},bg+:${colorPalette.bgPlus},hl+:${colorPalette.hlPlus}\n --color=info:${colorPalette.info},prompt:${colorPalette.prompt},pointer:${colorPalette.pointer}\n --color=marker:${colorPalette.marker},spinner:${colorPalette.spinner},header:${colorPalette.header}'`;

    const handleSelectAll = (event: MouseEvent) => {
        const codeElement = event.currentTarget as HTMLElement;
        if (codeElement) {
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(codeElement);
            selection?.removeAllRanges();
            selection?.addRange(range);
        }
    };

    const addCodeToClipboard = () => {
        setCopied(true);
        navigator.clipboard.writeText(code);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <pre className={"generatedCode card"} onClick={handleSelectAll}>
            <button className={"iconOnly"} onClick={addCodeToClipboard}>
                {copied ? <Check /> : <FileCopy />}
            </button>
            <code className="code" id="export-code">
                {code}
            </code>
        </pre>
    )
}

export default GeneratedCode;