import React, { useState } from "react";
import NewExpense from "./NewExpense";
import ExpensesList from "./ExpensesList";
import TotalAmount from "./TotalAmount";
import "../styles.css";

const Container = () => {
  const [list, setList] = useState([]);

  const handleNewExpense = (addItem) => {
    setList([...list, addItem]);
  };
  console.log(list);
  return (
    <div className="container">
        <NewExpense
        className="container-child"
        handleNewExpense={handleNewExpense}
        />
        <ExpensesList className="container-child" list={list} setList={setList} />
        <TotalAmount list={list} />
    </div>
  );
};

export default Container;
