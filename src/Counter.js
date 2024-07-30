import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count changes");
  }, []);

  return (
    <div className="counter">
      <p>{"counter:" + count}</p>
      <div>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <button onClick={() => setCount(count + 1)}>increase</button>
      </div>
    </div>
  );
};
export default Counter;
