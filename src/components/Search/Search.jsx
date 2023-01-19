import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { RapidAPIOptions, RAPID_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleInputChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (searchInput) => {
    return fetch(`${RAPID_API_URL}/cities?namePrefix=${searchInput}`, RapidAPIOptions)
	.then(response => response.json())
	.then(response => {
        return {
            options: response.data.map(city => {
                return {
                    value: `${city.latitude} ${city.longitude}` ,
                    label: `${city.name}, (${city.country})`,
                }
            })
        }
    })
	.catch(err => console.error(err));
  };
  return (
    <AsyncPaginate
      placeholder={"Search for City"}
      debounceTimeout={600}
      onChange={handleInputChange}
      value={search}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
