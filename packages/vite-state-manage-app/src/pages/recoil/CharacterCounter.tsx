import { Input } from "antd";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState",
  default: "",
});

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  const onChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Input type="text" value={text} onChange={onChange} />
      <p>Echo: {text}</p>
      <p>Character Count: {count}</p>
    </div>
  );
}

export default function CharacterCounter() {
  return (
    <div className="border p-sm mt-sm">
      <TextInput />
    </div>
  );
}
