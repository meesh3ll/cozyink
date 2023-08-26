import {MdDelete} from 'react-icons/md';
const Note = ({ id, title, text, tag, handleDeleteNote }) => {
    return (
      <><div className='note'>
            <div className='title'>
                <span>{title}</span>
                <hr/>
            </div>
            <div>{text}</div>
            <div className='footer'>
                <small>{tag}</small>
                <button 
                    className='delete'
                    onClick={() => handleDeleteNote(id)}
                ><MdDelete size = "1.5rem"/></button>
            </div>
        </div></>
    );
  };
  
  export default Note;
