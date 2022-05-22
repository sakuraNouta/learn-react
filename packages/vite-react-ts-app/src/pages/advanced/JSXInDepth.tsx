import { useEffect, useImperativeHandle, useRef, useState } from 'react';

const children = [
  {
    component: ({ onRef }: { onRef: any }) => {
      const log = () => console.log('组件1');
      useImperativeHandle(onRef, () => ({ log }));
      return <h5>组件1</h5>;
    }
  },
  {
    component: ({ onRef }: { onRef: any }) => {
      const log = () => console.log('组件2');
      useImperativeHandle(onRef, () => ({ log }));
      return <h5>组件2</h5>;
    }
  },
  {
    component: ({ onRef }: { onRef: any }) => {
      const log = () => console.log('组件3');
      useImperativeHandle(onRef, () => ({ log }));
      return <h5>组件3</h5>;
    }
  }
];

export default function JSXInDepth() {
  const [index, setIndex] = useState(0);
  const CurrentComponent = children[index].component;
  let onRef = useRef<any>();
  const next = () => {
    onRef.current.log();
    setIndex(prevIndex => (prevIndex + 1) % 3);
  };
  useEffect(() => {
    onRef.current?.log?.();
  }, [index]);
  return (
    <div className="flex flex-col m-auto">
      {<CurrentComponent onRef={onRef} />}
      <button className="border" onClick={next}>
        next
      </button>
    </div>
  );
}
