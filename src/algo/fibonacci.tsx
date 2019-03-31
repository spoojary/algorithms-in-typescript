import React, { useState, ChangeEvent } from "react";


export function Fibonacci() {

    const [count, setCount] = useState(0);
    const results = getFibonacci(count);

    return (
        <>
            <label>Input string:</label>
            <input value={count} onChange={handleChange} />
            <h1>Results: {results.length} {JSON.stringify(results).replace(/"/g,"").replace(/,/g," ")}</h1>
        </>
    )

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setCount(parseInt(event.target.value || '0', 0));
    }
} 


export function getFibonacci(n: number): number[] {
    let fibNumbers = [0,1];
    while(fibNumbers.length < n) {
        fibNumbers.push(fibNumbers[fibNumbers.length-1] + fibNumbers[fibNumbers.length-2])
    }
    return fibNumbers
}
