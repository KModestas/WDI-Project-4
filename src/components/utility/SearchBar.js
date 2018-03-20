import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return(
    <div>
      <input type="search" placeholder="Enter an Event Name" onChange={ handleSearch } />
    </div>
  );
};


export default SearchBar;
