import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { RapidAPIOptions, RAPID_API_URL } from "../../api";

const Search = () => {
 
  return (
    <AsyncPaginate 
      placeholder={"Search for a city"}
      debounceTimeout={600}
      value={search}
      onChange={handleInputOnChange}
    />
  );
};

export default Search;
