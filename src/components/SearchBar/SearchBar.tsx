import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-group">
      <input
        className="searchbar"
        type="text"
        placeholder="City Name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      ></input>
      <IconButton aria-label="delete" color="primary">
        <Icon>search</Icon>
      </IconButton>
    </div>
  );
};

export default SearchBar;
