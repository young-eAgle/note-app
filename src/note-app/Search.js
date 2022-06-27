import React from 'react';

const Search = ({ handleSearch }) => {
  const handle = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Type to search"
          onChange={handle}
        />
        <i className="fa-solid fa-search"></i>
      </div>
    </div>
  );
};

export default Search;
