
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/"
    );

    const result = await response.json();

    setData(result.name);
  }

  return (
    <div>
      <h1>Async Await</h1>

      <button onClick={getData}>Get Data</button>

      <h2>{data}</h2>
    </div>
  );
}

export default App;
