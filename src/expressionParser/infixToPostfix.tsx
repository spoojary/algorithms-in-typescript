import { useState, ChangeEvent } from "react";
import React  from "react";

export function InfixToPostFix() {
    const [expression, setExpression] = useState("");
    
    return (
        <div>
            <input value={expression} width="100"  onChange={handleChange} /> 
            <h2>Tokenized: 
                {JSON.stringify(tokenizeExpression(expression, operators)).replace(/"/g,``)}
            </h2>
            <h2>Postfix Expression: {convertInfixToPostfix(expression)}</h2>
        </div>
    )
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setExpression(event.target.value);
    }
}

const operators: string[] = ['*', '/', '+', '-', '(', ')'];


export function convertInfixToPostfix(expression: string): string[] {
    const postfixStack: string[] = [];

    const operatorPriority = ['*', '/', '+', '-'];

    //const tokenzer = tokenizeExpression(expression);
    // while(tokenzer.next().value) {

    // }

    return [];
}

export function* tokenizeExpression(expression: string,operators: string[]) {
    //const tokens = [];
    let lastIndexTokenized = -1;
    for(let i=0;i<expression.length;i++) {
        if( operators.find(o=>o == expression.charAt(i))) {
            if(lastIndexTokenized+1 < i) {
                yield expression.substring(lastIndexTokenized+1, i);
            }
            yield expression.charAt(i);
            lastIndexTokenized = i;
        }
    }

    if(lastIndexTokenized !== expression.length-1) {
        yield expression.substring(lastIndexTokenized+1);
    }
}