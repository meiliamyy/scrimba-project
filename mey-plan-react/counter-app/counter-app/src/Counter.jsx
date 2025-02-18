import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <CounterButtons count={count} setCount={setCount} />
    </div>
  );
}

function CounterButtons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => Math.max(prev - 1, 0))}>-</button>
      <button onClick={() => setCount((prev) => Math.min(prev + 1, 10))}>+</button>
      <button onClick={() => setCount(0)}>Reset</button> {/* Tambahkan tombol reset */}
    </div>
  );
}

export default Counter;
