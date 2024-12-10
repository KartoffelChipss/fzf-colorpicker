import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import "./ColorPicker.scss";
import { HexColorPicker } from "react-colorful";
import { useDebouncyEffect } from "use-debouncy";
import { Xmark } from "dazzle-icons";

interface ColorPickerProps {
    label?: string;
    defaultColor?: string;
    onChange?: (newColor: string) => void;
    resetButton?: boolean;
}

const ColorPicker: FunctionalComponent<ColorPickerProps> = ({ label, defaultColor, onChange, resetButton }) => {
    const [color, setColor] = useState(defaultColor || "#000000");
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const formatColor = (color: string): string | null => {
        if (!color.startsWith("#")) color = "#" + color;
        if (color.match(/^#[0-9a-fA-F]{6}$/)) return color;
        if (color.match(/^#[0-9a-fA-F]{3}$/)) return color;
        return null;
    };

    const handleColorInput = (e: Event) => {
        const inputColor = (e.target as HTMLInputElement).value;
        const formattedColor = formatColor(inputColor);
        if (formattedColor) setColor(formattedColor);
    };

    useDebouncyEffect(() => {
        if (onChange) onChange(color);
    }, 1, [color]);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e: FocusEvent) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
            setIsFocused(false);
        }
    };

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (isFocused && !containerRef.current?.contains(e.target as Node)) {
                setIsFocused(false);
            }
        };

        window.addEventListener("mousedown", handleOutsideClick);
        return () => {
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isFocused]);

    return (
        <label className="colorPicker">
            {label && <span className="label">{label}</span>}
            <div className="picker">
                <div 
                    className="swatch" 
                    style={{ backgroundColor: color !== "-1" ? color : "transparent" }}
                    onClick={() => inputRef.current?.focus()}
                />
                <input
                    ref={inputRef}
                    type="text"
                    value={color === "-1" ? "" : color}
                    onInput={handleColorInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    maxLength={7}
                    autoComplete="off"
                    spellcheck={false}
                />
                {resetButton && (
                    <button 
                        className="resetButton clear"
                        onClick={() => setColor("-1")}
                    >
                        <Xmark />
                    </button>
                )}
            </div>
            {isFocused && (
                <div ref={containerRef} className="colorPickerDropdown">
                    <HexColorPicker color={color} onChange={setColor} />
                </div>
            )}
        </label>
    );
};

export default ColorPicker;