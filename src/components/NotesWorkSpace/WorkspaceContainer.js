import React, { useState, useContext, useEffect } from "react";
import { NotesContext } from "../../context";
import NotesWorkspace from "./Workspace";

const WorkspaceContainer = (props) => {
  const context = useContext(NotesContext);
  const {
    isNoteOpen,
    openNote,
    OpenNoteChanger,
    handleAddNewNote,
    handleDeleteNote,
    handleUpdateNote,
    handleClearField
  } = context;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    if (isNoteOpen) {
      setTitle(openNote.title);
      setText(openNote.text);
      setDate(openNote.date)
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
        break;
      case "delete":
        handleDeleteNote(openNote.id);
        break;
      case "update":
        handleUpdateNote(openNote.id, title, text);
        break;
      case "clear":
        handleClearField()
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
      date={date}
    />
  );
};

export default WorkspaceContainer;
