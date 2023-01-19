import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData);

    }
  return (
    <div>
        <AsyncPaginate 
            placeholder="Search for a City"
            value={search}
            onChange={handleOnChange}
            debounceTimeout={700}
        />
    </div>
  )
}

export default Search