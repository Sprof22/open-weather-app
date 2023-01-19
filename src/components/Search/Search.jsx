import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleInputChange = () => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder={"Search for City"}
      debounceTimeout={600}
      onChange={handleInputChange}
      value={search}
    />
  );
};

export default Search;
