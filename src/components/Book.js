import React from 'react'
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'

const Book = props => {
  const { book, books, handleShelfChange } = props

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
          </div>
          <ChangeShelf book={book} books={books} handleShelfChange={handleShelfChange} />
        </div>
        <div className="book-title">{book.title}</div>
        { book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
}

export default Book
