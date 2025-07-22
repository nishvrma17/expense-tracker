import React from "react";

function ExpenseFilter({ filter, setFilter }) {
  return (
    <input
      className="filter"
      type="text"
      placeholder="🔍 Filter by title"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

export default ExpenseFilter;
