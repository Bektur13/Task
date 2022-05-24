import React from 'react';
import BookItem from './BookItem';
import './Book.css';

const BookList = (props) => {
  return (
    <div className='book__content'>
        {props.books.map(item => <BookItem books={item}/>)}
    </div>
  )
}

export default BookList;