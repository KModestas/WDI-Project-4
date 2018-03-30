import React from 'react';

const SearchBar = ({ handleSearch, handleSort }) => {
  return(
    <div className="filtering">
      <select onChange={ handleSort }>
        <option value="eventname|asc">Event Name (A - Z)</option>
        <option value="eventname|desc">Event Name (Z - A)</option>
        <option value="date|asc">Date (Closest - Furthest)</option>
        <option value="date|desc">Date (Furthest - Closest)</option>
      </select>

      <input type="search" placeholder="Event Name" onChange={ handleSearch } />
    </div>
  );
};


export default SearchBar;
