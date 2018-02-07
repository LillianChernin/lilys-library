import React, {Component} from 'react';
import FullBookDisplay from '../components/bookDisplay/FullBookDisplay';
import BookCover from '../images/test-book-cover-1.jpg'
import BookModel from '../models/Book';
import EditBookFormContainer from './EditBookFormContainer';

class BookContainer extends Component {
  constructor() {
    super();
    this.state = {
      book: "",
      onLoan: "",
      dateDate: "",
      bookObject: "",
      inEditMode: false
    }
    this.handleBorrowBookButton = this.handleBorrowBookButton.bind(this);
    this.handlePlaceHoldButton = this.handlePlaceHoldButton.bind(this);
    this.handleDeleteBookButton = this.handleDeleteBookButton.bind(this);
    this.handleEditBookButton = this.handleEditBookButton.bind(this);
    this.handleEditBookLocationButton = this.handleEditBookLocationButton.bind(this);
  }
  handleBorrowBookButton() {
    let userName = prompt("Please enter your name and click OK to borrow book.")
    if (userName !== null || userName !== "") {
      console.log(this.state.bookObject._id);
      BookModel.borrowBook(this.state.bookObject._id, userName).then((res) => {
        let dateDue = res.data.dateDue
        let shortDueDate = dateDue.split('').slice(0,10).join('');
        alert('The book is now on loan! Please return by ' + shortDueDate);
      })
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
  handleEditBookButton() {
    console.log('edit book button was clicked!');
    let updatedState = !(this.state.inEditMode)
    this.setState({
      inEditMode: updatedState
    })
    console.log(this.state.inEditMode)
    console.log(updatedState)
  }
  handleEditBookLocationButton() {
    let newLocation = prompt("Please enter the new location and click OK to update");
    if (newLocation !== null || newLocation !== "") {
      BookModel.updateLocation(this.state.bookObject._id, newLocation).then((res) => {
        alert('location was sucessfully updated!');
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
            imageUrl={foundBook[0].imageUrl}
            location={foundBook[0].location}
            id={foundBook[0]._id}
            handleBorrowBookButton={this.handleBorrowBookButton}
            handlePlaceHoldButton={this.handlePlaceHoldButton}
            handleDeleteBookButton={this.handleDeleteBookButton}
            handleEditBookButton={this.handleEditBookButton}
            handleEditBookLocationButton={this.handleEditBookLocationButton}
          />
        )
        self.setState({
          book: renderedFoundBook,
          bookObject: foundBook[0]
        })
      })
    }
    let renderedEditForm;
    if (this.state.inEditMode === true) {
      renderedEditForm = (
        <EditBookFormContainer book={this.state.bookObject} />
      )
    }
    return (
      <div className="BookContainer">
        {this.state.book}
        {renderedEditForm}
      </div>
    )
  }
}

export default BookContainer;
