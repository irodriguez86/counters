import React, {useState} from "react";
import "./Counter.css";

export function Counter({value, onCounterChange}) {

    const [count, setCount] = useState(value);

    const handleIncrement = () => {
        setCount(count + 1);
        onCounterChange(1);
    }

    const handleDecrement = () => {
        setCount(count -1);
        onCounterChange(-1);
    }

    return (
        <div className="counter-wrapper">
            <b className="counter-text">{count}</b>
            <div className="counter-content">
                <button className="counter-button add-button" onClick={handleIncrement}>+</button>
                <button className="counter-button subtract-button" onClick={handleDecrement}>-</button>
            </div>
        </div>
    );
}

export const MemoizedCounter = React.memo(Counter);