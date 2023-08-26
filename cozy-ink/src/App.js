import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Tag } from "./Tag"
import { TagList } from "./TagList";
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
      <div>
        <TagList notes={notes}/>
      </div>
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
