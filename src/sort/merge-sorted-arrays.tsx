import React, { useState, ChangeEvent } from "react";

export function MergeSortedArray() {


    const array1:number[] = [1,10,24,67,99,102];
    const array2:number[] = [11,33,25,26,44,100];

    const [count, setCount] = useState(0);
    const results = mergeArray(array1,array2);

    return (
        <>
            <div>{JSON.stringify(array1)}</div>
            <div>{JSON.stringify(array2)}</div>
            <h1>Results: {results.length} {JSON.stringify(results).replace(/"/g,"")}</h1>
        </>
    )

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

    while(indexA > 0 || indexB > 0) {
        console.log(`${arrayA[indexA]}-${arrayB[indexB]}`);
        if(arrayA[indexA] > arrayB[indexB]) {
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
