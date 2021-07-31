import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import TotalCount from "./components/TotalCount/TotalCount";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 }
];

function App() {
    const [counters, setCounters] = useState(data);
    const [totalCount, setTotalCount] = useState(data.reduce((acc, counter) => acc + counter.value, 0 ));

    const onChange = (counterId, increment) => {
        setCounters(counters.map(counter => {
            const { id, value } = counter;

            return {
                id,
                value: counterId === id ? (value + increment) : value
            }
        }))
        setTotalCount(totalCount + increment);
    }

  return (
    <div className="main-wrapper">
        <div className="counters-tittle">Counters challenge</div>
        <div className="counter-list">
            {counters.map((counter) => (
                <Counter key={counter.id} value={counter.value} onChange={(increment) => onChange(counter.id, increment)}/>
            ))}
        </div>
        <TotalCount totalCount={totalCount}/>
    </div>
  );
}

export default App;
