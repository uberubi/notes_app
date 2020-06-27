import React from "react";
import styled from "styled-components";
import img from "../../img/paper.png";
import { NotesContext } from "../../context";

const NotesField = props => {
  return (
    <>
      <Textarea />
      <NotesContext.Consumer>
        {(value) => (
          <Button onClick={value.addNewNote}>DONE</Button>
        )}
      </NotesContext.Consumer>
    </>
  );
};

export default NotesField;

const Textarea = styled.textarea`
  position: relative;
  display: inline-flex;
  height: 100%;
  width: 100%;
  resize: none;
  outline: none;
  background-image: url(${img});
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
