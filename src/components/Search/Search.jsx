import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { RapidAPIOptions, RAPID_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleInputChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${RAPID_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      RapidAPIOptions
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
    <AsyncPaginate
      placeholder={"Search a City"}
      debounceTimeout={600}
      onChange={handleInputChange}
      value={search}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
