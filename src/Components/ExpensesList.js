import React from "react";
import ExpensesListTable from "./ExpensesListTable";
import "../styles.css";

const ExpensesList = (props) => {
  return (
    <div>
      {props.list.map((item) => (
        <ExpensesListTable key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ExpensesList;
