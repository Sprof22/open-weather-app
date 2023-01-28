import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoDbApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null)

  const handleSearchChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = (inputValue) => {
    return 
      fetch(`${GEO_DB_URL}/cities`, GeoDbApiOptions)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <AsyncPaginate
      placeholder='Search a City'
      debounceTimeout={600}
      value={search}
      onChange={handleSearchChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
