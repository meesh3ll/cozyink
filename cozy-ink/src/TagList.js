import {Tag} from './Tag'

const TagList = ({ tagList, handleTagChannel }) => {
    return (
        <div style={{background: "lightblue"}}>
            <button onClick={handleTagChannel} value="">Home</button>
            {Array.from(tagList).map((tag) => (
                <Tag tag={tag} handleTagChannel={handleTagChannel}/>
            ))}
            <button onClick={handleTagChannel} value="deleted">Trash</button>
        </div>
    );
};

export {TagList}