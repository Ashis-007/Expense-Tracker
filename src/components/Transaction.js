import React from "react";
import "../css/Transaction.css";
const Transaction = ({ amount, text, date }) => {
  return (
    <div
      className="Transaction"
      style={{ borderRight: `4px solid ${amount < 0 ? "red" : "green"}` }}
    >
      <p className="Transaction__amount">&#x20B9; {Math.abs(amount)}</p>
      <p className="Transaction__text">{text}</p>
      <p className="Transaction__date">{date}</p>
    </div>
  );
};

export default Transaction;
