import React from 'react';

const input: number[] = [2,4,6,10,16];

export function FindSetWithSum() {

    return (
        <>
            <h1>Input: {JSON.stringify(input)}</h1>
            <h1>Result: {findSetWithSum(input,0,2)}</h1>
        </>
    );

} 


export function findSetWithSum(inputs: number[], i: number, sum: number): number {
    console.log('recur ', i,sum);

    if(sum === 0) {
        console.log('found');
        return 1;
    }

    if(sum < 0) {
        return 0;
    }

    if(i >= inputs.length) {
        return 0;
    }
    
    if(inputs[i] <= sum) {
        return findSetWithSum(inputs, i+1,sum - inputs[i]) + findSetWithSum(inputs,i+1, sum); 
    } else {
        return findSetWithSum(inputs, i+1, sum);
    }
}




