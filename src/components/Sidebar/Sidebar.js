import React, { useState } from "react";
import NotesList from "./NotesList";
import { Input } from "antd";
const { Search } = Input;

const Sidebar = (props) => {
  const [searchInput, setSearchInput] = useState();
  console.log(searchInput);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div>
        <Search
          placeholder="lets find a note..."
          onChange={handleChange}
        />
      </div>
      <NotesList searchInput={searchInput} />
    </>
  );
};

export default Sidebar;
