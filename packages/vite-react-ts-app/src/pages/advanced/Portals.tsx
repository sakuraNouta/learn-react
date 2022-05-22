import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function ChildComponent() {
  return <h5>ChildrenComponent</h5>;
}

function Content(props: any) {
  const [header, setHeader] = useState<Element | null>();
  useEffect(() => {
    const dom = document.getElementById('header');
    console.log('useEffect -> dom', dom);
    setHeader(dom);
  }, []);
  return (
    <div>
      content
      {header && createPortal(props.children, header)}
    </div>
  );
}

export default function Container() {
  return (
    <div className="flex flex-col w-full">
      <div
        id="header"
        className="w-full h-12 flex-shrink-0 flex justify-between items-center"
      >
        header
      </div>
      <div className="flex h-full justify-center items-center bg-green-100">
        <Content>
          <ChildComponent />
        </Content>
      </div>
    </div>
  );
}
