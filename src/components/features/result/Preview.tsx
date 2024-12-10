import "./Preview.scss";
import {ColorPalette} from "../../../interfaces/ColorPalette.ts";
import {FunctionalComponent} from "preact";

interface PreviewProps {
    colorPalette: ColorPalette;
}

const Preview: FunctionalComponent<PreviewProps> = ({ colorPalette }) => {
    return (
        <div className={"preview card"} style={{backgroundColor: colorPalette.bg}}>
            <div className="line">
                <span className="bgp" style={{backgroundColor: colorPalette.bgPlus}}>&#160;</span>
                <div className="marker" style={{color: colorPalette.marker}}>&gt;</div>
                <span className="fg" style={{color: colorPalette.fg}}>src/fzf/main</span>
                <span className="hl" style={{color: colorPalette.hl}}>.go</span>
            </div>
            <div className="line">
                <span className="bgp" style={{backgroundColor: colorPalette.bgPlus}}>&#160;</span>
                <div className="marker" style={{color: colorPalette.marker}}>&#160;</div>
                <span className="fg" style={{color: colorPalette.fg}}>src/pattern</span>
                <span className="hl" style={{color: colorPalette.hl}}>.go</span>
            </div>
            <div className="line">
                <span className="bgp" style={{backgroundColor: colorPalette.bgPlus}}>&#160;</span>
                <div className="marker" style={{color: colorPalette.marker}}>&gt;</div>
                <span className="fg" style={{color: colorPalette.fg}}>src/options</span>
                <span className="hl" style={{color: colorPalette.hl}}>.go</span>
            </div>
            <div className="line">
                <span className="bgp" style={{backgroundColor: colorPalette.bgPlus}}>&#160;</span>
                <div className="marker" style={{color: colorPalette.marker}}>&#160;</div>
                <span className="fg" style={{color: colorPalette.fg}}>src/matcher</span>
                <span className="hl" style={{color: colorPalette.hl}}>.go</span>
            </div>
            <div className="line">
                <span className="bgp" style={{backgroundColor: colorPalette.bgPlus}}>&#160;</span>
                <div className="marker" style={{color: colorPalette.marker}}>&#160;</div>
                <span className="fg" style={{color: colorPalette.fg}}>src/history</span>
                <span className="hl" style={{color: colorPalette.hl}}>.go</span>
            </div>
            <div className="line">
                <span className="bgp" style={{color: colorPalette.pointer, backgroundColor: colorPalette.bgPlus}}>&gt;</span>
                <div className="marker" style={{color: colorPalette.marker, backgroundColor: colorPalette.bgPlus}}>&#160;</div>
                <span className="fg" style={{color: colorPalette.fgPlus, backgroundColor: colorPalette.bgPlus}}>src/reader</span>
                <span className="hl" style={{color: colorPalette.hlPlus, backgroundColor: colorPalette.bgPlus}}>.go</span>
            </div>
            <div className="line">
                <span className="bgp" style={{backgroundColor: colorPalette.bgPlus}}>&#160;</span>
                <div className="marker" style={{color: colorPalette.marker}}>&#160;</div>
                <span className="fg" style={{color: colorPalette.fg}}>src/merger</span>
                <span className="hl" style={{color: colorPalette.hl}}>.go</span>
            </div>
            <div class="line">
                <span>&#160;&#160;</span>
                <span style={{color: colorPalette.header}}>This is the Header</span>
            </div>
            <div class="line">
                <span style={{color: colorPalette.spinner}}>\</span>
                <span>&#160;</span>
                <span style={{color: colorPalette.info}}>35/63 (3)</span>
            </div>
            <div class="line">
                <div class="prompt" style={{color: colorPalette.prompt}}>&gt;</div>
                <span>&#160;</span>
                <span style={{color: colorPalette.fg}}>.go$</span>
            </div>
        </div>
    )
}

export default Preview;