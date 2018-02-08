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
          let self = this;
          BookModel.borrowBook(bookId, userName).then((res) => {
            let dateDue = res.data.dateDue
            let shortDueDate = dateDue.split('').slice(0,10).join('');
            alert('The book is now on loan! Please return by ' + shortDueDate);
            self.setState({
              books: ""
            })
          })
        }
      } else {
        alert('Book is not available.');
      }
    })
  }
  handlePlaceHoldButton(event) {
    let bookId = event.target.parentNode.className.split(' ')[1];
    console.log('request hold button was clicked!');
    let userName = prompt("Please enter your name and click OK to place book on hold.")
    if (userName !== null && userName !== "") {
      let self = this;
      BookModel.placeHold(bookId, userName).then((res) => {
        console.log(res);
      })
    }
  }
  render() {
    let self = this;
    if (this.state.books === "") {
      BookModel.all().then( (res) => {
        let books = res.data.map((book, i) => {
          return (
            <MiniBookDisplay
              title={book.title}
              author={book.author}
              dateDue={book.dateDue}
              onLoan={book.onLoan}
              location={book.location}
              id={book._id}
              imageUrl={book.imageUrl}
              key={i}
              holds={book.holdOwner.length}
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
