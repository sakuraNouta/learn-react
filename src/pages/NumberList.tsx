export interface NumberListProps {
  numbers: Array<number>;
}

export default function NumberList(props: NumberListProps) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li className="border p-4 m-4 bg-light-800 cursor-pointer" key={number}>
      {number}
    </li>
  ));
  return <ul className="m-auto">{listItems}</ul>;
}
