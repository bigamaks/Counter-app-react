import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <input
        type="range"
        max="10"
        min="0"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      {/* <button onClick={() => setStep((c) => c + 1)}>+</button> */}
      <span>Step: {step}</span>
      {/* <button onClick={() => setStep((c) => c - 1)}>-</button> */}

      <div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
      </div>

      <p>
        {/* <span>{count === 0 ? "Today is" : count}</span> */}
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
