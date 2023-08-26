const Note = ({ id, title, text, tag, handleDeleteNote }) => {
  return (
    <>
      <div className='title'>
        <span>{title}</span>
      </div>
      <div className='note'>
        <span>{text}</span>
        <div className='footer'>
          <small>{tag}</small>
          <button
            className='delete'
            onClick={() => handleDeleteNote(id)}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Note;
