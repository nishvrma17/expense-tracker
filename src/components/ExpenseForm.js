import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;