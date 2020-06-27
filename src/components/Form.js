import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import "../css/Form.css";
import moment from "moment";

const Form = () => {
  const [data, setData] = useContext(Context);
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("");

  const clearState = () => {
    setAmount("");
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newAmount = parseInt(amount, 10);
    let date = moment().format("DD/MM/YYYY");
    const expense = { amount: newAmount, text, date };
    // add to data context
    setData((data) => [...data, expense]);
    clearState();
  };

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
            required
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
            required
          />
          <button className="btn Form__submit">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
