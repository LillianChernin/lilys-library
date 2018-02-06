import React, {Component} from 'react';
import FullBookDisplay from '../components/bookDisplay/FullBookDisplay';
import BookCover from '../images/test-book-cover-1.jpg'
import BookModel from '../models/Book';

class BookContainer extends Component {
  constructor() {
    super();
    this.state = {
      book: "",
      onLoan: "",
      dateDate: "",
      bookObject: ""
    }
    this.handleBorrowBookButton = this.handleBorrowBookButton.bind(this);
    this.handlePlaceHoldButton = this.handlePlaceHoldButton.bind(this);
    this.handleDeleteBookButton = this.handleDeleteBookButton.bind(this);
  }
  handleBorrowBookButton() {
    let userName = prompt("Please enter your name and click OK to borrow book.")
    if (userName !== null || userName !== "") {
    }
  }
  handlePlaceHoldButton() {
    let userName = prompt("Please enter your name and click OK to place book on hold.")
    if (userName !== null || userName !== "") {
    }
  }
  handleDeleteBookButton() {
    let confirm = prompt("Please confirm deletion of book by typing 'Y' in the box below and clicking OK");
    if (confirm === 'Y') {
      BookModel.delete(this.state.bookObject).then((res) => {
        alert('book was deleted!');
      })
    }
  }
  render() {
    let self = this;
    if (this.state.book === "") {
      BookModel.all().then( (res) => {
        let foundBook = res.data.filter(book => book._id === self.props.match.params.id)
        let renderedFoundBook = (
          <FullBookDisplay
            title={foundBook[0].title}
            author={foundBook[0].author}
            genres={foundBook[0].genres}
            keywords={foundBook[0].keywords}
            datePublished={foundBook[0].datePublished}
            onLoan={foundBook[0].onLoan}
            dateDue={foundBook[0].dateDue}
            imageUrl={BookCover}
            location={foundBook[0].location}
            id={foundBook[0]._id}
            handleBorrowBookButton={this.handleBorrowBookButton}
            handlePlaceHoldButton={this.handlePlaceHoldButton}
            handleDeleteBookButton={this.handleDeleteBookButton}
          />
        )
        self.setState({
          book: renderedFoundBook,
          bookObject: foundBook
        })
      })
    }
    return (
      <div className="BookContainer">
        {this.state.book}
      </div>
    )
  }
}

export default BookContainer;
