import React, { useState, ChangeEvent } from "react";


export function AllPermutations() {

    const [text, setText] = useState("");

    return (
        <>
            <label>Input string:</label>
            <input value={text} onChange={handleChange} />
            <h1>Results: {text} {JSON.stringify(generateAllPermutations(text))}</h1>
        </>
    )

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }
} 


export function generateAllPermutations(text: string): string[] {
    return permuteUtil(text, "");
}

export function permuteUtil(text: string, chosen: string): string[] {
    const permutations: string[] = []; 
    if(text === "") {
        console.log(`chosen: ${chosen}`);
        return [chosen];
    }
    for(let i=0; i<text.length;i++) {
        console.log(` operation before text: ${text} -- chosen: ${chosen} `);
        const currentChar = text[i];
        const chosen1 = chosen + currentChar;
        text = `${text.substring(0,i-1)}${text.substring(i+1)}`;
        //console.log(` before text: ${text} -- chosen: ${chosen} `);
        permutations.push(...permuteUtil(text,chosen1));
        text = `${text.substring(0,i)}${currentChar}${text.substring(i)}`;
        chosen = chosen1.substr(0,chosen.length-1);
        console.log(` after text: ${text} -- chosen: ${chosen} `);
         
        // permutations.push(
        //     ...permuteUtil(`${text.substring(0,i-1)}${text.substring(i+1)}`,`${chosen}${text.substring(i,i+1)}`)
        // );
    }

    return permutations;
}