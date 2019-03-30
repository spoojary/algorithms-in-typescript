import React, { useState, ChangeEvent } from "react";
import { cloneDeep } from "lodash"

export function NinetyPercentRotate() {
    const [text, setText] = useState("");

    const inputMatrix: number[][] = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; 

    // 0,0  -> 3,0
    // 0,1 ->  3,1
    // 0,2 -> 3,2
    // 0,3 ->

    return (
        <>
            <label>Input</label>
            <div>{printMatrix(inputMatrix)}</div>
            <label>Input string:</label>p
            <input value={text} onChange={handleChange} />
            <h1>Results: {printMatrix(cloneDeep(inputMatrix))}</h1>
        </>
    )

    function printMatrix(matrix: number[][]): JSX.Element {
        return (
            <table>
                {matrix.map(line=>(
                    <tr>
                        {line.map(e=><td>{e}</td>)}
                    </tr>))
                }
            </table>
        );
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }
}

