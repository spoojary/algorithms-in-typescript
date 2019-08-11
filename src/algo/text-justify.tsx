import { useState, ChangeEvent } from "react";
import React  from "react";
const lineWidth:number = 20;

export function TextJustify() {
    const [paragraph, setParagraph] = useState("");
    console.log('i am here in text justify');
    //const [result, setResult] = useState<IJustifiedWithBadness>(null);
    const result = textJustify(paragraph);//useMemo(() => textJustify(paragraph), [new Date().getSeconds().toString().substr(0,1)]);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setParagraph(event.target.value);
    };

    return (
        <div>
            <h1>Input</h1>
            <textarea cols={40} rows={5} value={paragraph} onChange={handleChange} /> 
            <h2>Justified string: </h2>
            <div style={{fontFamily: "monospace"}}>
                {JSON.stringify((result))}
                {renderLines(result)}
            </div>
        </div>
    )
}

export function renderLines(line: IJustifiedWithBadness) {
    if(line === null) return <span>NULL</span>;
    return (
    <>
    <div>
        {line.words.join(" ")}
        {line.nextLine && renderLines(line.nextLine)}
    </div>
    </>
    );
}


let cache = {};

export function textJustify(text: string): IJustifiedWithBadness {
    cache = {};
    return justifyRemaining(text.split(' '),0);
}


interface IJustifiedWithBadness {
    words: string[],
    nextLine?: IJustifiedWithBadness,
    badness: number,
    memo?: string
}

function cacheAndReturn(start:number,line: IJustifiedWithBadness): IJustifiedWithBadness {
    return cache[`${start}`] = line;
}

function justifyRemaining(words: string[],start: number): IJustifiedWithBadness {

    console.log('words',words.slice(start));

    if(cache[`${start}`]) {
        console.log('from cache')
        return cache[`${start}`];
    }

    //console.log("words ",words);

    if(start === words.length) {
        return cacheAndReturn(start,{
            words: [],
            badness: 0
        });
    }

    if(start === words.length-1) {
        return cacheAndReturn(start,{
            words: words,
            badness: 0
        });
    }

    let lineWithMinBadness: IJustifiedWithBadness = null;

    for(let i=start;i<words.length;i++) {

        const chosenWords = words.slice(start,i+1);
        console.log('chosen',chosenWords);

        let justifiedWords: IJustifiedWithBadness;

        if(lineWidthWithWords(chosenWords) > lineWidth) {
            justifiedWords = {
                words: chosenWords,
                badness: Infinity
            };

        } else {
            const remainingJustifiedWords =  justifyRemaining(words,i+1);
    
            justifiedWords = {
                words: chosenWords,
                badness: getBadness(chosenWords, i === words.length-1) + remainingJustifiedWords.badness,
                nextLine: remainingJustifiedWords,
            };    
        }

        if(lineWithMinBadness === null || justifiedWords.badness < lineWithMinBadness.badness) {
            lineWithMinBadness = justifiedWords;
        }

        if(justifiedWords.badness === Infinity) {
            break;
        } 
    }
    return cacheAndReturn(start,lineWithMinBadness);
}

function lineWidthWithWords(words: string[]) {
    return words.reduce((count,word)=>count+word.length,0) + words.length-1;
}

function getBadness(words: string[], isLastLine: boolean): number {
    if(isLastLine) return 0;
    //console.log('linewidth ', lineWidthWithWords(words));
    return Math.pow(lineWidth - (lineWidthWithWords(words)),2);
}