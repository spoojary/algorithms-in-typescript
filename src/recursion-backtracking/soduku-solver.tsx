import React, { useState, ChangeEvent } from "react";

export function StringManipulation() {
    const [text, setText] = useState("");

    return (
        <>
            <label>Input string:</label>
            <input value={text} onChange={handleChange} />
            <h1>Results: {text} {JSON.stringify(compress(text))}</h1>
        </>
    )

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }
}

export function compress(text: string) {
    let compressedText = "";
    let lastChar = "";
    let lastCharCount = 0;

    for(let i:number=0;i<text.length;i++) {
        if(text.charAt(i) !== lastChar) {
            compressedText = `${compressedText}${lastChar}${lastCharCount}`;
            lastChar = text.charAt(i);
            lastCharCount = 1;
        }
    }
    compressedText = `${compressedText}${lastChar.repeat(lastCharCount)}`;

    return compressedText;
}