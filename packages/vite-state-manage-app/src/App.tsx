import CharacterCounter from "./pages/recoil/CharacterCounter";
import BearDemo from "./pages/zustand/BearDemo";
import CounterDemo from "./pages/zustand/CounterDemo";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col p-xl">
      <CounterDemo />
      <BearDemo />
      <CharacterCounter />
    </div>
  );
}

export default App;
