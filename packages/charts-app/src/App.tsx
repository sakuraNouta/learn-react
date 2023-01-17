import { AutoChart } from "@antv/auto-chart";
import { Input } from "antd";

const defaultData = [
  { price: 100, type: "A" },
  { price: 120, type: "B" },
  { price: 150, type: "C" },
];

function App() {


  return (
    <div className="w-screen h-screen flex p-xl">
      <div className="w-md flex-shrink-0">
        <Input.TextArea className="!h-full" />
      </div>
      <div className="w-full h-full ">
        <AutoChart data={defaultData} language={"zh-CN"} />
      </div>
    </div>
  );
}

export default App;
