import { useEffect, useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect -> count', count);
  });

  return (
    <div className="m-auto">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
