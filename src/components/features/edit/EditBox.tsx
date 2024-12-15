import { useState } from "preact/hooks";
import { ColorPalette, importColorPalette } from "../../../util/ColorPalette";
import ColorPicker from "../../common/ColorPicker/ColorPicker";
import "./EditBox.scss";
import {ArrowDownToBracket, ArrowUpFromBracket, Check, ChevronRight, FileCopy} from "dazzle-icons/src";
import { FunctionalComponent } from "preact";
import Modal from "../../common/Modal/Modal";
import Reddit from "../../common/icons/Reddit";
import XformerlyTwitter from "../../common/icons/Twitter";
import WhatsApp from "../../common/icons/WhatsApp";

interface EditBoxProps {
    defaultColorPalette: ColorPalette;
    onChange?: (newColorPalette: ColorPalette) => void;
}

const EditBox: FunctionalComponent<EditBoxProps> = ({ onChange, defaultColorPalette }) => {
    const [colorPalette, setColorPalette] = useState<ColorPalette>(defaultColorPalette);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);
    const [importValue, setImportValue] = useState("");

    const constructLink = (colorPalette: ColorPalette) => {
        const params = new URLSearchParams(colorPalette as any);
        const baseUrl = `${window.location.protocol}//${window.location.host}`;
        return `${baseUrl}/?${params.toString()}`;
    }

    const updateColorPalette = (key: keyof ColorPalette, value: string) => {
        const newColorPalette = { ...colorPalette, [key]: value };
        setColorPalette(newColorPalette);
        if (onChange) onChange(newColorPalette);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(constructLink(colorPalette));
        setLinkCopied(true);

        setTimeout(() => {
            setLinkCopied(false);
        }, 2000);
    }

    const handlePaletteImport = (variable: string) => {
        const newColorPalette: ColorPalette = importColorPalette(variable);
        window.location.href = `/?${new URLSearchParams(newColorPalette as any).toString()}`;
    }

    return (
        <>
            <div class={"editBox"}>
                <h2>
                    <ChevronRight />
                    Colors
                </h2>

                <div className="pickers">
                    {Object.entries(colorPalette).map(([key, value]) => (
                        <ColorPicker
                            key={`${key}`}
                            label={key}
                            defaultColor={value}
                            onChange={(newColor) => updateColorPalette(key as keyof ColorPalette, newColor)}
                            resetButton={key === "fg" || key === "bg"}
                        />
                    ))}
                </div>

                <div className="btns">
                    <button
                        onClick={() => setIsImportModalOpen(true)}
                    >
                        <ArrowDownToBracket />
                        Import
                    </button>
                    <button
                        className={"magenta"}
                        onClick={() => setIsShareModalOpen(true)}
                    >
                        <ArrowUpFromBracket />
                        Share
                    </button>
                </div>
            </div>

            <Modal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                className={"shareModal"}
                closeBtn={true}
            >
                <h2>Share your color palette</h2>
                <button 
                    className={"button shareBox"}
                    onClick={copyLink}
                >
                    <div className="iconBox">
                        {linkCopied ? <Check /> : <FileCopy />}
                    </div>
                    <span>Copy Link to clipboard</span>
                </button>
                <a 
                    href={`https://www.reddit.com/submit?url=${encodeURIComponent(constructLink(colorPalette))}&title=Create%20and%20Share%20Color%20Palettes%20for%20fzf%20Easily!`}
                    className={"button shareBox"}
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                >
                    <Reddit />
                    <span>Share on Reddit</span>
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(constructLink(colorPalette))}&text=Create%20and%20Share%20Color%20Palettes%20for%20fzf%20Easily!`} 
                    className={"button shareBox"}
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                >
                    <XformerlyTwitter />
                    <span>Share on X</span>
                </a>
                <a
                    href={`https://wa.me/?text=Check%20out%20this%20website%20that%20lets%20you%20create%20and%20share%20custom%20color%20palettes%20for%20fzf!%20${encodeURIComponent(constructLink(colorPalette))}`}
                    className={"button shareBox"}
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                >
                    <WhatsApp />
                    <span>Share on WhatsApp</span>
                </a>
            </Modal>

            <Modal
                isOpen={isImportModalOpen}
                onClose={() => setIsImportModalOpen(false)}
                className={"importModal"}
                closeBtn={true}
            >
                <h2>Import a color palette</h2>
                <p>Import a color palette from the FZF_DEFAULT_OPTS environment variable.</p>
                <textarea
                    placeholder={"export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'\n --color=fg:#d0d0d0,bg:#121212,hl:#5f87af\n --color=fg+:#d0d0d0,bg+:#262626,hl+:#5fd7ff\n --color=info:#afaf87,prompt:#d7005f,pointer:#af5fff\n --color=marker:#87ff00,spinner:#af5fff,header:#87afaf'"}
                    onInput={(e) => setImportValue((e.target as HTMLTextAreaElement).value)}
                    value={importValue}
                />
                <div className="btns">
                    <button onClick={() => setIsImportModalOpen(false)}>
                        Cancel
                    </button>
                    <button className={"magenta"} onClick={() => handlePaletteImport(importValue)}>
                        <ArrowDownToBracket />
                        Import
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default EditBox;