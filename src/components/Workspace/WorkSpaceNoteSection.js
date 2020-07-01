import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../../img/paper.png";

const WorkSpaceNoteSection = ({
  isNoteOpen,
  openNoteTitle,
  openNoteText,
  openNoteId,
  handleAddNewNote,
  handleDeleteNote,
  handleUpdateNote,
  changeOpenNoteTitleHandler,
  changeOpenNoteTextHandler,
  clearOpenNote,
}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // const [date, setDate] = useState("");

  useEffect(() => {
    if (isNoteOpen) {
      setTitle(openNoteTitle);
      setText(openNoteText);
    } else {
      setTitle("");
      setText("");
    }
  }, [openNoteTitle, openNoteText, isNoteOpen]);

  const changeTitleHandler = (e) => {
    if (isNoteOpen) {
      // const date = new Date()
      changeOpenNoteTitleHandler(e.target.value);
    }
    setTitle(e.target.value);
  };

  const changeTextHandler = (e) => {
    if (isNoteOpen) {
      // const date = new Date()
      changeOpenNoteTextHandler(e.target.value);
    }
    setText(e.target.value);
  };

  const handleDoneClick = () => {
    handleAddNewNote(title, text);
    setTitle("");
    setText("");
    clearOpenNote();
  };

  const handleDeleteClick = () => {
    handleDeleteNote(openNoteId);
  };

  const handleUpdateClick = () => {
    handleUpdateNote(openNoteId, title, text);
  };

  return (
    <>
      <Input
        id="title"
        value={title}
        placeholder="Note's title.."
        onChange={changeTitleHandler}
      />
      <Textarea
        id="text"
        type="text"
        value={text}
        onChange={changeTextHandler}
      />
      <ButtonDone onClick={handleDoneClick}>ADD NEW</ButtonDone>
      {isNoteOpen && (
        <>
          <ButtonDelete onClick={handleDeleteClick}>DELETE</ButtonDelete>
          <ButtonUpdate onClick={handleUpdateClick}>UPDATE</ButtonUpdate>
        </>
      )}
    </>
  );
};

export default WorkSpaceNoteSection;

const Input = styled.input`
  top: 0;
  right: -40;
  width: 100%;
  outline: none;
  z-index: 2;
`;

const Textarea = styled.textarea`
  height: 100%;
  width: 100%;
  resize: none;
  outline: none;
  background-image: url(${img});
`;

const ButtonDone = styled.button``;

const ButtonDelete = styled.button`
  margin-left: 10px;
`;

const ButtonUpdate = styled.button`
  margin-left: 10px;
`;
