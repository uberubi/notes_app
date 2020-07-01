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
              <WorkSpaceNoteSection
                handleAddNewNote={value.handleAddNewNote}
                clearOpenNote={value.clearOpenNote}
                handleDeleteNote={value.handleDeleteNote}
                handleUpdateNote={value.handleUpdateNote}
              />
            );
          } else {
            return (
              <WorkSpaceNoteSection
                isNoteOpen={value.isNoteOpen}
                openNoteTitle={value.openNote.title}
                openNoteText={value.openNote.text}
                openNoteId={value.openNote.id}
                handleAddNewNote={value.handleAddNewNote}
                handleDeleteNote={value.handleDeleteNote}
                handleUpdateNote={value.handleUpdateNote}
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
