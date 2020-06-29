import React from "react";
import { NotesContext } from "../../context";
import NotesListItem from "./NoteListItem";
import { Input } from "antd";
const { Search } = Input;

const NotesList = ({ searchInput }) => {
  return (
    <NotesContext.Consumer>
      {(value) => {
        if (value.state.notes.length === 0) {
          return <div className="no-items-div">there's no items yet</div>;
        } else {
          return value.state.notes.map((note) => {
            if (
              searchInput &&
              note.title.toLowerCase().includes(searchInput) ||
              note.text.toLowerCase().includes(searchInput)
            )
              return (
                <NotesListItem
                  key={note.title}
                  title={note.title}
                  text={note.text}
                  date={note.date}
                />
              );
          });
        }
      }}
    </NotesContext.Consumer>
  );
};

export default NotesList;
