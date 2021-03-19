import React, { Fragment } from "react";

const ExpensesListTable = (props) => {
  return (
    <div>
      <Fragment>
        <tr className="expense-line-table-tr">
          <td className="table-data">{props.item.concept}</td>
          <td className="table-data">{`$${props.item.amount}`}</td>
        </tr>
      </Fragment>
    </div>
  );
};

export default ExpensesListTable;
