import './App.css';
<<<<<<<<< Temporary merge branch 1
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { TagList } from './TagList';
import { NoteButton } from './Search';
import { SearchBar } from './Search';
import NotesList from './NotesList';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "title",
      text: "test :sob:",
      tag: "test",
    },
  ]);
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
=========
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
>>>>>>>>> Temporary merge branch 2
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      tag: tag,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
=========
      tags: tags,
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
>>>>>>>>> Temporary merge branch 2

  const tagChannel = e => {
    setSelectedTag(e.target.value);
  };
<<<<<<<<< Temporary merge branch 1
  return (
    <div className='container'>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
=========

  return (
    <div>
      <div className = "cozy-bar">
        CozyInk
      </div>

      <div className = "trash-bar"> 
        
        <div className = "tag-bar">
          <TagList tagList={tagList} handleTagChannel={tagChannel}/>
        </div>
        
      </div>

      <div className = "big-div">
        <div>
          <SearchBar  handleSearch = {setSearch}/>
        </div>
        <div className = "container">
          {createNotesList()}
        </div>
      </div>

    </div>
  
>>>>>>>>> Temporary merge branch 2
  );
}

export default App;
