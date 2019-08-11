import React, { useState, ChangeEvent } from "react";


export function AllPermutations() {

    const [text, setText] = useState("");
    const results = generateAllPermutations(text);
    //const results = generateAllPermutations1(text.split(''),0,[]);

    return (
        <>
            <label>Input string:</label>
            <input value={text} onChange={handleChange} />
            <h1>Results: {results.length} {JSON.stringify(results).replace(/"/g,"").replace(/,/g," ")}</h1>
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
        return [chosen];
    }
    for(let i=0; i<text.length;i++) {
        permutations.push(
            ...permuteUtil(`${text.substring(0,i)}${text.substring(i+1)}`,`${chosen}${text.substring(i,i+1)}`)
        );
    }

    return permutations;
}


