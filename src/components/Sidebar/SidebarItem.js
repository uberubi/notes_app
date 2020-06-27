import React from "react";

const SidebarItem = ({ id, title, text, date, time }) => {
  return (
    <>
      <div className="sidebar-item">
        <div className="sidebar-item__title">{title}</div>
        <div className="sidebar-item__text">{text}</div>
        <div className="sidebar-item__date"><i>{time} {date}</i></div>
      </div>
    </>
  );
};

export default SidebarItem;