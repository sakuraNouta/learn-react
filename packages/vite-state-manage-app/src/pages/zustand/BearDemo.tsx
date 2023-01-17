import { Button } from "antd";
import create from "zustand";
import shallow from "zustand/shallow";

interface BearState {
  bears: number;
  nuts: number;
  honey: number;
  feed: () => void;
}

const getRandom = () => {
  return Math.floor(1 + Math.random() * 6);
};

const useBearStore = create<BearState>((set, get) => ({
  bears: 1,
  nuts: 2,
  honey: 2,
  feed: () => {
    const { bears, nuts, honey } = get();
    let _bears = bears;
    let _nuts = nuts + getRandom();
    let _honey = honey + getRandom();

    if (_nuts >= bears * 2 && _honey >= bears * 2) {
      _bears += 1;
    } else {
      _bears -= 1;
    }

    _nuts -= _bears;
    _honey -= _bears;

    set(() => ({
      bears: _bears,
      nuts: _nuts,
      honey: _honey,
    }));
  },
}));

export default function BearDemo() {
  const bears = useBearStore((state) => state.bears);

  const { nuts, honey } = useBearStore(
    (state) => ({
      nuts: state.nuts,
      honey: state.honey,
    }),
    shallow
  );

  const feed = useBearStore((state) => state.feed);

  return (
    <div className="border p-sm mt-sm">
      <p>bear: {bears}</p>
      <p>nut: {nuts}</p>
      <p>honey: {honey}</p>
      <Button onClick={feed}>投喂</Button>
    </div>
  );
}
