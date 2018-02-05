import React, {Component} from 'react';
import MiniBookDisplay from '../components/bookDisplay/MiniBookDisplay';
import BookModel from '../models/Book';

class BooksContainer extends Component {
  render() {
    return (
      <div className="BooksContainer">
        <MiniBookDisplay
          title={"Test Book Title"}
          author={["John Doe","Jane Doe"]}
          dateDue={["February 18th 2018"]}
          onLoan={true}
        />
        <MiniBookDisplay
          title={"Test Book Title 2"}
          author={["Fred Finkle"]}
          dateDue={""}
          onLoan={false}
        />
        <MiniBookDisplay
          title={"Fascinating Novel"}
          author={["Tim Twiddles","Roberta Roberts","Derp Derpinstein"]}
          dateDue={""}
          onLoan={false}
        />
      </div>
    )
  }
}

export default BooksContainer;
