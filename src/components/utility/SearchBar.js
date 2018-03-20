import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return(
    <div>
      <input type="search" placeholder="Event Name" onChange={ handleSearch } />
    </div>
  );
};


export default SearchBar;
