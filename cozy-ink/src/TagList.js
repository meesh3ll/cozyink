import {Tag} from './Tag'

const TagList = ({ notes }) => {
    return (
        <div style={{background: "lightblue"}}>
            <button>Home</button>
            {notes.map((note) => (
                <Tag id={note.id} text={note.text} tag={note.tag} />
            ))}
        </div>
    );
};

export {TagList}
