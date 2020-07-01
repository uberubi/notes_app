import React, { useState } from "react";
import NotesList from "./NotesList";
import { Input } from "antd";
const { Search } = Input;

const Sidebar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div>
        <Search placeholder="lets find a note..." onChange={handleChange} />
      </div>
      <NotesList search={search} />
    </>
  );
};

export default Sidebar;
