import React from "react";
import "../styles.css";

const TotalAmount = (props) => {
  let totalExpenses = 0;
  for (let x in props.list) {
    totalExpenses += parseInt(props.list[x].amount, 10);
  }
  console.log(totalExpenses);

  if (props.list.length !== 0) {
    return (
      <div className="total-amount-container">
        <p className="total-amount">Total: {`$${totalExpenses}`}</p>
      </div>
    );
  } else {
    return <div>You have no expenses</div>;
  }
};
export default TotalAmount;
