import './App.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { TagList } from './TagList';
import { NoteButton } from './Search';
import { SearchBar } from './Search';
import NotesList from './NotesList';

function App() {
  const [notes, setNotes] = useState([]);

  const [tagList, setTagList] = useState(() => new Set());

  const addNote = (title, text, tags) => {
    setTagList(prev => new Set(prev).add(tags));
    
  const [searchInfo, setSearch] = useState('');
    
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
          notes={notes.filter((note) => note.tag !== "deleted" && (note.text.toLowerCase().includes(searchInfo) || note.title.toLowerCase().includes(searchInfo)))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      );
    } else {
      return (
        <NotesList
          notes={notes.filter((note) => note.tag === selectedTag && (note.text.toLowerCase().includes(searchInfo) || note.title.toLowerCase().includes(searchInfo)))}
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

  );
}

export default App;
