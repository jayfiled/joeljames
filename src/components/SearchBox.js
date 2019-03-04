import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({ searchChange, killLinkOnSearch }) => {
    return (
        <div className="search-wrap">
        {/* Make new branch and add an explicit label here */}
            <input 
                type="search" 
                placeholder="Start typing a language, eg. &quot;gatsbyJS&quot;"
                onChange={searchChange} 
                onMouseOver={killLinkOnSearch} 
            />
            
        </div>
    );
};

export default SearchBox;