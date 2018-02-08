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
    if (this.state.bookObject.onLoan === false) {
      let userName = prompt("Please enter your name and click OK to borrow book.")
      console.log(userName);
      if (userName !== null && userName !== "") {
        let self = this;
        BookModel.borrowBook(this.state.bookObject._id, userName).then((res) => {
          let dateDue = res.data.dateDue
          let shortDueDate = dateDue.split('').slice(0,10).join('');
          alert('The book is now on loan! Please return by ' + shortDueDate);
          self.setState({
            book: "",
            bookObject: ""
          })
          self.forceUpdate();
        })
      }
    } else {
      alert('Book is not available.');
    }
  }
  handlePlaceHoldButton() {
    let userName = prompt("Please enter your name and click OK to place book on hold.")
    if (userName !== null && userName !== "") {
      let self = this;
      BookModel.placeHold(this.state.bookObject._id, userName).then((res) => {
        console.log(res);
      })
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
      BookModel.getOne(self.props.match.params.id).then((res) => {
        let foundBook = res.data;
        let renderedFoundBook = (
          <FullBookDisplay
            title={foundBook.title}
            author={foundBook.author}
            genres={foundBook.genres}
            keywords={foundBook.keywords}
            datePublished={foundBook.datePublished}
            onLoan={foundBook.onLoan}
            dateDue={foundBook.dateDue}
            imageUrl={foundBook.imageUrl}
            location={foundBook.location}
            id={foundBook._id}
            handleBorrowBookButton={this.handleBorrowBookButton}
            handlePlaceHoldButton={this.handlePlaceHoldButton}
            handleDeleteBookButton={this.handleDeleteBookButton}
            handleEditBookButton={this.handleEditBookButton}
            handleEditBookLocationButton={this.handleEditBookLocationButton}
          />
        )
        self.setState({
          book: renderedFoundBook,
          bookObject: foundBook
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
