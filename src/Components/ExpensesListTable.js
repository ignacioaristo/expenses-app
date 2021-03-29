import React, { Fragment } from "react";
import { MdDelete } from "react-icons/md";

const ExpensesListTable = (props) => {
  return (
    <div>
      <Fragment>
      <tr className="expense-line-table-tr">
          <td className="table-data">{props.item.concept}</td>
          <div className="table-data-second-column">
            <td className="table-data">{`$${props.item.amount}`}</td>
            <button
              className="table-data delete-button"
              onClick={() => props.deleteExpense(props.item.id)}
            >
              <MdDelete />
            </button>
          </div>
        </tr>
      </Fragment>
    </div>
  );
};

export default ExpensesListTable;
