import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = props => {
    const {books, handleShelfChange} = props

    return(
        <ol className="books-grid">
            {books.map(book =>(
                <Book key={book.id} book={book} books={books} handleShelfChange={handleShelfChange}/>
            ))}
        </ol>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    handleChangeShelf: PropTypes.func.isRequired
}

export default BookShelf