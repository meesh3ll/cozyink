import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { TagList } from "./Tag";
import { NoteButton } from "./Search";
import { SearchBar } from "./Search";
import { Note } from "./Note";
import NotesList from "./NotesList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "test :sob:",
      tag: "test",
    },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
