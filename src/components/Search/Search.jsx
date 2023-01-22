import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { RapidAPIOptions, RAPID_API_URL } from "../../api";

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);
  const handleInputOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = (inputValue) => {
    fetch(`${RAPID_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, RapidAPIOptions)
	.then(response => response.json())
	.then(response => {
    return {
      options: response.data.map(city => {
        return{
          value: `${city.latitude} ${city.longitude}` ,
          label: `${city.name}, (${city.country})`,
        }
      })
    }
  })
	.catch(err => console.error(err));
  }
  return (
    <AsyncPaginate 
      placeholder={"Search for a city"}
      debounceTimeout={600}
      value={search}
      onChange={handleInputOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
