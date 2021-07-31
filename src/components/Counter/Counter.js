import React from "react";
import "./Counter.css";

export default function Counter({value, onChange}) {

    const handleIncrement = () => {
        onChange(1);
    }

    const handleDecrement = () => {
        onChange(-1);
    }

    return (
        <div className="counter-wrapper">
            <b className="counter-text">{value}</b>
            <div className="counter-content">
                <button className="counter-button add-button" onClick={handleIncrement}>+</button>
                <button className="counter-button subtract-button" onClick={handleDecrement}>-</button>
            </div>
        </div>
    );
}