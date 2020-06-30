import React from "react";
import * as moment from "moment";
import styled from "styled-components";
import { NotesContext } from "../../context";

const NotesListItem = ({ search, note }) => {
  const { title, text, date } = note;
  if (
    search !== "" &&
    !text.toLowerCase().includes(search.toLowerCase()) &&
    !title.toLowerCase().includes(search.toLowerCase())
  ) {
    return null;
  }

  return (
    <NotesContext.Consumer>
      {(value) => {

        const handleClick = () => {
          value.handleOpenNote(title, text, date)
        }

        return (
          <Wrapper onClick={handleClick}>
            <div className="sidebar-item__title">{title}</div>
            <div className="sidebar-item__text">{text}</div>
            <div className="sidebar-item__date">
              {moment(date.toString()).calendar()}
            </div>
          </Wrapper>
        );
      }}
    </NotesContext.Consumer>
  );
};

export default NotesListItem;

const Wrapper = styled.div`
  border-bottom: 1px solid grey;
  &:hover {
    border: 1px solid grey;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;