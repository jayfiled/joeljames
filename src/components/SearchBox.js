import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({ searchChange, killLinkOnSearch }) => {
    return (
        <label htmlFor="search-bar" className="search-wrap">
        {/* Make new branch and add an explicit label here */}
            <input 
                id="search-bar"
                type="search" 
                placeholder="Start typing to filter by tech, eg. &quot;AI&quot;"
                onChange={searchChange} 
                onMouseOver={killLinkOnSearch} 
            />
            
        </label>
    );
};

export default SearchBox;