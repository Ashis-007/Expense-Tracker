import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import Transaction from "./Transaction";
import "../css/History.css";

const History = () => {
  const [data, setData] = useContext(Context);
  let storedData = null;

  const fetchData = () => {
    storedData = JSON.parse(localStorage.getItem("data"));
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="History">
      <h2>History</h2>
      {storedData && (
        <div>
          {storedData.map((transaction, index) => (
            <Transaction
              amount={transaction.amount}
              text={transaction.text}
              isExpense={transaction.isExpense}
              date={transaction.date}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );

  /* return (
    <div className="History">
      <h2>History</h2>

      <div>
        {storedData.map((transaction, index) => (
          <Transaction
            amount={transaction.amount}
            text={transaction.text}
            isExpense={transaction.isExpense}
            date={transaction.date}
            key={index}
          />
        ))}
      </div>
    </div>
  ); */
};

export default History;
