import React, {Component} from 'react';
import FullBookDisplay from '../components/bookDisplay/FullBookDisplay';
import BookCover from '../images/test-book-cover-1.jpg'

class BookContainer extends Component {
  render() {
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
