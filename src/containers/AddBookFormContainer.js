import React, {Component} from 'react';
import AddBookForm from '../components/addBookForm/AddBookForm';

class AddBookFormContainer extends Component {
  render() {
    return (
      <div className="AddBookFormContainer">
        <AddBookForm />
      </div>
    )
  }
}

export default AddBookFormContainer;
