const Note = ({ id, title, text, tags }) => {
  return (
    <><div className='title'>
          <span>{title}</span>
      </div><div className='note'>
              <span>{text}</span>
              <div className='footer'>
                  <small>{tags}</small>
                  <button className='delete'></button>
              </div>
          </div></>
    
    
  );
};

export default Note;
