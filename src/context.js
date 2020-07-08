import React, { createContext, useState, useEffect } from "react";
import db from "./db";

const NotesContext = createContext();

const NotesProvider = (props) => {
  const [state, setState] = useState([]);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [openNote, setOpenNote] = useState({
    id: "",
    title: "",
    text: "",
  });

  useEffect(() => {
    const getPosts = async () => {
      let notes = await db.notes.toArray();
      setState(notes);
    };
    getPosts();
  }, []);

  const handleNotes = (title, text, action, id) => {
    switch (action) {
      case "add":
        if (title !== "" && text !== "") {
          const note = {
            title,
            text,
            date: new Date(),
          };
          db.notes.add(note).then(async () => {
            let notes = await db.notes.toArray();
            setState(notes);
          });
          setIsNoteOpen(false);
        }
        break;
      case "delete":
        db.notes.delete(id).then(async () => {
          let notes = await db.notes.toArray();
          setState(notes);
        });
        setIsNoteOpen(false);
        break;
      case "update":
        if (title !== "" && text !== "") {
          db.notes
            .update(id, { title, text, date: new Date() })
            .then(async () => {
              let notes = await db.notes.toArray();
              setState(notes);
            });
          setIsNoteOpen(false);
        }
        break;
      case "clear":
        setIsNoteOpen(false);
        break;
      default:
        return null;
    }
  };

  const handleOpenNote = (id, title, text, date) => {
    setIsNoteOpen(true);
    setOpenNote({
      id,
      title,
      text,
      date,
    });
  };

  const OpenNoteChanger = (prop, value) => {
    setOpenNote((prevState) => ({
      ...prevState,
      [prop]: value,
    }));
  };

  return (
    <NotesContext.Provider
      value={{
        state,
        handleOpenNote,
        isNoteOpen,
        openNote,
        OpenNoteChanger,
        handleNotes
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };

// import React, { createContext, useState, useEffect } from "react";
// import db from "./db";

// const NotesContext = createContext();

// const NotesProvider = (props) => {
//   const [state, setState] = useState([]);
//   const [isNoteOpen, setIsNoteOpen] = useState(false);
//   const [openNote, setOpenNote] = useState({
//     id: "",
//     title: "",
//     text: "",
//   });

//   useEffect(() => {
//     const getPosts = async () => {
//       let notes = await db.notes.toArray();
//       setState(notes);
//     };
//     getPosts();
//   }, []);

//   const handleAddNewNote = (title, text) => {
//     if (title !== "" && text !== "") {
//       const note = {
//         title,
//         text,
//         date: new Date(),
//       };
//       db.notes.add(note).then(async () => {
//         let notes = await db.notes.toArray();
//         setState(notes);
//       });
//     }
//     setIsNoteOpen(false);
//   };

//   const handleDeleteNote = (id) => {
//     db.notes.delete(id).then(async () => {
//       let notes = await db.notes.toArray();
//       setState(notes);
//     });
//     setIsNoteOpen(false);
//   };

//   const handleUpdateNote = (id, title, text) => {
//     if (title !== "" && text !== "") {
//       db.notes.update(id, { title, text, date: new Date() }).then(async () => {
//         let notes = await db.notes.toArray();
//         setState(notes);
//       });
//       setIsNoteOpen(false);
//     }
//   };

//   const handleClearField = () => {
//     setIsNoteOpen(false);
//   };

//   const handleOpenNote = (id, title, text, date) => {
//     setIsNoteOpen(true);
//     setOpenNote({
//       id,
//       title,
//       text,
//       date,
//     });
//   };

//   const OpenNoteChanger = (prop, value) => {
//     setOpenNote((prevState) => ({
//       ...prevState,
//       [prop]: value,
//     }));
//   };

//   return (
//     <NotesContext.Provider
//       value={{
//         state,
//         handleAddNewNote,
//         handleOpenNote,
//         handleDeleteNote,
//         handleUpdateNote,
//         isNoteOpen,
//         openNote,
//         OpenNoteChanger,
//         handleClearField,
//       }}
//     >
//       {props.children}
//     </NotesContext.Provider>
//   );
// };

// export { NotesContext, NotesProvider };
