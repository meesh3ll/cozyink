import { useState } from 'react';

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
