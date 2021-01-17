import React, {useState} from "react";

function Search({ search, onSearch }) {
  

  const handleSearchChange = (event) => {
    onSearch(event.target.value)
  }
  //console.log(search)

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleSearchChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
