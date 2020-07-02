import React, { useState, useContext, useEffect } from "react";
import { NotesContext } from "../../context";
import NotesWorkspace from "./NotesWorkspace";

const NotesWorkspaceContainer = (props) => {
  const context = useContext(NotesContext);
  const {
    isNoteOpen,
    openNote,
    OpenNoteChanger,
    handleAddNewNote,
    handleDeleteNote,
    handleUpdateNote,
    clearOpenNote,
  } = context;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  console.log(context.openNote, " ITE THEME");

  useEffect(() => {
    if (isNoteOpen) {
      setTitle(openNote.title);
      setText(openNote.text);
    } else {
      setTitle("");
      setText("");
    }
  }, [openNote.title, openNote.text, isNoteOpen]);

  const changeHandler = (prop) => (e) => {
    if (isNoteOpen) {
      OpenNoteChanger(prop, e.target.value);
    }
    prop === "title" ? setTitle(e.target.value) : setText(e.target.value);
  };

  const handleClick = (action) => () => {
    switch (action) {
      case "add":
        handleAddNewNote(title, text);
        setTitle("");
        setText("");
        clearOpenNote();
        break;
      case "delete":
        handleDeleteNote(openNote.id);
        break;
      case "update":
        handleUpdateNote(openNote.id, title, text);
        break;
      default:
        break;
    }
  };

  return (
    <NotesWorkspace
      changeHandler={changeHandler}
      handleClick={handleClick}
      isNoteOpen={isNoteOpen}
      title={title}
      text={text}
    />
  );
};

export default NotesWorkspaceContainer;
