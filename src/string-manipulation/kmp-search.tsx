import React, { ChangeEvent, useState } from "react";


export function KmpSearch() {
    const [text, setText] = useState("");
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <label>Text:</label>
            <input value={text} onChange={handleTextChange} />
            <label>Search string:</label>
            <input value={searchText} onChange={handleSearchTextChange} />
            {renderResults(text,searchText)}
            {renderResults("abcdhabcabcdhabcdkk","abcdhabcd")}
            {renderResults("abcdhabcabcdhabcdkk","abcdhabc")}
        </>
    );

    function renderResults(text: string, searchText: string) {
        return (<>
        <div>text: {text} searchText: {searchText}</div>
        <div>Results table: {JSON.stringify(getTable(searchText))}</div>
        <div>Result: {search(text,searchText)}</div>
        <br/>
        </>);
    }

    function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    function handleSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value);
    }
}


export function search(text: string, searchText: string): number {

    const table = getTable(searchText);

    let j=0;
    for(let i=0;i<text.length;i++) {
        console.log(`${text}-${searchText}-i,j`,i,j,text.charAt(i),searchText.charAt(j),searchText.charAt(j) === text.charAt(i));

        if(searchText.charAt(j) === text.charAt(i)) {
            if(j === searchText.length-1) {
                return i-j;
            }
            j++;

        } else {
            i--;
            j=table[j];
        }
    }

    return -1;

}

function getTable(searchText: string): number[] {
    const table = [];
    let j=0;
    table.push(0);
    for(let i=1;i<searchText.length; i++) {
        if(searchText.charAt(i) === searchText.charAt(j)) {
            j++;
            table.push(j);
        } else {
            j = 0
            table.push(j);
        }
    }

    return table;
}