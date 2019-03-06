import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({ searchChange, killLinkOnSearch }) => {
    return (
        <label for="search-bar" className="search-wrap">
        {/* Make new branch and add an explicit label here */}
            <input 
                id="search-bar"
                type="search" 
                placeholder="Start typing a language, eg. &quot;gatsbyJS&quot;"
                onChange={searchChange} 
                onMouseOver={killLinkOnSearch} 
            />
            
        </label>
    );
};

export default SearchBox;