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

export function extractColorPaletteFromUrl(query: string): ColorPalette {
    const params = new URLSearchParams(query);

    const fg = params.get("fg") || defaultColorPalette.fg;
    const fgPlus = params.get("fgPlus") || defaultColorPalette.fgPlus;
    const bg = params.get("bg") || defaultColorPalette.bg;
    const bgPlus = params.get("bgPlus") || defaultColorPalette.bgPlus;
    const hl = params.get("hl") || defaultColorPalette.hl;
    const hlPlus = params.get("hlPlus") || defaultColorPalette.hlPlus;
    const info = params.get("info") || defaultColorPalette.info;
    const marker = params.get("marker") || defaultColorPalette.marker;
    const prompt = params.get("prompt") || defaultColorPalette.prompt;
    const spinner = params.get("spinner") || defaultColorPalette.spinner;
    const pointer = params.get("pointer") || defaultColorPalette.pointer;
    const header = params.get("header") || defaultColorPalette.header;

    return {
        fg,
        fgPlus,
        bg,
        bgPlus,
        hl,
        hlPlus,
        info,
        marker,
        prompt,
        spinner,
        pointer,
        header,
    }
}

export function importColorPalette(variable: string): ColorPalette {
    const palette: ColorPalette = defaultColorPalette;

    const regex = /([\w+-]+):#([a-fA-F0-9]{6})/g;
    const lines = variable.split(/\s--color=/);

    for (const line of lines) {
        let match: RegExpExecArray | null;
        while ((match = regex.exec(line)) !== null) {
            const key = match[1].trim();
            const value = `#${match[2].trim()}`;

            switch (key) {
                case "fg": palette.fg = value; break;
                case "fg+": palette.fgPlus = value; break;
                case "bg": palette.bg = value; break;
                case "bg+": palette.bgPlus = value; break;
                case "hl": palette.hl = value; break;
                case "hl+": palette.hlPlus = value; break;
                case "info": palette.info = value; break;
                case "marker": palette.marker = value; break;
                case "prompt": palette.prompt = value; break;
                case "spinner": palette.spinner = value; break;
                case "pointer": palette.pointer = value; break;
                case "header": palette.header = value; break;
            }
        }
    }

    return palette;
}