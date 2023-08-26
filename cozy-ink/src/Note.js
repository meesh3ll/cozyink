const Note = ({ id, text, tag }) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='tagList'>
        <small>{tag}</small>
      </div>
    </div>
  );
};

export default Note;
