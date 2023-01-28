import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoDbApiOptions, GEO_DB_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleSearchChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_DB_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, GeoDbApiOptions)
      .then((response) => response.json())
      .then((response) => {return {
        options: response.data.map(city => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label:`${city.name}, (${city.country})`
          }
        })
      }})
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Search a City"
      debounceTimeout={600}
      value={search}
      onChange={handleSearchChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
