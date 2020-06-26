import React, { useState } from "react";
import Context from "./Context";

const Provider = () => {
  const [data, setData] = useState([
    {
      amount: "",
      text: "", // description
      isExpense: true, // expense or income
    },
  ]);

  return <Context.Provider value={[data, setData]}></Context.Provider>;
};

export default Provider;
