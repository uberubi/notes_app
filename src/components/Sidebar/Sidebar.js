import React from "react";
import { NotesContext } from "../../context";
import SidebarItem from "./SidebarItem";

const Sidebar = props => {
  return (
    <>
      <NotesContext.Consumer>
        {(value) => {
          return value.notes.map((note) => (
            <SidebarItem
              key={note.id}
              title={note.title}
              text={note.text}
              date={note.date}
              time={note.time}
            />
          ));
        }}
      </NotesContext.Consumer>
    </>
  );
};

export default Sidebar;
