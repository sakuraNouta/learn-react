import React, { useRef } from 'react';
import { useImperativeHandle } from 'react';
import { useState } from 'react';

export class RefDomClass extends React.Component {
  textInput: React.RefObject<any>;
  constructor(props: {}) {
    super(props);
    this.textInput = React.createRef<any>();
  }
  focusTextInput() {
    this.textInput.current?.focus();
  }
  render() {
    return (
      <div className="flex flex-col m-auto">
        <input className="border mb-4" type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={() => this.focusTextInput()}
        />
      </div>
    );
  }
}

export function RefDomFun() {
  const textInput = useRef<any>();

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div className="flex flex-col m-auto">
      <input className="border mb-4" type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}

export class RefDomCallback extends React.Component {
  textInput: any;
  setTextInputRef: (element: any) => void;
  focusTextInput: () => void;
  constructor(props: {}) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = (element: any) => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      this.textInput && this.textInput.focus();
    };
  }
  componentDidMount() {
    this.focusTextInput();
  }
  render() {
    return (
      <div className="flex flex-col m-auto">
        <input className="border mb-4" type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

/**
 * 父组件调用子组件中的方法
 */
// eslint-disable-next-line react/display-name
const ChildrenComponentFC = React.forwardRef((_, ref) => {
  const [value, setValue] = useState('default');

  function handleChange(e: any) {
    const v = e.target.value;
    console.log('handleInput -> v', v);
    setValue(v);
  }

  useImperativeHandle(ref, () => ({
    setValue
  }));

  return (
    <input className="border" value={value} onChange={handleChange}></input>
  );
});

function ParentComponent() {
  type Refs = { [k: string]: any };

  const refs: Refs = {
    ref1: useRef(),
    ref2: useRef()
  };

  return (
    <div className="flex flex-col m-auto">
      {['ref1', 'ref2'].map((item: keyof Refs) => {
        const ref = refs[item];
        return (
          <>
            {React.createElement(ChildrenComponentFC, {
              ref
            })}
            <button
              className="border mt-4"
              onClick={() => {
                console.log('ParentComponent -> ref', ref);
                ref.current.setValue(+new Date());
              }}
            >
              Current Time
            </button>
          </>
        );
      })}
    </div>
  );
}

export default ParentComponent;
