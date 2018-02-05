import React, {Component} from 'react';
import MiniBookDisplay from '../components/bookDisplay/MiniBookDisplay';
import BookModel from '../models/Book';

class BooksContainer extends Component {
  constructor() {
    super();
    this.state = {
      books: ""
    }
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
              id={book._id}
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
