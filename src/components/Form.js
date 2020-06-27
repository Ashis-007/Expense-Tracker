import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import "../css/Form.css";
import moment from "moment";

const Form = () => {
  const [data, setData] = useContext(Context);
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("");
  const [isExpense, setIsExpense] = useState(true);

  const clearState = () => {
    setAmount("");
    setText("");
    setIsExpense(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newAmount = parseInt(amount, 10);
    // positive -> income
    // negative -> expense
    newAmount > 0 ? setIsExpense(false) : setIsExpense(true);

    // TODO: handle date
    let date = moment().format("DD/MM/YYYY");
    const expense = { amount: newAmount, text, isExpense, date };
    // add to data context
    setData((data) => [...data, expense]);
    clearState();
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="Form">
      <h2>Add new transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="Form__amount">
          <label htmlFor="amount">Amount</label>
          <p>(positive = income, negative = expense)</p>
          <input
            name="amount"
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            placeholder="-500"
          />
        </div>
        <div className="Form__text">
          <label htmlFor="text">Description</label>
          <br />
          <input
            name="text"
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Lunch"
          />
          <button className="btn Form__submit">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
