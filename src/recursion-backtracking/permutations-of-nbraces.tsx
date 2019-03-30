import React, { useState, ChangeEvent } from "react";


export function PermOfNBraces() {

    const [count, setCount] = useState(0);
    const results = generateAllPermutations(count);

    return (
        <>
            <label>Input string:</label>
            <input value={count} onChange={handleChange} />
            <h1>Results: {results.length} {JSON.stringify(results).replace(/"/g,"")}</h1>
        </>
    )

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setCount(parseInt(event.target.value || '0', 0));
    }
} 


export function generateAllPermutations(n: number): string[] {
    return permuteUtil(n,n, "");
}

export function permuteUtil(remainingLeft: number, remainingRight: number, str: string): string[] {
    const permutations: string[] = [];

    if(remainingLeft === 0 && remainingRight === 0) {
        return [str];
    }

    if(remainingLeft > 0) {
        permutations.push(...permuteUtil(remainingLeft-1, remainingRight, str + "("));
    }

    if(remainingLeft < remainingRight) {
        permutations.push(...permuteUtil(remainingLeft, remainingRight-1, str + ")"));        
    }

    return permutations 
}