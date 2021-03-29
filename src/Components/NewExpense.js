import React, { useState } from "react";
import uuid from "react-uuid";

const NewExpense = (props) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = (e) => {
    setNewItem(e.target.concept);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.amount.value > 0){
      props.handleNewExpense({
        id: uuid(),
        concept: e.target.concept.value,
        amount: e.target.amount.value
      });
      e.target.concept.value = "";
      e.target.amount.value = "";
    } else {
      alert("Invalid amount");
    }
  };

  //Check if the input are filled

  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          className="input-form"
          onChange={handleChange}
          name="concept"
          type="text"
          placeholder="Concept"
        />
        <input
          className="input-form"
          onChange={handleChange}
          name="amount"
          type="number"
          placeholder="Amount"
        />
        <button
          // disabled={newItem.isAvailable ? true : "disabled"}
          className="input-form button"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default NewExpense;
