import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import SearchBar from '../SearchBar/SearchBar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

  const [state, setState] = useState(0)

  return (
    <div className='header__content'>
      <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
      <SearchBar />
      <div className="header__basket">
        <Link to='wish'>
          <ShoppingBasketIcon className='header__basket' fontSize='large' />
        </Link>
        <span className='header__basket__span'>{state}</span>
      </div>
    </div>
  )
}

export default Header