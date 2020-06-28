import React, { createContext, useState, useEffect } from "react";
import db from "./db";

const NotesContext = createContext();

const NotesProvider = (props) => {

  const [state, setState] = useState({ notes: [] });

  useEffect(() => {
    db.table('notes').toArray().then((notes) => {
      setState({ notes })
    })
  }, [])

  const handleAddNewNote = (title, text, date) => {
    const note = {
      title,
      text,
      date
    }
    db.table('notes').add(note).then((id) => {
      const newList = [...state.notes, Object.assign({}, note, {id})]
      setState({notes: newList})
    })
  }

  console.log(state);

  return (
    <NotesContext.Provider value={{ state, handleAddNewNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };

// const [notes, setNotes] = useState([
//   {
//     id: 1,
//     title: "First note",
//     text: "First test note here!",
//     date: "20.06.2020",
//     time: "11:26",
//   },
//   {
//     id: 2,
//     title: "new note",
//     text: "First test note here!",
//     date: "21.06.2020",
//     time: "17:55",
//   },
//   {
//     id: 3,
//     title: "Novaya zametka",
//     text: "First test note here!",
//     date: "22.06.2020",
//     time: "22:10",
//   },
//   {
//     id: 4,
//     title: "One more",
//     text: "First test note here!",
//     date: "24.06.2020",
//     time: "13:15",
//   },
// ]);
