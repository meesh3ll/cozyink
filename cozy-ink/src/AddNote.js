import { useState } from 'react';
import {MdCheckCircle} from 'react-icons/md';

const AddNote = ({ id, title, text, tag, handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [tagText, setTagText] = useState('');
  const handleNoteTextChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitleText(event.target.value);
  };
  const handleTagChange = (event) => {
    setTagText(event.target.value);
  };
  const handleSave = (event) => {
    if (noteText.trim().length > 0 && titleText.trim().length > 0 && tagText.trim().length > 0) {
      handleAddNote(titleText, noteText, tagText);
      setNoteText('');
      setTitleText('');
      setTagText('');
    }
  };
  return (
    <>
      <div className='new-note'>
        <textarea
          rows='1'
          cols='10'
          placeholder='title...'
          value={titleText}
          onChange={handleTitleChange}
        ></textarea>
        <textarea
          rows='10'
          cols='10'
          placeholder='type...'
          value={noteText}
          onChange={handleNoteTextChange}
        ></textarea>
        <div className='footer'>
        <textarea
          rows='1'
          cols='10'
          placeholder='tag...'
          value={tagText}
          onChange={handleTagChange}
        ></textarea>
          <button className='save' onClick={handleSave}></button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
=========
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
>>>>>>>>> Temporary merge branch 2
