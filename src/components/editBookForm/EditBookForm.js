import React, {Component} from 'react';
import './EditBookForm.css';

class EditBookForm extends Component {
  render() {
    return (
      <div className="EditBookForm">
        <span>Updated Location Id: </span>
        <input type="text" placeholder="Enter new location id here" value={this.props.book.location} onChange={this.props.onInputChangeLocation}/>
        <button className="UpdateLocationButton" onClick={this.props.handleUpdateLocationButton}>Update Location</button>
      </div>
    )
  }
}

export default EditBookForm;
