import React, { createContext, useState } from "react";

const NotesContext = createContext();

const NotesProvider = (props) => {
  const [store, setNote] = useState([
    {
      id: 1,
      title: "First note",
      text: "First test note here!",
      date: "20.06.2020",
      time: "11:26",
    },
    {
      id: 1,
      title: "new note",
      text: "First test note here!",
      date: "21.06.2020",
      time: "17:55",
    },
    {
      id: 1,
      title: "Novaya zametka",
      text: "First test note here!",
      date: "22.06.2020",
      time: "22:10",
    },
    {
      id: 1,
      title: "One more",
      text: "First test note here!",
      date: "24.06.2020",
      time: "13:15",
    },
  ]);
  
  return (
    <NotesContext.Provider value={store}>
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
