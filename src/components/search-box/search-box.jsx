import React from "react";
import './search-box.scss';

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input className="search-box" type='search' placeholder={placeholder} onChange={handleChange} />
    );
}

export default SearchBox;
