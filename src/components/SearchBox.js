import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="search-wrap">
            <input 
                type="search" 
                placeholder="Start typing a language, eg. &quot;gatsbyJS&quot;"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;