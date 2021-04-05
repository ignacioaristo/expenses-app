import React, { Fragment, useState } from "react";
import { MdDelete } from "react-icons/md";

const ExpensesListTable = (props) => {

  const [date, setDate] = useState(new Date().toLocaleDateString());

  return (
    <div>
      <Fragment>
      <tr className="expense-line-table-tr">
          <td className="table-data">{date}</td>
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
