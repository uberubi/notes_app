import React, { createContext, useState, useEffect } from "react";
import db from "./db";

const NotesContext = createContext();

const NotesProvider = (props) => {
  const [state, setState] = useState({ notes: [] });

  useEffect(() => {
    db.table("notes")
      .toArray()
      .then((notes) => {
        setState({ notes });
      });
  }, []);

  const handleAddNewNote = (title, text, date) => {
    const note = {
      title,
      text,
      date,
    };
    db.table("notes")
      .add(note)
      .then((id) => {
        const newList = [...state.notes, Object.assign({}, note, { id })];
        setState({ notes: newList });
      });
  };

  console.log(state);

  return (
    <NotesContext.Provider value={{ state, handleAddNewNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
