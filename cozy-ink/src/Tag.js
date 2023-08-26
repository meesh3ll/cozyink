const Tag = ({ tag, filterTags }) => {
    return (
        <div className="tag">
            <button onClick={filterTags} value={tag}>{tag}</button>
        </div>
    );
};

export {Tag}
