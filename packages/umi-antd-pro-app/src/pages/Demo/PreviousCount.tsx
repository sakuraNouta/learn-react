import usePrevious from '@/hooks/usePrevious';
import { Button } from 'antd';
import { useState } from 'react';

export default function PreviousCount() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="w-full h-[calc(50%+10px)] flex flex-col justify-center items-center">
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <p>
        current: {count}, previous: {prevCount}
      </p>
    </div>
  );
}
