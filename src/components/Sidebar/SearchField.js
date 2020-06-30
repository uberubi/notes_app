import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchField = ({ handleSearch }) => {
  return (
    <div>
      <Search placeholder="lets find a note..." onChange={handleSearch} />
    </div>
  );
};

export default SearchField;
