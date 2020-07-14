import React, { memo } from "react";

const Pagination = ({ onClick, currentPage, loading }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            disabled={loading}
            type="button"
            className="page-link"
            onClick={() => onClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            disabled={loading}
            type="button"
            className="page-link"
            onClick={() => onClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Pagination);
