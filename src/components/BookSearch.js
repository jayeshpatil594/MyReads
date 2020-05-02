import React, {Component} from 'react'
import Book from './Book'
import * as BooksAPI from '../data/BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookSearch extends Component {

  state = {
    query: '',
    newSetOfBooks: [],
    searchError: false
  }

  getBooks = event => {
    const query = event.target.value

     this.setState({
      query
    })

    if(query){
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0 ? this.setState({ newSetOfBooks: books, searchError: false})
        : this.setState({ newSetOfBooks: [], searchError: true })
      })
    }
    else{
      this.setState({ newSetOfBooks: [], searchError: false})
    }
  }
  render() {
    const {query, newSetOfBooks, searchError} = this.state
    const {books, handleShelfChange} = this.props

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by Title or Author" value={query} onChange={this.getBooks} autoFocus/>
          </div>
        </div>
        <div className="search-books-results">
          {newSetOfBooks.length > 0 && (
            <div>
              <h3>Search returned {newSetOfBooks.length} books</h3>
              <ol className="books-grid">
              {newSetOfBooks.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    handleShelfChange={handleShelfChange}
                  />
                ))}
              </ol>
            </div>
          )}
          {searchError && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    )
  }
}

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
}

export default BookSearch
