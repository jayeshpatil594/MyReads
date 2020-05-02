import React from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


const BookList = props => {
    const {books, handleChangeShelf} = props

    const shelfTypes = [
        { type: 'currentlyReding', title: 'Currently Reading'},
        { type: 'wantToRead', title: 'Want to Read'},
        { type: 'read', title: 'Read'}
    ]

    return(
        <div className="list-books-content">
            {shelfTypes.map((shelf, shelfIndex) => {
                const shelfBooks = books.filter(book => book.shelf == shelf.type)
                return(
                    <div className="bookshelf" key={shelfIndex}>
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <div className="bookshelf-books">
                            <BookShelf books={shelfBooks} handleChangeShelf={handleChangeShelf}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    handleChangeShelf: PropTypes.func.isRequired
}

export default BookList