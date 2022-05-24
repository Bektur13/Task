import React from 'react';
import {useDispatch} from 'react-redux';
import { addCart } from '../../redux/actions';
import './Book.css';

const BookItem = (props) => {

  const dispatch = useDispatch();
  const addBook = (book) => {
    dispatch(addCart(book));
    console.log(book);
  }

  return (
    <div className='book__box'>
        <img className='book__img' src={props.books.url} alt="Image" />
        <h3 className='book__title'>{props.books.name}</h3>
        <button className='book__btn' onClick={() => addBook(props.books)}>Add to WishLIst</button>
        <p className='book__description'>{props.books.writer}</p>
    </div>
  )
}

export default BookItem;