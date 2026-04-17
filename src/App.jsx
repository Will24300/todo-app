import { useState } from "react";
import InputForm from "./components/InputForm";
import Displayer from "./components/Displayer";

function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  return (
    <section className="flex flex-col justify-center items-center">
      <InputForm setItems={setItems} />
      <Displayer items={items} setItems={setItems} />
    </section>
  );
}

export default App;
