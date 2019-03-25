import { useState, ChangeEvent } from "react";
import React  from "react";

export function BalancedBrackets() {
    const [expression, setExpression] = useState("");
    
    return (
        <div>
            <input value={expression} width="100"  onChange={handleChange} /> 
            <h2>Expression balanced: {expressionBalanced(expression) ? "true" : "false"}</h2>
        </div>
    )
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setExpression(event.target.value);
    }
}

export function expressionBalanced(expression: string) {
    const bracketsStack: string[] = [];
    const bracketsPairs: Array<string[]> = [["{", "}"], ["(", ")"], ["[", "]"]];


    for(let i: number=0;i<expression.length;i++) {
        const openingBracketIndex =  bracketsPairs.findIndex(b=>b[0] ===  expression.charAt(i));
        if(openingBracketIndex >= 0) {
            bracketsStack.push(bracketsPairs[openingBracketIndex][0]);
        }

        const closingBracketIndex = bracketsPairs.findIndex(b=>b[1] === expression.charAt(i));
        if(closingBracketIndex >= 0) {
            const lastOpenedBracket = bracketsStack.pop();
            if(lastOpenedBracket !== bracketsPairs[closingBracketIndex][0]) {
                return false;
            }
        }
    }

    return bracketsStack.length === 0;
}