import './App.css';
import {useState} from 'react';
import {SearchBar} from './Search';
import {NoteButton} from './NoteButton';

function App() {
  const [searchInfo, setSearch] = useState('');
  
  return (
    <div>
      <div>
        <SearchBar  handleSearch = {setSearch}/>
      </div>

      <div>
        <NoteButton />
      </div>
    </div>
  
  );
}

export default App;
