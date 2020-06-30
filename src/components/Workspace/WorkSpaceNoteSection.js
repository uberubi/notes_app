import React, { useState } from "react";
import styled from "styled-components";
import img from "../../img/paper.png";

const WorkSpaceNoteSection = ({
  isNoteOpen,
  openNoteTitle,
  openNoteText,
  handleAddNewNote,
  changeOpenNoteTitleHandler,
  changeOpenNoteTextHandler,
  clearOpenNote
}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const changeTitleHandler = (e) => {
    if (isNoteOpen) {
      const date = new Date()
      changeOpenNoteTitleHandler(e.target.value, date.toString())
    } else {
      setTitle(e.target.value)
    }
  }

  const changeTextHandler = (e) => {
    if (isNoteOpen) {
      const date = new Date()
      changeOpenNoteTextHandler(e.target.value, date.toString())
    } else {
      setText(e.target.value)
    }
  }

  const handleClick = () => {
    handleAddNewNote(title, text, date);
    setTitle("");
    setText("");
    setDate("");
    clearOpenNote()
  };
  console.log("text: " + text, "title: " + title);
  return (
    <>
      <Input
        id="title"
        value={isNoteOpen ? openNoteTitle : title}
        placeholder="Note's title.."
        onChange={changeTitleHandler}
      />
      <Textarea
        id="text"
        type="text"
        value={isNoteOpen ? openNoteText : text}
        onChange={changeTextHandler}
      />
      <Button onClick={handleClick}>DONE</Button>
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

const Button = styled.button`
  margin-left: 10%;
  width: 80%;
`;