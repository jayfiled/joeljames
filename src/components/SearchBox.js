import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="search-wrap">
            <input 
                type="search" 
                placeholder="search skill"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;