import React, { useState } from "react";
import NotesList from "./NotesList";
import SearchField from "./SearchField";
import styled from "styled-components";

const Sidebar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <SearchField handleChange={handleChange} />
      <NoteListWrapper>
        <NotesList search={search} />
      </NoteListWrapper>
    </>
  );
};

export default Sidebar;

const NoteListWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
