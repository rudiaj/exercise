import React, { memo } from "react";

const TableRow = ({ item }) => {
  const date = new Date(item.updated);
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>
        <span className={item.active ? "text-success" : "text-danger"}>
          {item.active ? "Active" : "Inactive"}
        </span>
      </td>
      <td>{date.toDateString()}</td>
    </tr>
  );
};

export default memo(TableRow);
