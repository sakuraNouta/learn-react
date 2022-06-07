import { useMemoizedFn } from 'ahooks';
import { useEffect, useState } from 'react';

export default function DemoMemorizedFn() {
  const [count, setCount] = useState(0);

  // 闭包陷阱
  // const log = useCallback(() => {
  //   console.log('count: ', count);
  // }, [count]);

  // useMemoizedFn 通过ref, 可以保持最新的引用
  const log = useMemoizedFn(() => {
    console.log('count: ', count);
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount(prevCount => prevCount + 1);
      log();
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <span className="m-auto" onClick={log}>
      useMemorizedFn demo
    </span>
  );
}
