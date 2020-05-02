import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ChangeShelf extends Component{

    shelfUpdate = event => {
        this.props.handleShelfChange(this.props.book, event.target.value)
    }

    render(){
        const {book , books} = this.props
        let currentShelf = 'none';

        for(let item of books){
            if(item.id === book.id){
                currentShelf = item.shelf;
                break;
            }
        }

        return (
            <div className="book-shelf-changer">
                <select onChange={this.shelfUpdate} defaultValue={currentShelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Road</option>
		                <option value="read">Read</option>	
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

ChangeShelf.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
}

export default ChangeShelf