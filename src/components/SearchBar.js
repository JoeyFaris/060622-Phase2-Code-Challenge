import React from "react";

function SearchBar({searchTerm, onSearchChange}) {
  return (
    <div className="search">
      <input 
      type="text" 
      className="searchTerm"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)} />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
