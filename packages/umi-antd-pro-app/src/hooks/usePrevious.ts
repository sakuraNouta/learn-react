import { useEffect, useRef } from 'react';

export default function usePrevious<T>(state: T): T | undefined {
  const prev = useRef<T>();

  useEffect(() => {
    console.log(state)
    prev.current = state;
  });

  return prev.current;
}
