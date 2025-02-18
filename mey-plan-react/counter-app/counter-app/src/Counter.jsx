import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const multiplyByTwo = () => {
    setCount(count * 2);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={multiplyByTwo}>x 2</button>
    </div>
  );
}

export default Counter;
