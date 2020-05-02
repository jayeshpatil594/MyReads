import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = props => {
    const {books, handleChangeShelf} = props

    return(
        <ol>
            {books.map(book =>(
                <Book key={book.id} book={book} books={books} handleChangeShelf={handleChangeShelf}/>
            ))}
        </ol>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    handleChangeShelf: PropTypes.func.isRequired
}

export default BookShelf