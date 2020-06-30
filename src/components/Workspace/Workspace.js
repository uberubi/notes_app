import React from "react";
import { NotesContext } from "../../context";
import WorkSpaceNoteSection from "./WorkSpaceNoteSection";

const Workspace = (props) => {
  return (
    <>
      <NotesContext.Consumer>
        {(value) => {
          if (!value.isNoteOpen) {
            return (
              <WorkSpaceNoteSection handleAddNewNote={value.handleAddNewNote} />
            );
          } else {
            return (
              <WorkSpaceNoteSection 
              isNoteOpen={value.isNoteOpen}
              openNoteTitle={value.openNote.title}
              openNoteText={value.openNote.text}
              handleAddNewNote={value.handleAddNewNote}
              changeOpenNoteTitleHandler={value.changeOpenNoteTitleHandler} 
              changeOpenNoteTextHandler={value.changeOpenNoteTextHandler}
              clearOpenNote={value.clearOpenNote} 
              />
            );
          }
        }}
      </NotesContext.Consumer>
    </>
  );
};

export default Workspace;