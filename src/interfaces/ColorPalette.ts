export interface ColorPalette {
    fg: string|"-1";
    fgPlus: string;
    bg: string|"-1";
    bgPlus: string;
    hl: string;
    hlPlus: string;
    info: string;
    marker: string;
    prompt: string;
    spinner: string;
    pointer: string;
    header: string;
}

export const defaultColorPalette: ColorPalette = {
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
}