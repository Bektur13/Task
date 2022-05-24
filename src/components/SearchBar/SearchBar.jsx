import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search'>
        <input type="text" placeholder='Search books...' className='search__input'/>
        <SearchIcon className='search__icon'/>
    </div>
  )
}

export default SearchBar