import React, { useState } from "react";
import { Input } from "antd";
import { NotesContext } from "../../context";

const SearchField = (props) => {
  const { Search } = Input;
  const [searchInput, setSearchInput] = useState();
  console.log(searchInput);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <NotesContext.Consumer>
      {(value) => {
        // debugger
        // value.state.notes.filter((note) =>
        //   note.title.toLowerCase().includes(searchInput.toLowerCase())
        // );
        console.log(value)
        return (
          <div>
            <Search placeholder="lets find a note..." onChange={handleChange} value="o" />
          </div>
        );
      }}
    </NotesContext.Consumer>
  );
};

export default SearchField;
