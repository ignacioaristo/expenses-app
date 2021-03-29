import React from "react";
import ExpensesListTable from "./ExpensesListTable";
import "../styles.css";

const ExpensesList = (props) => {

  const deleteExpense = (id) => {
    props.setList([...props.list.filter((expense)=>expense.id !== id)]);
  }

  return (
    <div>
      {props.list.map((item) => (
        <ExpensesListTable key={item.id} item={item} deleteExpense={deleteExpense} />
      ))}
    </div>
  );
};

export default ExpensesList;
