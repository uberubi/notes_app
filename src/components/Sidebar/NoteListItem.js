import React from "react";
import * as moment from "moment";

const NotesListItem = ({ title, text, date }) => {
  return (
    <>
      <div className="sidebar-item">
        <div className="sidebar-item__title">{title}</div>
        <div className="sidebar-item__text">{text}</div>
        <div className="sidebar-item__date">
          {moment(date.toString()).calendar()}
        </div>
      </div>
    </>
  );
};

export default NotesListItem;
