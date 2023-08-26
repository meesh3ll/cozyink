import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note 
            id={note.id} 
            title={note.title}
            text={note.text} 
            tag={note.tag} />
      ))}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
};

export default NotesList;
