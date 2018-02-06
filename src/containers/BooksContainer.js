import React, {Component} from 'react';
import MiniBookDisplay from '../components/bookDisplay/MiniBookDisplay';
import BookModel from '../models/Book';

class BooksContainer extends Component {
  constructor() {
    super();
    this.state = {
      books: "",
      borrowButtonClicked: false,
      placeHoldButtonClicked: false
    }
    this.handleBorrowBookButton = this.handleBorrowBookButton.bind(this);
    this.handlePlaceHoldButton = this.handlePlaceHoldButton.bind(this);
  }
  handleBorrowBookButton() {
    console.log('borrow book button was clicked!')
  }
  handlePlaceHoldButton() {
    console.log('request hold button was clicked!')
  }
  render() {
    let self = this;
    if (this.state.books === "") {
      BookModel.all().then( (res) => {
        let books = res.data.map((book) => {
          return (
            <MiniBookDisplay
              title={book.title}
              author={book.author}
              dateDue={book.dateDue}
              onLoan={book.onLoan}
              location={book.location}
              id={book._id}
              handleBorrowBookButton={this.handleBorrowBookButton}
              handlePlaceHoldButton={this.handlePlaceHoldButton}
            />
          )
        })
        self.setState({
          books: books
        })
      })
    }
    return (
      <div className="BooksContainer">
        {this.state.books}
      </div>
    )
  }
}

export default BooksContainer;
