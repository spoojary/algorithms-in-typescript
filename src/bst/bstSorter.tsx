import React, { ChangeEvent } from "react";
import { bstSort } from "./bstNode";

interface IBstSorterState {
    numbers: number[]
}

export class BstSorter extends React.Component<{}, IBstSorterState> {

    public state: IBstSorterState = {
        numbers: [7,3,42,5,32,1]
    }

    public render(): JSX.Element {
        const { numbers } = this.state;

        return (
        <div>
            <h1>BST sorter</h1>
            {numbers.map((n, index) => (
                <div key={index}>
                <input type="number" value={n} onChange={this.handleChange.bind(this, index)} />   
                </div>             
            ))
            }
            <div>
                <h2>Result</h2>
                {JSON.stringify(bstSort(numbers))}
            </div>
        </div>
        );
    }

    public handleChange = (index: number,event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        console.log("params", [index,event] );
        this.setState(prevState => ({
            numbers: prevState.numbers.map((num, i)=> i === index ? Number(event.target.value) : num)
        }))
    }
    
}