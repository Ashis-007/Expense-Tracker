import React from "react";
import Provider from "./context/Provider";
import Form from "./components/Form";

const App = () => {
  return (
    <Provider>
      <div className="App">
        <h1>Expense Tracker</h1>
        <Form />
      </div>
    </Provider>
  );
};

export default App;
