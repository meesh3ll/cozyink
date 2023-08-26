import {Tag} from './Tag'

const TagList = ({ notes, tagList }) => {
    return (
        <div style={{background: "lightblue"}}>
            <button>Home</button>
            {notes.filter(note => note.tags === tagList).map((note) => (
                <Tag tag={note.tags}/>
            ))}
        </div>
    );
};

export {TagList}
