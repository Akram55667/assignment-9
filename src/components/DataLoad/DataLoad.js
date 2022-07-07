import React, { useState } from "react";

const DataLoad = () => {
  const [count, setCount] = useState(0);

  const number = 56;
  const increaseCount = () =>{
    setCount(count + 1);
  }

  return (
    <div>
      <button className="rounded-tl-none " onClick={increaseCount}>Click me</button>
      <h4 className="text-2xl">My Number: {number}</h4>
      <p>Count: {count}</p>
      <h2>Count: {count}</h2>
      <p><small>Double count: {count * 2}</small></p>
    </div>
  );
};

export default DataLoad;
