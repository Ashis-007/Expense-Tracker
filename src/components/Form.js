import React, { useContext, useState } from "react";
import Context from "../context/Context";

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

  const handleSubmit = () => {
    amount > 0 ? setIsExpense(false) : setIsExpense(true);

    const expense = { amount, text, isExpense };
    // add expense to data context
    setData((data) => [...data, expense]);
    clearState();
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <div className="Form__amount">
          <label for="amount">Amount</label>
          <p>(positive = income, negative = expense)</p>
          <input
            name="amount"
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div className="Form__text">
          <label for="text">Description</label>
          <input
            name="text"
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
