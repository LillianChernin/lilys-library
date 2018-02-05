import React, {Component} from 'react';
import './AddBookForm.css';

class AddBookForm extends Component {
  render() {
    return (
      <div className="AddBookForm">
        <span>Book Title: </span>
        <input type="text" onChange={this.props.onInputChangeTitle}/>
        <br />
        <span>Author(s): </span>
        <input type="text" onChange={this.props.onInputChangeAuthor}/>
        <button>Add Author</button>
        <br />
        <span>Genre(s): </span>
        <input type="text" onChange={this.props.onInputChangeGenre}/>
        <button>Add Genre</button>
        <br />
        <span>Keywords: </span>
        <input type="text" onChange={this.props.onInputChangeKeyword}/>
        <button>Add Keyword</button>
        <br />
        <span>Date Published: </span>
        <input type="text" onChange={this.props.onInputChangeDatePublished}/>
        <br />
        <span>Format: </span>
        <select required onChange={this.props.onInputChangeFormat}>
          <option value="book">Book</option>
          <option value="book-with-cd">Book w/CD</option>
          <option value="book-with-dvd">Book w/DVD</option>
          <option value="cd">CD</option>
          <option value="DVD">DVD</option>
        </select>
        <br />
        <span>Image URL: </span>
        <input type="text" onChange={this.props.onInputChangeImageUrl}/>
        <br />
        <span>Location: </span>
        <input type="text" onChange={this.props.onInputChangeLocation}/>
        <br />
        <button onClick={this.props.handleSubmit}>Add to Library</button>
      </div>
    )
  }
}

export default AddBookForm;
