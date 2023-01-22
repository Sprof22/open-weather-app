import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { RapidAPIOptions, RAPID_API_URL } from "../../api";

const Search = () => {
 
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
