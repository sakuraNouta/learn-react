import { CSSTransition, SwitchTransition, Transition } from 'react-transition-group';
import { useState, useRef } from 'react';
import { Button, Space } from 'antd';
import './index.less';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function PlainTransitionDemo() {
  const nodeRef = useRef(null);
  const [inProp, setInProp] = useState(false);

  return (
    <div>
      <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
        {(state) => (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <h1>I&apos;m a fade Transition!</h1>
          </div>
        )}
      </Transition>
      <button onClick={() => setInProp((prevInProp) => !prevInProp)}>Click to Enter</button>
    </div>
  );
}

function CSSTransitionDemo() {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div>
      <CSSTransition classNames="my-node" nodeRef={nodeRef} in={inProp} timeout={500}>
        <div ref={nodeRef}>{"I'll receive my-node-* classes"}</div>
      </CSSTransition>
      <Button onClick={() => setInProp((prevInProp) => !prevInProp)}>Click to Enter</Button>
    </div>
  );
}

function SwitchTransitionDemo() {
  const [show, setShow] = useState(false);

  const helloRef = useRef<any>(null);
  const goodbyeRef = useRef<any>(null);
  const nodeRef = show ? goodbyeRef : helloRef;

  return (
    <SwitchTransition>
      <CSSTransition
        classNames="fade"
        key={show ? 'Goodbye, world!' : 'Hello, world!'}
        nodeRef={nodeRef}
        addEndListener={(done: any) => {
          return nodeRef?.current?.addEventListener?.('transitionend', done, false);
        }}
      >
        <Button ref={nodeRef} onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? 'Goodbye, world!' : 'Hello, world!'}
        </Button>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default function TransitionDemo() {
  return (
    <div className="w-full h-100 flex flex-col space-y-xl">
      <Space size="large">
        Transition: <PlainTransitionDemo />
      </Space>
      <Space size="large">
        CSSTransition: <CSSTransitionDemo />
      </Space>
      <Space size="large">
        SwitchTransition: <SwitchTransitionDemo />
      </Space>
    </div>
  );
}
