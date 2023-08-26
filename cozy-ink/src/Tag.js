const Tag = ({ tag, handleTagChannel }) => {
    return (
        <div className="tag">
            <button onClick={handleTagChannel} value={tag}>{tag}</button>
        </div>
    );
};

export {Tag}
