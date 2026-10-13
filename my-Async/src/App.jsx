import { useState } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState("");

  const API = "https://jsonplaceholder.typicode.com/posts";
   // GET
  async function getData() {
    const response = await axios.get(`${API}/1`);
    setResult(JSON.stringify(response.data));
  }

  // POST
  async function postData() {
    const response = await axios.post(API, {
      title: "Hello Mohid",
      body: "Learning Axios",
      userId: 1,
    });

    setResult(JSON.stringify(response.data));
  }

  // PUT
  async function putData() {
    const response = await axios.put(`${API}/1`, {
      title: "Updated Title",
      body: "Updated Data",
      userId: 1,
    });

    setResult(JSON.stringify(response.data));
  }

  // DELETE
  async function deleteData() {
    const response = await axios.delete(`${API}/1`);
    setResult("Post deleted successfully!");
  }

  return (
    <div>
      <h1>Axios API Practice</h1>

      <button onClick={getData}>GET</button>{" "}
      <button onClick={postData}>POST</button>{" "}
      <button onClick={putData}>PUT</button>{" "}
      <button onClick={deleteData}>DELETE</button>


      <h2>{data}</h2>
    </div>
  );
}

export default App;
