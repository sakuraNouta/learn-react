import { Button } from "antd";
import create from "zustand";

type CounterState = {
  count: number;
  inc: () => void;
};

const useStore = create<CounterState>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Controls() {
  const inc = useStore((state) => state.inc);
  return <Button onClick={inc}>one up</Button>;
}

function Counter() {
  const count = useStore((state) => state.count);
  return <h2>{count}</h2>;
}

export default function CounterDemo() {
  return (
    <div>
      <Counter />
      <Controls />
    </div>
  );
}
