import React from 'react';
import {MdSearch} from 'react-icons/md';

const SearchBar = () => {
    return(
        <div className = "search-bar">
            <MdSearch className = "search-icons" size = '1.2em'/>
            <input type = "text" placeholder = "Search for notes..." />
        </div>
    );
}

export {SearchBar}