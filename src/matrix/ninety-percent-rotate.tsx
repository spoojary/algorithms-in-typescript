import React, { useState, ChangeEvent, useEffect } from "react";
import { cloneDeep } from "lodash"

export function NinetyPercentRotate() {
    const [inputMatrix, setInputMatrix] = useState([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);

    // 0,0  -> 3,0
    // 0,1 ->  3,1
    // 0,2 -> 3,2
    // 0,3 ->
    useEffect(() => {
        const timeoutHandle = setTimeout(() => {
           setInputMatrix(rotate90Degree(inputMatrix));
        }, 5000);

        return () => {
            clearTimeout(timeoutHandle);
        };
    })

    return (
        <>
            <label>Input</label>
            <div>{printMatrix(inputMatrix)}</div>
            {/* <label>Input string:</label>p
            <input value={text} onChange={handleChange} /> */}
            <h1>Results: {printMatrix(rotate90Degree(inputMatrix))}</h1>
        </>
    )

    function printMatrix(matrix: number[][]): JSX.Element {
        return (
            <table style={{margin: 'auto'}}>
                {matrix.map(line=>(
                    <tr> 
                        {line.map(e=><td  style={{width:'50px',height: '50px'}}><span>{e}</span></td>)}
                    </tr>))
                }
            </table>
        );
    }

    function rotate90Degree(inputMatrix: number[][]): number[][] {
        const matrix = cloneDeep(inputMatrix);
        for(let layer=0;layer<matrix.length/2;layer++) {
            const first = layer; // 0
            const last = matrix.length-layer-1; // 3
            console.log(` first ${first} last ${last}`); 
            for(let i = first;i<last;i++) {

                const offset = i-first;

                // save top
                const top = matrix[first][i];
                
                // top = left
                matrix[first][i] = matrix[last-offset][first];

                // left = bottom
                matrix[last-offset][first] = matrix[last][last-offset];

                // bottom = right
                matrix[last][last-offset] = matrix[i][last];

                // right = top
                matrix[i][last] = top;
            }
        }
        return matrix;
    }

    // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //     setText(event.target.value);
    // }
}

