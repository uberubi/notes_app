import React from "react";
import styled from "styled-components";
import * as moment from "moment";

const Workspace = ({ changeHandler, handleClick, isNoteOpen, title, text, date }) => {
  return (
    <WorkspaceWrapper>
      <h3>Title:</h3>
      <Input
        id="title"
        type="title"
        value={title}
        onChange={changeHandler("title")}
        autoComplete="off"
        title={title}
      />

      {isNoteOpen && (
        <>
        <div>{moment(date.toString()).calendar()}</div>
          <Button
            onClick={handleClick("delete")}
            className="btn btn-danger btn-sm"
          >
            DELETE
          </Button>
          <Button
            onClick={handleClick("update")}
            className="btn btn-warning btn-sm"
          >
            UPDATE
          </Button>
          <Button onClick={handleClick('clear')} className="btn btn-secondary btn-sm">CLEAR INPUT</Button>
          
        </>
      )}
      <Button onClick={handleClick("add")} className="btn btn-success btn-sm">
        ADD NEW
      </Button>
      <h3>Text:</h3>
      <Textarea
        id="text"
        type="text"
        value={text}
        onChange={changeHandler("text")}
      />
    </WorkspaceWrapper>
  );
};

export default Workspace;

const WorkspaceWrapper = styled.div`
  h3 {
    margin-top: 10px;
    color: #14e8c8;
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  background: var(--workSpaceColor);
  color: white;
  border: 2px solid #40b3a2;
  font-size: 30px;
`;

const Textarea = styled.textarea`
  font-size: 20px;
  width: 100%;
  min-height: 500px;
  resize: none;
  outline: none;
  background: var(--workSpaceColor);
  
  color: white;
  border: 2px solid #40b3a2;
`;

const Button = styled.button`
  margin-top: 10px;
  margin-right: 10px;
`;
