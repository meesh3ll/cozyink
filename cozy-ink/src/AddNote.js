import { useState } from 'react';

const AddNote = ({id, title, text, tag, handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const [titleText, setTitleText] = useState('');
    const handleNoteTextChange = (event) => {
        setNoteText(event.target.value);
    }
    const handleTitleChange = (event) => {
        setTitleText(event.target.value);
    }
    const handleSave = (event) => {
        handleAddNote(titleText, noteText);
    }
    return (
        <><div className='new note'>
            <textarea rows='1' cols='1' placeholder='title...' value={titleText} onChange={handleTitleChange}></textarea>
            <textarea rows='10' cols='10' placeholder='type...' value={noteText} onChange={handleNoteTextChange}></textarea>
            <div className='footer'>
                <small>{tag}</small>
                <button className='save' onClick={handleSave}></button>
            </div>
        </div></>
    );
};

export default AddNote;
