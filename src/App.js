import React, { useContext, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import History from "./components/History";
import Context from "./context/Context";

const App = () => {
  const [data, setData] = useContext(Context);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  return (
    <div className="App">
      <Header />
      <Form />
      <History />
    </div>
  );
};

export default App;
