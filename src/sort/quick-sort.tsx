import React, { useState, ChangeEvent } from "react";

export function QuickSortArray() {

    const [array1, setArray1] = useState([100,9,4,6,1,102]);
    const [array1String, setArray1String] = useState(array1.join(","));

    const results = quickSort(array1);

    return (
        <>
            <div>
                <label>Array1 string:</label>
                <input value={array1String} onChange={handleChangeArray1} />
            </div>

            {/* <div>{JSON.stringify(array1)}</div>
            <div>{JSON.stringify(array2)}</div> */}
            <h1>Results: {results.length} {JSON.stringify(results).replace(/"/g,"")}</h1>
        </>
    );


    function handleChangeArray1(event: ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        setArray1String(text);
        setArray1(text.split(',').map(n=>parseInt(n)));
    }

} 

let recurseLimit = 0;

export function quickSort(array: number[]): number[] {
    const newArray:number[] = [...array];

    recurseLimit = 0;
    quickSortUtil(newArray, 0,array.length-1);

    return newArray;
}



export function quickSortUtil(array : number[], start: number, end: number) {

    console.log(`${start} - ${end}`);
    if(start === end) return;

    const pivot = array[end];
    const i: number = start;
    let swapIndex = start;    
    for(let i=start+1;i<end;i++) {
        console.log(`compare index ${i} END ${end} array[i] ${array[i]} pivot ${pivot}`,array);
        if(array[i] < pivot) {
            swap(array, swapIndex, i);
            swapIndex++;
            //console.log(`swapindex incremented: ${swapIndex}`);
        }
    }

    if(pivot < array[swapIndex]) {
        swap(array,end,swapIndex);
    }

    quickSortUtil(array, start, swapIndex);
    quickSortUtil(array, swapIndex+1, end);
}

function swap(array: number[], index1: number, index2: number): void {
    const index1Value = array[index1];
    const index2Value = array[index2];
    array[index1] = index2Value;
    array[index2] = index1Value;
    console.log(`swap indexes: ${index1}---${index2}`, array);
}