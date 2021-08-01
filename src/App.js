import React from "react";
import "./App.css";
import {MemoizedCounter} from "./components/Counter/Counter";
import TotalCount from "./components/TotalCount/TotalCount";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 }
];

export default class App extends React.PureComponent {
    state = {
        totalCount: 0
    }

    handleChange = (increment) => {
        this.setState({
            totalCount: this.state.totalCount + increment
        })
    }

    render() {
        const { totalCount } = this.state;

        return (
            <div className="main-wrapper">
                <div className="counters-tittle">Counters challenge</div>
                <div className="counter-list">
                    {data.map((counter) => (
                        <MemoizedCounter key={counter.id} value={counter.value}
                                         onCounterChange={this.handleChange}
                        />
                    ))}
                </div>
                <TotalCount totalCount={totalCount}/>
            </div>
        );
    }
}