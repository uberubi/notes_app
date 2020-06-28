import React from "react";
import { NotesContext } from "../../context";
import NotesListItem from "./NoteListItem";


const NotesList = (props) => {
  return (
    <NotesContext.Consumer>
    {(value) => {
      return value.state.notes.map((note) => (
        <NotesListItem
          key={note.title}
          title={note.title}
          text={note.text}
          date={note.date}
        />
      ));
    }}
    </NotesContext.Consumer>
  );
};

export default NotesList;
