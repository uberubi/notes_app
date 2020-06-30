import React from "react";
import { NotesContext } from "../../context";
import NotesListItem from "./NoteListItem";

const NotesList = ({ search }) => {
  
  return (
    <NotesContext.Consumer>
      {((value) => {
        if (value.state.notes.length === 0) {
          return <div className="no-items-div">there's no items yet</div>;
        } else {
          return value.state.notes.map((note) => {
              return (
                <NotesListItem
                  key={note.id}
                  search={search}
                  note={note}
                />
              );
          });
        }
      })
      }
    </NotesContext.Consumer>
  );
};

export default NotesList;
