import React, { useContext } from "react";
import { NotesContext } from "../../context";
import SidebarItem from "./SidebarItem";

const Sidebar = (props) => {
  const firstNote = useContext(NotesContext);
  return (
    <>
      <NotesContext.Consumer>
        {(value) => {
          console.log(value);
          return value.map((note) => (
            <SidebarItem
              id={note.id}
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
