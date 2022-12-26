import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const callApi = async () => {
    axios.get("/main").then((res) => console.log(res.data.test));
  };

  useEffect(() => {
    callApi();
  }, []);

  return <div className="App">test</div>;
}

export default App;
