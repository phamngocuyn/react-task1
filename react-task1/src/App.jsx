import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0); // Sử dụng useState từ React

  console.log("render")

  return (
    <div>
      <p>Count: {count}</p>
      <p>Phạm Ngọc uyn- phương ăn cứt trâu </p>
      <button onClick={() => setCount(count + 2)}>Increase</button>
    </div>
  );
}

export default MyComponent;
