import './App.css';
import {tagList} from './Tag'
import {noteButton} from './Search'
import {searchBar} from './Search'
import {note} from './Note'

function App() {
  return (
    <div>
    
      <div>
        <tagList />
      </div>

      <div>
        <searchBar />
      </div>

      <div>
        <note />
      </div>

      <div>
        <noteButton />
      </div>

    </div>
  );
}

export default App;
