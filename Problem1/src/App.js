import React from "react";
import "./style.css";

// The mutual logic added to the props as parameters
export default function App() {
    return (
        <div className="box">
            <Editor text="He's not the sharpest knife in a drawer." />
            <br />
            <br />
            <Editor text="The big building was blazing with lights" />
            <br />
            <br />
            <Editor text="Now you must answer some big questions." />
            <br />
            <br />
            <Editor text="Get Your Act Together!" />
        </div>
    );
}

// Encapsulated logic or mutual logic for all props refactored into a component
function Editor({ text }) {
    const [boldFont, setBoldFont] = React.useState(false);
    const [fontSize, setFontSize] = React.useState(14);
    const [italicFont, setItalicFont] = React.useState(false);
    const [colorText, setColor] = React.useState("black");
    const [underline, setUnderLine] = React.useState("none");

    return (
        <>
            <div className="box"
                style={{
                    fontWeight: boldFont ? "bold" : "normal",
                    fontSize: `${fontSize}px`,
                    fontStyle: italicFont ? "italic" : "normal",
                    color: colorText ? "black" : "red",
                    textDecorationLine: underline ? "none" : "underline"
                }}
            >
                <span>{text}</span>
            </div>

            <div className="box">
                <button onClick={() => setBoldFont(!boldFont)}>Bold</button>
                <button onClick={() => setFontSize(fontSize + 1)}>A+</button>
                <button onClick={() => setFontSize(fontSize - 1)}>a-</button>
                <button onClick={() => setItalicFont(!italicFont)}> Italic</button>
                <button onClick={() => setColor(!colorText)}>Color</button>
                <button onClick={() => setUnderLine(!underline)}>Underline</button>
            </div>
        </>
    );
}
