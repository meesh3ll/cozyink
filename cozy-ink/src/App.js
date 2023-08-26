import './App.css';
import {TagList} from './Tag'
import {NoteButton} from './Search'
import {SearchBar} from './Search'
import {NotesList} from './NotesList'
import {useState} from 'react';

function App() {
  return (
    <div>
    
      <div>
        <TagList/>
      </div>

      <div>
        <SearchBar/>
      </div>

      <div>
        <NotesList/>
      </div>

      <div>
        <NoteButton/>
      </div>

    </div>
  );
}

export default App;
