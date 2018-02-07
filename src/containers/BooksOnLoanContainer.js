import React, {Component} from 'react';
import BookOnLoan from '../components/bookOnLoan/BookOnLoan';
import BookModel from '../models/Book';

class BooksOnLoanContainer extends Component {
  constructor() {
    super();
    this.state = {
      books: ""
    }
    this.handleReturnBookButton = this.handleReturnBookButton.bind(this);
  }
  handleReturnBookButton(event) {
    let bookId = event.target.parentNode.className;
    BookModel.returnBook(bookId).then((res) => {
      alert('book was returned!');
    })
  }
  render() {
    let self = this;
    if (this.state.books === "") {
      BookModel.showOnLoan().then( (res) => {
        let books = res.data.map((book) => {
          return (
            <BookOnLoan
              title={book.title}
              author={book.author}
              dateDue={book.dateDue}
              onLoan={book.onLoan}
              currentUser={book.currentUser}
              location={book.location}
              id={book._id}
              imageUrl={book.imageUrl}
              handleReturnBookButton={this.handleReturnBookButton}
            />
          )
        })
        self.setState({
          books: books
        })
      })
    }
    return (
      <div className="BooksOnLoanContainer">
        {this.state.books}
      </div>
    )
  }
}

export default BooksOnLoanContainer;
