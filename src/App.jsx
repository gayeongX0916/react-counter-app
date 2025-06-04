import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);

  const handleonClick = (value) => {
    setCount(count + value);
  };

  return (
    <main className="counter-app">
      <h1>Simple Counter</h1>
      <section className="counter-section">
        <Viewer count={count} />
        <Controller handleonClick={handleonClick} />
      </section>
    </main>
  );
}

export default App;
