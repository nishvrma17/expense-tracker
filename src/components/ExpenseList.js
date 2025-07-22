import React from "react";
import "./ExpenseList.css";

const ExpenseList = ({ expenses, onDelete, total }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div className="expense-item" key={expense.id}>
          <div className="expense-title">{expense.title}</div>
          <div className="expense-right">
            <div className="expense-amount">₹{expense.amount.toFixed(2)}</div>
            <button className="delete-button" onClick={() => onDelete(expense.id)}>
              ❌
            </button>
          </div>
        </div>
      ))}
      <div className="expense-summary">
        <strong>Total:</strong>
        <span>₹{total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ExpenseList;