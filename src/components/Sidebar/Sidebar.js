import React from "react";
import NotesList from "./NotesList";
import SearchField from "./SearchField";

const Sidebar = props => {
  return (
    <>
      <SearchField />
      <NotesList/>
    </>
  );
};

export default Sidebar;
