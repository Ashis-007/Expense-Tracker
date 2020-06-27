import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import Transaction from "./Transaction";
import "../css/History.css";

const History = () => {
  const [data] = useContext(Context);

  return (
    <div className="History">
      <h2>History</h2>
      <div>
        {data.map((transaction, index) => (
          <Transaction
            amount={transaction.amount}
            text={transaction.text}
            date={transaction.date}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
