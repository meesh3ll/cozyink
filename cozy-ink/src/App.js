import './App.css';
import {useState} from 'react';
import {SearchBar} from './Search';
import {NoteButton} from './NoteButton';

function App() {
  const [searchInfo, setSearch] 
  return (
    <div>
      <div>
        <SearchBar />
      </div>

      <div>
        <NoteButton />
      </div>
    </div>
  
  );
}

export default App;
