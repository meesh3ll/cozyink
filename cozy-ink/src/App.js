import './App.css';
import {useState} from 'react';
import {SearchBar} from './Search';
import {nanoid} from 'nanoid';
import NotesList from './NotesList';

function App() {
  const [searchInfo, setSearch] = useState('');

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div>
      <div className = "guest-bar">
        Guest
      </div>

      <div className = "trash-bar"> 
        
        <div className = "tag-bar">
        
        </div>
        
      </div>

      <div className = "big-div">
        <div>
          <SearchBar  handleSearch = {setSearch}/>
        </div>
        <div className = "container">
          <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchInfo))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
        </div>
      </div>

    </div>
  
  );
}

export default App;
