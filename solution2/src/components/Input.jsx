import React, { memo } from "react";

const Input = ({ onChange }) => {
  return (
    <div className="input-group input-group-md mt-5 mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-md">
          Filter by ID:
        </span>
      </div>
      <input
        type="number"
        className="form-control"
        aria-label="medium"
        aria-describedby="inputGroup-sizing-sm"
        onChange={onChange}
      />
    </div>
  );
};

export default memo(Input);
