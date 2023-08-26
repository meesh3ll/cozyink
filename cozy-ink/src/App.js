import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { TagList } from './Tag';
import { NoteButton } from './Search';
import { SearchBar } from './Search';

import NotesList from './NotesList';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "title",
      text: "test :sob:",
      tags: "test",
    },
  ]);
  const addNote = (title, text, tags) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      tags: tags,
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  return (
    <div className='container'>
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );
}

export default App;
