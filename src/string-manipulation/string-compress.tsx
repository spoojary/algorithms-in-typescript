import React, { useState, ChangeEvent } from "react";

export function StringCompress() {
    const [text, setText] = useState("");

    return (
        <>
            <label>Input string:</label>
            <input value={text} onChange={handleChange} />
            <h1>Results: {compress(text)}</h1>
        </>
    )

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }
}

export function compress(text: string) {
    let compressedText = "";
    let lastChar = text.charAt(0);
    let lastCharCount = 1;

    for(let i:number=1;i<text.length;i++) {
        if(text.charAt(i) === lastChar) {
            lastCharCount++
        } else {
            compressedText = `${compressedText}${lastChar}${lastCharCount}`;
            lastChar = text.charAt(i);
            lastCharCount=1;
        }
    }
    compressedText = `${compressedText}${lastChar}${lastChar && lastCharCount}`;

    return compressedText.length > text.length ? text : compressedText;
}