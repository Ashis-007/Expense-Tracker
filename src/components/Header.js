import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import "../css/Header.css";

const Header = () => {
  const [data] = useContext(Context);

  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const getDetails = () => {
    let newIncome = 0;
    let newExpense = 0;
    data.map((transaction) =>
      transaction.amount < 0
        ? (newExpense += transaction.amount)
        : (newIncome += transaction.amount)
    );
    setIncome(newIncome);
    setExpense(Math.abs(newExpense));
    setBalance(newIncome - Math.abs(newExpense));
  };

  useEffect(() => {
    getDetails();
  }, [data]);

  return (
    <div className="Header">
      <h1 className="Header__heading">Expense Tracker</h1>
      <h2 className="Header__balance">
        <p>Your Balance</p> &#x20B9; {balance}
      </h2>
      <div className="Header__card">
        <div className="Header__card__income">
          <p>Received</p>
          <p id="income">&#x20B9; {income}</p>
        </div>
        <div className="Header__card__separator"></div>
        <div className="Header__card__expense">
          <p>Spent</p>
          <p id="expense">&#x20B9; {expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
