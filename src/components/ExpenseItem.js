import React from "react";

function ExpenseItem({ expense, onDelete }) {
  return (
    <li className="expense-item">
      <span>{expense.title}</span>
      <span>₹{expense.amount.toFixed(2)}</span>
      <button onClick={() => onDelete(expense.id)}>❌</button>
    </li>
  );
}

export default ExpenseItem;
