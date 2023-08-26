import './App.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { TagList } from './Tag';
import { NoteButton } from './Search';
import { SearchBar } from './Search';

import NotesList from './NotesList';

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('cozy-ink-note-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('cozy-ink-note-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, text, tag) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      tag: tag,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className='container'>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
