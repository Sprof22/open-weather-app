import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = () => {
    
  }
  return (  
    <AsyncPaginate 
      placeholder ={'Search for a City'}
      debounceTimeout={600}
      onChange={handleOnChange}
      value={search}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
