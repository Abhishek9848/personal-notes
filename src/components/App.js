import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  
  function addNote(newNote) {
    setNotes((prevNotes) => {
      localStorage.setItem("notes", JSON.stringify([...prevNotes, newNote]));
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const filterNote = prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
      localStorage.setItem("notes", JSON.stringify(filterNote));
      return filterNote;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
