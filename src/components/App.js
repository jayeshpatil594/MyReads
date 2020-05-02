import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from '../data/BooksAPI'
import BookList from './BookList'
import BookSearch from './BookSearch'
import '../App.css'

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
        <Route exact path="/" render={() => <BookList books={books} handleShelfChange={this.handleShelfChange}/>}  />
        <Route exact path="/search" render={({history}) => <BookSearch books={books} handleShelfChange={this.handleShelfChange}/>}  />
      </div>
    )
  }
}

export default BooksApp
