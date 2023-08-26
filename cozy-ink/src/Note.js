const Note = ({text, tags}) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='tagList'>
                <small>{tags}</small>
            </div>
        </div>
    )
}

export default Note;