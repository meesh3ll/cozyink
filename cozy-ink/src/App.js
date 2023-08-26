import './App.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { TagList } from './TagList';
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

  const [tagList, setTagList] = useState(() => new Set());

  const addNote = (title, text, tags) => {
    setTagList(prev => new Set(prev).add(tags));

    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      tag: tags,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id, title, text) => {
    const notesArray = [...notes];
    const deletedNoteIndex = notesArray.findIndex((x) => x.id === id);
    notesArray[deletedNoteIndex] = {
      id: id,
      title: title,
      text: text,
      tag: "deleted",
    };
    setNotes(notesArray);
  };

  const [selectedTag, setSelectedTag] = useState("");
  console.log("selectedTag:", selectedTag);

  const tagChannel = e => {
    setSelectedTag(e.target.value);
  };

  const createNotesList = () => {
    if (selectedTag === "") {
      return (
        <NotesList
          notes={notes.filter((note) => note.tag !== "deleted")}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      );
    } else {
      return (
        <NotesList
          notes={notes.filter((note) => note.tag === selectedTag)}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      );
    }
  };

  console.log(tagList);
  console.log(notes);
  //console.log(notes.filter(note => !tagList.has(note.tag)));

  return (
    <div className="container">
      <div>
        <TagList tagList={tagList} handleTagChannel={tagChannel}/>
      </div>
      {createNotesList()}
    </div>
  );
}

export default App;
