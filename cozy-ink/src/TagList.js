import {Tag} from './Tag'

const TagList = ({ tagList, filterTags }) => {
    return (
        <div style={{background: "lightblue"}}>
            <button>Home</button>
            {Array.from(tagList).map((tag) => (
                <Tag tag={tag} filterTags={filterTags}/>
            ))}
        </div>
    );
};

export {TagList}
