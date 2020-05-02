import React from 'react'
import * as BooksAPI from '../data/BooksAPI'
import '../css/App.css'
import BookList from './BookList'
import BookSearch from './BookSearch'
import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => 
        this.setState({ books: books })
      )
  }

  handleShelfChange = (Book, shelf) => {
    BooksAPI.update(Book, shelf).then(response => {
      Book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(book => book.id !== Book.id).concat(Book)
      }))
    })
  }

  render() {

    const { books } = this.state

    return (
      <div className="app">  
        <Route exact path="/" render={()=> (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList books={books} handleShelfChange={this.handleShelfChange}/>
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={() => <BookSearch books={books} handleShelfChange={this.handleShelfChange}/>}/>
      </div>
    )
  }
}

export default BooksApp


