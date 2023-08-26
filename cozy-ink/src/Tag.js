const Tag = ({ tag, filterTags }) => {
    return (
        <div className="tag">
            <button onClick={filterTags}>{tag}</button>
        </div>
    );
};

export {Tag}
