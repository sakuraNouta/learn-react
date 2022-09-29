import React, { useState } from 'react';

const Text = ({ value }: { value: string }) => (
  <span className="text-blue-500">{value}</span>
);

const MemoText = React.memo(Text);

const Input = ({ placeholder }: { placeholder?: string }) => {
  const [text, setText] = useState(placeholder || '');
  return (
    <div className="border p-4 border-gray-400 space-y-4">
      <input
        className="border"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <p>
        Preview: <Text value={text} />
      </p>
    </div>
  );
};

const MemoInput = React.memo(Input);

export function RerenderDemo() {
  const [text, setText] = useState('');
  return (
    <div className="flex flex-col w-full justify-center items-center space-y-10">
      <div>
        Out:
        <input
          className="border"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
      </div>
      <Input placeholder="没有memo, 父组件状态更新就会重新渲染" />
      <MemoInput placeholder="memo, 父组件状态更新不会重新渲染" />
      <Text value="I'm Not memo" />
      <MemoText value="I'm In Memo" />
    </div>
  );
}
