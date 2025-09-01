import { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("Grey");

  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold mb-8">
        This is a basic revision project
      </h1>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setColor("Green")}
          className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          Green
        </button>

        <button
          onClick={() => setColor("Yellow")}
          className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("Blue")}
          className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("Olive")}
          className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          Olive
        </button>

        <button
          onClick={() => setColor("Red")}
          className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          Red
        </button>
      </div>
    </div>
  );
};

export default App;
