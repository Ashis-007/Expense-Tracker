import React, { useContext, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import History from "./components/History";
import Context from "./context/Context";

const App = () => {
  const [data, setData] = useContext(Context);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("data"));
    storedData === null
      ? localStorage.setItem("data", JSON.stringify(storedData))
      : setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <Header />
      <Form />
      <History />
    </div>
  );
};

export default App;
