import React, { useState } from "react";
import styled from "styled-components";
import img from "../../img/paper.png";
import { NotesContext } from "../../context";

const Workspace = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  console.log(date);
  return (
    <NotesContext.Consumer>
      {(value) => (
        <>
          <Input
            placeholder="Note's title.."
            onChange={(e) => {
              setTitle(e.target.value);
              setDate(new Date());
            }}
          />
          <Textarea
            onChange={(e) => {
              setText(e.target.value);
              setDate(new Date());
            }}
          />
          <Button onClick={() => value.handleAddNewNote(title, text, date)}>
            DONE
          </Button>
        </>
      )}
    </NotesContext.Consumer>
  );
};

export default Workspace;

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
