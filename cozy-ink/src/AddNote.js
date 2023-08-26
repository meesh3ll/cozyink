import { useState } from 'react';

const AddNote = ({id, title, text, tag, handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const [titleText, setTitleText] = useState('');
    const handleChange = (event) => {
        setNoteText(event.target.value);
    }
    const handleSave = (event) => {
        handleAddNote(noteText, titleText);
    }
    return (
        <><div className='new note'>
            <textarea rows='1' cols='1' placeholder='title...' value={titleText} onChange={handleChange}></textarea>
            <textarea rows='10' cols='10' placeholder='type...' value={noteText} onChange={handleChange}></textarea>
            <div className='footer'>
                <small>{tag}</small>
                <button className='save' onClick={handleSave}></button>
            </div>
        </div></>
    );
};

export default AddNote;
