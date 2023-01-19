import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { RapidAPIOptions, RAPID_API_URL } from '../../api';

const Search = ({searchInputChange}) => {
    const [search, setSearch] = useState(null);
    const handleSearchChange = (searchData) => {
        setSearch(searchData);
        searchInputChange(searchData)
    }
    const loadOptions = () => {
        return fetch(`${RAPID_API_URL}/cities`, RapidAPIOptions)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city)=> {
                    return{
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} (${city.country})`
                    }
                })
            } 
        })
        .catch(err => console.error(err));
    }
  return (
    <div>
        <AsyncPaginate 
            placeholder="Search for a City"
            value={search}
            onChange={handleSearchChange}
            debounceTimeout={600}
            loadOptions={loadOptions}
        />
    </div>
  )
}

export default Search