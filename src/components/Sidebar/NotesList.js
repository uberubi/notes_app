import React, { useContext } from "react";
import { NotesContext } from "../../context";
import NotesListItem from "./NoteListItem";
import styled from "styled-components";

const NotesList = ({ search }) => {
  const context = useContext(NotesContext);

  if (context.state.length === 0) {
    return (
      <NoItemsWrapper className="no-items-div">
        {" "}
        there's no items yet...
      </NoItemsWrapper>
    );
  }

  return context.state.map((note) => (
    <NotesListItem key={note.id} search={search} note={note} />
  ));
};

export default NotesList;

const NoItemsWrapper = styled.div`
  margin-top: 20px;
  font-size: 24px;
  text-align: center;
  color: #14e8c8;
`;
