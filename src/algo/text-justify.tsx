import { useState, ChangeEvent, memo, useMemo } from "react";
import React  from "react";
import { debounce } from "lodash";
const lineWidth:number = 20;

export function TextJustify() {
    const [paragraph, setParagraph] = useState("");
  
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setParagraph(event.target.value);
    };

    return (
        <div>
            <h1>Input</h1>
            <textarea cols={40} rows={5} value={paragraph} onChange={handleChange} /> 
            <h2>Justified string: </h2>
            <div style={{fontFamily: "monospace"}}>
                {JSON.stringify(textJustify(paragraph))}
            </div>
        </div>
    )
}

export function textJustify(text: string): IJustifiedWithBadness {
    return justifyRemaining(text.split(' '));
}


interface IJustifiedWithBadness {
    words: string[],
    nextLine?: IJustifiedWithBadness,
    badness: number,
    memo?: string
}

const cache = {};

function cacheAndReturn(line: IJustifiedWithBadness): IJustifiedWithBadness {
    return cache[line.words.join(" ")] = line;
}

function justifyRemaining(words: string[]): IJustifiedWithBadness {

    console.log("words ",words);

    if(words.length === 0) {
        return cacheAndReturn({
            words: [],
            badness: 0
        });
    }

    if(words.length === 1) {
        return cacheAndReturn({
            words: words,
            badness: 0
        });
    }

    let lineWithMinBadness: IJustifiedWithBadness = null;

    for(let i=0;i<words.length;i++) {

        const chosenWords = words.slice(null,i);

        let justifiedWords: IJustifiedWithBadness;

        if(lineWidthWithWords(chosenWords) > lineWidth) {
            justifiedWords = {
                words: chosenWords,
                badness: Infinity
            };

        } else {
            const remainingJustifiedWords =  justifyRemaining(words.slice(i+1));
            console.log("remaing badness",getBadness(chosenWords, i === words.length-1), remainingJustifiedWords.badness);
    
            justifiedWords = {
                words: chosenWords,
                badness: getBadness(chosenWords, i === words.length-1) + remainingJustifiedWords.badness,
                nextLine: remainingJustifiedWords,
                memo: `${lineWidthWithWords(chosenWords)}-${getBadness(chosenWords, i === words.length-1)} ${remainingJustifiedWords.badness}`
            };    
        }

        if(lineWithMinBadness === null || justifiedWords.badness < lineWithMinBadness.badness) {
            lineWithMinBadness = justifiedWords;
        }

        if(justifiedWords.badness === Infinity) {
            break;
        } 
    }
    return cacheAndReturn(lineWithMinBadness);
}

function lineWidthWithWords(words: string[]) {
    return words.reduce((count,word)=>count+word.length,0) + words.length-1;
}

function getBadness(words: string[], isLastLine: boolean): number {
    if(isLastLine) return 0;
    console.log('linewidth ', lineWidthWithWords(words));
    return Math.pow(lineWidth - (lineWidthWithWords(words)),2);
}