import React, { createContext, useState } from "react";
import Dexie from "dexie";

const NotesContext = createContext();

const NotesProvider = (props) => {


  const [notes, setNotes] = useState([
    {
      id: 1,
      title:
        "First noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst noteFirst note",
      text: "First test note here!",
      date: "20.06.2020",
      time: "11:26",
    },
    {
      id: 2,
      title: "new note",
      text: "First test note here!",
      date: "21.06.2020",
      time: "17:55",
    },
    {
      id: 3,
      title: "Novaya zametka",
      text: "First test note here!",
      date: "22.06.2020",
      time: "22:10",
    },
    {
      id: 4,
      title: "One more",
      text: "First test note here!",
      date: "24.06.2020",
      time: "13:15",
    },
  ]);

  const addNewNote = (props) => {
    console.log("new note has been created");
  };

  return (
    <NotesContext.Provider value={{ notes, addNewNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
