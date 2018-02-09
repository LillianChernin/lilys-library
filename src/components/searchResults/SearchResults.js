import React, {Component} from 'react';
import './SearchResults.css';
import MiniBookDisplay from '../bookDisplay/MiniBookDisplay';
import BookModel from '../../models/Book';

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      books: ""
    }
    this.handleBorrowBookButton = this.handleBorrowBookButton.bind(this);
    this.handlePlaceHoldButton = this.handlePlaceHoldButton.bind(this);
  }
  handleBorrowBookButton(event) {
    event.preventDefault()
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
            self.setState({
              books: "",
              onLoan: true
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
    console.log(this.props.bookList);
    let searchResultsBookList;
    if (this.state.books === "") {
      searchResultsBookList = this.props.bookList.map((book, i) => {
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
    }
    return (
      <div className="SearchResults">
        {searchResultsBookList}
      </div>
    )
  }
}

export default SearchResults;
