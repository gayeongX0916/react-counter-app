import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);

  const handleonClick = (value) => {
    setCount(count+value);
  };

  return (
    <div className="counter-app">
      <h1>Simple Counter</h1>
      <div className="counter-section">
        <section className="counter-viewer">
          <Viewer count={count} />
        </section>
        <section className="counter-controller">
          <Controller handleonClick={handleonClick} />
        </section>
      </div>
    </div>
  );
}

export default App;
