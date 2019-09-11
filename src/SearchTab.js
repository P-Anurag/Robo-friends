import React from "react";

const SearchTab = ({ searchField, onSearchChange }) => {
  return (
    <div>
      <input type="search" placeholder="Search!!" onChange={onSearchChange} />
    </div>
  );
};
export default SearchTab;
