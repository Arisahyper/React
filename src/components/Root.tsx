import React, { useState } from "react";

const Root = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-red-600">Hello Vite + React!</h1>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </div>
  );
};

export { Root };
