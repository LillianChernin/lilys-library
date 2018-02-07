import React, {Component} from 'react';
import EditBookForm from '../components/editBookForm/EditBookForm'

class EditBookFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      location: ""
    }
    this.onInputChangeLocation = this.onInputChangeLocation.bind(this);
  }
  onInputChangeLocation(event) {
    this.setState({
      location: event.target.value
    })
    console.log(this.state.location);
  }
  render() {
    return (
      <EditBookForm
      book={this.props.book}
      handleUpdateLocationButton={this.handleUpdateLocationButton}
      />
    )
  }
}

export default EditBookFormContainer;
