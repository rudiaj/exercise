import React, { memo } from "react";
import styled from "styled-components";

import TableRow from "./TableRow";

const Wrapper = styled.div`
  height: 100%;
  max-height: calc(100vh - 200px);
  overflow: auto;
  overscroll-behavior: contain;
  margin: 1rem 0;
`;

const Table = ({ data }) => {
  return (
    <Wrapper>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.length
            ? data.map((item) => <TableRow key={item.id} item={item} />)
            : null}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default memo(Table);
