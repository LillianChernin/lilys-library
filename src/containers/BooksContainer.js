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
  handleBorrowBookButton(event) {
    let bookId = event.target.parentNode.className.split(' ')[1];
    console.log(bookId);
    let currentBook;
    BookModel.getOne(bookId).then((res) => {
      console.log(res.data);
      if (res.data.onLoan === false) {
        let userName = prompt("Please enter your name and click OK to borrow book.")
        if (userName !== null && userName !== "") {
          BookModel.borrowBook(bookId, userName).then((res) => {
            let dateDue = res.data.dateDue
            let shortDueDate = dateDue.split('').slice(0,10).join('');
            alert('The book is now on loan! Please return by ' + shortDueDate);
          })
        }
      } else {
        alert('Book is not available.');
      }
    })
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
              imageUrl={book.imageUrl}
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
