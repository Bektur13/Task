import React from 'react';
import {useSelector} from 'react-redux';
import logo from '../assets/logo.svg'
import SearchBar from './SearchBar/SearchBar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'

const Wish = () => {

    const state = useSelector((state) => state.handleCart);
    console.log(state);

  return (
    <div className='header__content'>
      {/* <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
      <SearchBar />
      <div className="header__basket">
        <Link to='wish'>
          <ShoppingBasketIcon className='header__basket' fontSize='large' />
        </Link>
        <span className='header__basket__span'>{state.length}</span>
      </div> */}
      {/* {state.map(item => <div>
        <img className='book__img' src={item.url} alt="Image" />
        <h3 className='book__title'>{item.name}</h3>
        <p className='book__description'>{item.writer}</p>
      </div>)} */}
    </div>
  )
}

export default Wish;