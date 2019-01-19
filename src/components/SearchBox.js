import React from 'react';
import '../css/SearchBox.css';

const SearchBox = () => {
    return (
        <div className="search-wrap">
            <input 
                type="search" 
                placeholder="search skill"
                // onChange{filterResults} 
            />
        </div>
    );
};

export default SearchBox;