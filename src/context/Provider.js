import React, { useState } from "react";
import Context from "./Context";

const Provider = (props) => {
  const [data, setData] = useState([
    {
      amount: 0,
      text: "", // description
      date: "",
    },
  ]);

  return (
    <Context.Provider value={[data, setData]}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
