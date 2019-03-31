import React, { useState, ChangeEvent } from "react";

export function MergeSortedArray() {

    const [array1, setArray1] = useState([1,10,24,67,99,102]);
    const [array2, setArray2] = useState([11,25,33,40,44,100]);
    const [array1String, setArray1String] = useState(array1.join(","));
    const [array2String, setArray2String] = useState(array2.join(","));

    const results = mergeArray(array1,array2);

    return (
        <>
            <div>
                <label>Array1 string:</label>
                <input value={array1String} onChange={handleChangeArray1} />
            </div>

            <div>
                <label>Array2 string:</label>
                <input value={array2String} onChange={handleChangeArray2} />
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

    function handleChangeArray2(event: ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        setArray2String(text);
        setArray2(text.split(',').map(n=>parseInt(n)));
    }

} 


export function mergeArray(array1: number[], array2: number[]): number[] {
    const newArray:number[] = new Array<number>(array1.length + array2.length);

    mergeArrayUtil(array1,array2, newArray);

    return newArray;
}

export function mergeArrayUtil(arrayA: number[], arrayB: number[], mergedArray: number[]) {
    let indexA = arrayA.length-1;
    let indexB = arrayB.length-1;
    let indexMerged = mergedArray.length-1; 
    console.log('',arrayA, arrayB,);

    while(indexA >= 0 || indexB >= 0) {
        console.log(`${indexA},${indexB} - ${arrayA[indexA]}-${arrayB[indexB]}`);
        if(indexB < 0 || arrayA[indexA] > arrayB[indexB]) {
            mergedArray[indexMerged] = arrayA[indexA];
            indexA--;
            indexMerged--;
        } else {
            mergedArray[indexMerged] = arrayB[indexB];
            indexB--;
            indexMerged--;
        }
    }

    return mergedArray;
}
