import React, { createContext, useState, useEffect } from "react";
import db from "./db";

const NotesContext = createContext();

const NotesProvider = (props) => {
  const [state, setState] = useState([]);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [openNote, setOpenNote] = useState({
    id: "",
    title: "",
    text: "",
  });

  useEffect(() => {
    const getPosts = async () => {
      let notes = await db.notes.toArray();
      setState(notes);
    };
    getPosts();
  }, []);

  const handleAddNewNote = (title, text) => {
    if (title !== "" && text !== "") {
      const note = {
        title,
        text,
      };
      db.notes.add(note).then(async () => {
        let notes = await db.notes.toArray();
        setState(notes);
      });
    }
  };

  const handleDeleteNote = (id) => {
    db.notes.delete(id).then(async () => {
      let notes = await db.notes.toArray();
      setState(notes);
    });
    setIsNoteOpen(false);
  };

  const handleUpdateNote = (id, title, text) => {
    db.notes.update(id, { title, text }).then(async () => {
      let notes = await db.notes.toArray();
      setState(notes);
    });
    setIsNoteOpen(false);
  };

  const handleOpenNote = (id, title, text) => {
    setIsNoteOpen(true);
    setOpenNote({
      id,
      title,
      text,
    });
  };

  const clearOpenNote = () => {
    setOpenNote({
      title: "",
      text: "",
      date: "",
    });
  };

  const changeOpenNoteTitleHandler = (title) => {
    setOpenNote((prevState) => ({
      ...prevState,
      title,
    }));
  };

  const changeOpenNoteTextHandler = (text) => {
    setOpenNote((prevState) => ({
      ...prevState,
      text,
    }));
  };

  return (
    <NotesContext.Provider
      value={{
        state,
        handleAddNewNote,
        handleOpenNote,
        handleDeleteNote,
        handleUpdateNote,
        isNoteOpen,
        openNote,
        changeOpenNoteTitleHandler,
        changeOpenNoteTextHandler,
        clearOpenNote,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
