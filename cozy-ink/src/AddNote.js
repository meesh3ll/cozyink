import { useState } from 'react';
import {MdCheckCircle} from 'react-icons/md';

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
        if (noteText.trim().length > 0 && titleText.trim().length > 0) {
            handleAddNote(titleText, noteText);
            setNoteText('');
            setTitleText('');
        }
        
    }
    return (
        <><div className='new-note'>
            <div className = 'title-area'>
                <textarea maxlength = '29' rows='1' cols='27' placeholder='title...' value={titleText} onChange={handleTitleChange}></textarea>
            </div>
            <hr/>
            <div className = 'text-area'>
                <textarea rows='10' cols='27' placeholder='type...' value={noteText} onChange={handleNoteTextChange}></textarea>
            </div>
            <div className='footer'>
                <small>{tag}</small>
                <button className = 'save' onClick={handleSave}> <MdCheckCircle className = "check-mark" size = '1.8em'/></button>
            </div>
        </div></>
    );
};

export default AddNote;