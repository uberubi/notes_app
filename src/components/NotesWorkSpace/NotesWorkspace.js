import React from "react";
import styled from "styled-components";
import img from "../../img/paper.png";

const NotesWorkspace = ({
  changeHandler,
  handleClick,
  isNoteOpen,
  title,
  text,
}) => {
  return (
    <>
      <Input
        id="title"
        value={title}
        placeholder="Note's title.."
        onChange={changeHandler('title')}
      />
      <Textarea
        id="text"
        type="text"
        value={text}
        onChange={changeHandler('text')}
      />
      {isNoteOpen && (
        <>
          <ButtonDelete onClick={handleClick('delete')}>DELETE</ButtonDelete>
          <ButtonUpdate onClick={handleClick('update')}>UPDATE</ButtonUpdate>
        </>
      )}
      <ButtonDone onClick={handleClick('add')}>ADD NEW</ButtonDone>
    </>
  );
};

export default NotesWorkspace;

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

const ButtonDone = styled.button`
  margin-left: 10px;
`;

const ButtonDelete = styled.button``;

const ButtonUpdate = styled.button`
  margin-left: 10px;
`;
