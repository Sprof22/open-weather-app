import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { RAPID_API_URL, RapidAPIOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${RAPID_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      RapidAPIOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, (${city.country})`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };
  return (
    <AsyncPaginate
      placeholder={"Search for a City"}
      debounceTimeout={600}
      onChange={handleOnChange}
      value={search}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
