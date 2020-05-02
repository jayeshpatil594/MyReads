import React from 'react'
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'
import BookList from './BookList'

const Book = props => {
    const {book, books, handleChangeShelf} = props

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ backgroundImage: `url("${book.imageLinks.thumbnail}")`}}>

                    </div>
                    <ChangeShelf bok={book} books={books} handleChangeShelf={handleChangeShelf}/>
                </div>
                <div className="book-title">
                    {book.title}
                </div>
                {book.authors && book.authors.map((author, index) => (
                    <div key={index} className="book-authors">
                        {author}
                    </div>
                ))}
            </div>
        </li>
    )
}


BookList.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    handleChangeShelf: PropTypes.func.isRequired
}

export default Book