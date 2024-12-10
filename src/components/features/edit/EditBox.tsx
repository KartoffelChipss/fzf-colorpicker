import { useState } from "preact/hooks";
import { ColorPalette, defaultColorPalette } from "../../../interfaces/ColorPalette";
import ColorPicker from "../../common/ColorPicker/ColorPicker";
import "./EditBox.scss";
import {ChevronRight} from "dazzle-icons/src";
import { FunctionalComponent } from "preact";

interface EditBoxProps {
    onChange?: (newColorPalette: ColorPalette) => void;
}

const EditBox: FunctionalComponent<EditBoxProps> = ({ onChange }) => {
    const [colorPalette, setColorPalette] = useState<ColorPalette>(defaultColorPalette);

    const updateColorPalette = (key: keyof ColorPalette, value: string) => {
        const newColorPalette = { ...colorPalette, [key]: value };
        setColorPalette(newColorPalette);
        if (onChange) onChange(newColorPalette);
    };

    return (
        <div class={"editBox"}>
            <h2>
                <ChevronRight />
                Colors
            </h2>

            <div className="pickers">
                {Object.entries(colorPalette).map(([key, value]) => (
                    <ColorPicker
                        key={key}
                        label={key}
                        defaultColor={value}
                        onChange={(newColor) => updateColorPalette(key as keyof ColorPalette, newColor)}
                        resetButton={key === "fg" || key === "bg"}
                    />
                ))}
            </div>
        </div>
    )
}

export default EditBox;