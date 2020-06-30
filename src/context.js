import React, { createContext, useState, useEffect } from "react";
import db from "./db";

const NotesContext = createContext();

const NotesProvider = (props) => {
  const [state, setState] = useState({ notes: [] });
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [openNote, setOpenNote] = useState({
    title: "",
    text: "",
    date: "",
  });

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

  const handleOpenNote = (title, text, date) => {
    setIsNoteOpen(true);
    setOpenNote({
      title,
      text,
      date,
    });
  };

  const clearOpenNote = () => {
    setOpenNote({
      title: "",
      text: "",
      date: "",
    })
  }

  const changeOpenNoteTitleHandler = (title, date) => {
    setOpenNote((prevState) => ({
      ...prevState,
      title,
      date
    }));
  };

  const changeOpenNoteTextHandler = (text, date) => {
    setOpenNote((prevState) => ({
      ...prevState,
      text,
      date
    }));
  };

  console.log(Object.values(openNote)  + '   NOTE OPENED');

  return (
    <NotesContext.Provider
      value={{
        state,
        handleAddNewNote,
        handleOpenNote,
        isNoteOpen,
        openNote,
        changeOpenNoteTitleHandler,
        changeOpenNoteTextHandler,
        clearOpenNote
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
