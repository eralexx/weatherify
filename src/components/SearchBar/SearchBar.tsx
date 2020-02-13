import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-group">
      <TextField
        label="City name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        type="text"
      />
      <IconButton aria-label="delete" color="primary">
        <Icon>search</Icon>
      </IconButton>
    </div>
  );
};

export default SearchBar;
