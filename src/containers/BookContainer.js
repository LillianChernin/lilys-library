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
      dateDate: ""
    }
    this.handleBorrowBookButton = this.handleBorrowBookButton.bind(this);
    this.handlePlaceHoldButton = this.handlePlaceHoldButton.bind(this);
    this.handleDeleteBookButton = this.handleDeleteBookButton.bind(this);
  }
  handleBorrowBookButton() {
    console.log('borrow book button was clicked!')
  }
  handlePlaceHoldButton() {
    console.log('place hold button was clicked!');
  }
  handleDeleteBookButton() {
    console.log('delete book button was clicked!');
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
            handleBorrowBookButton={this.handleBorrowBookButton}
            handlePlaceHoldButton={this.handlePlaceHoldButton}
            handleDeleteBookButton={this.handleDeleteBookButton}
          />
        )
        self.setState({
          book: renderedFoundBook
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
