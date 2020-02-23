import { ChangeEvent, useState } from "react";


export function KmpSearch() {
    const [text, setText] = useState("");
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <label>Text:</label>
            <input value={text} onChange={handleTextChange} />
            <label>Search string:</label>
            <input value={searchText} onChange={handleSearchTextChange} />
            <h1>Results table: {search(text,searchText)}</h1>
            <h1>Result: {search(text,searchText)}</h1>
        </>
    )

    function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    function handleSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

}


export function search(text: string, searchText: string): number[] {
    return [];
}