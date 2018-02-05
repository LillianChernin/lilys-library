import React, {Component} from 'react';
import FullBookDisplay from '../components/bookDisplay/FullBookDisplay';
import BookCover from '../images/test-book-cover-1.jpg'
import BookModel from '../models/Book';

class BookContainer extends Component {
  constructor() {
    super();
    this.state = {
      book: ""
    }
  }
  render() {
    // let self = this;
    // if (this.state.book === "") {
    //   BookModel.all().then( (res) => {
    //     let foundBook = res.data.filter(book => book._id === this.props._id)
    //     return (
    //       <MiniBookDisplay
    //         title={book.title}
    //         author={book.author}
    //         dateDue={book.dateDue}
    //         onLoan={book.onLoan}
    //         id={book._id}
    //       />
    //     )
    //     self.setState({
    //       book: book
    //     })
    //   })
    // }
    return (
      <div className="BookContainer">
        <FullBookDisplay
          title={"Introduction to Quantum Mechanics"}
          author={["David J. Griffiths"]}
          onLoan={false}
          dateDue={""}
          imageUrl={BookCover}
        />
      </div>
    )
  }
}

export default BookContainer;
