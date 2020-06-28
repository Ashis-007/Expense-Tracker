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
        {data.length > 1 &&
          data.map(
            (transaction, index) =>
              index >= 1 && (
                <Transaction
                  amount={transaction.amount}
                  text={transaction.text}
                  date={transaction.date}
                  key={index}
                />
              )
          )}
      </div>
    </div>
  );
};

export default History;
