const Note = ({ id, title, text, tags, handleDeleteNote }) => {
  return (
    <>
      <div className='title'>
        <span>{title}</span>
      </div>
      <div className='note'>
        <span>{text}</span>
        <div className='footer'>
          <small>{tags}</small>
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
