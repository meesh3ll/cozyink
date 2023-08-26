import './App.css';
import {useState} from 'react';
import {SearchBar} from './Search';

function App() {
  const [searchInfo, setSearch] = useState('');

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
        
      </div>

    </div>
  
  );
}

export default App;
