import React from "react";

const SearchField = ({ handleChange }) => {
  return (
    <div>
      <input
        placeholder="lets find a note..."
        onChange={handleChange}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default SearchField;
