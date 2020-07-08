import React, { useContext } from "react";
import * as moment from "moment";
import { NotesContext } from "../../context";
import styled from "styled-components";

const NotesListItem = ({ search, note }) => {
  const { id, title, text, date } = note;
  const context = useContext(NotesContext);
  if (
    search !== "" &&
    !text.toLowerCase().includes(search.toLowerCase()) &&
    !title.toLowerCase().includes(search.toLowerCase())
  ) {
    return null;
  }

  const handleClick = () => {
    context.handleOpenNote(id, title, text, date);
  };

  return (
    <CardWrapper onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <hr className='card-separator'/>
        <p className="card-text">{text}</p>
        <p className="card-date">{moment(date.toString()).calendar()}</p>
      </div>
    </CardWrapper>
  );
};

export default NotesListItem;

const CardWrapper = styled.div`
  background: var(--cardsColor);
  color: white !important;
  margin-top: 10px;
  border-radius: 10px;
  .card-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 20px;
  }
  .card-separator {
    background-color: white;
  }
  .card-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .card-date {
    float: right;
    font-size: 12px;
  }
  &:hover {
    box-shadow: 4px 4px 4px 4px rgba(0.2, 0.2, 0.2, 0.2);
    transition: All 0.2s ease-in-out;
    cursor: pointer;
  }
  &:active {
    border: 4px solid #40B3A2;
  }
`;
