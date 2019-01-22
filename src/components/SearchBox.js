import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="search-wrap">
            <input 
                type="search" 
                placeholder="start typing a language"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;