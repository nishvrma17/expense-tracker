import React from "react";

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((acc, exp) => acc + exp.amount, 0);
  return (
    <div className="summary">
      <strong>Total Spending:</strong> ₹{total.toFixed(2)}
    </div>
  );
}

export default ExpenseSummary;
