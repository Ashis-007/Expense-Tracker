import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import Transaction from "./Transaction";
import "../css/History.css";

const History = () => {
  const [data, setData] = useContext(Context);

  const clearHistory = () => {
    if (window.confirm("Do you want to delete your existing history?")) {
      setData([
        {
          amount: 0,
          text: "", // description
          date: "",
        },
      ]);
      localStorage.removeItem("data");
    } else return;
  };

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
        {data.length > 1 && (
          <button className="btn History__clear" onClick={clearHistory}>
            Clear History
          </button>
        )}
      </div>
    </div>
  );
};

export default History;
