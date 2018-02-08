import React, {Component} from 'react';
import './AddBookForm.css';
import {Link} from 'react-router-dom';

class AddBookForm extends Component {
  render() {
    let renderedAuthors = [];
    let renderedGenres = [];
    let renderedKeywords = [];
    for (let i = 0; i < this.props.authors.length; i++) {
      let className = "displayAuthor " + i;
      renderedAuthors.push(<div className={className}>{this.props.authors[i]} <button onClick={this.props.deleteAuthor}>X</button></div>);
    }
    for (let i = 0; i < this.props.genres.length; i++) {
      let className = "displayGenre " + i;
      renderedGenres.push(<div className={className}>{this.props.genres[i]} <button onClick={this.props.deleteGenre}>X</button></div>);
    }
    for (let i = 0; i < this.props.keywords.length; i++) {
      let className = "displayKeyword " + i;
      renderedKeywords.push(<div className={className}>{this.props.keywords[i]} <button onClick={this.props.deleteKeyword}>X</button></div>);
    }
    return (
      <div className="AddBookForm">
        <h1 className="AddBookForm-MainHeader">Add Book to Library</h1>
        <span className="AddBookForm-ItemTitles">Book Title: </span>
        <input className="AddBookForm-Input" type="text" onChange={this.props.onInputChangeTitle}/>
        <br />
        <span className="AddBookForm-ItemTitles">Author(s): </span>
        <input className="AddBookForm-Input" type="text" onChange={this.props.onInputChangeAuthor}/>
        <button className="AddBookForm-Button" onClick={this.props.handleAddAuthorButton}>Add Author</button>
        <div className="Authors">{renderedAuthors}</div>
        <br />
        <span className="AddBookForm-ItemTitles">Genre(s): </span>
        <input className="AddBookForm-Input" type="text" onChange={this.props.onInputChangeGenre}/>
        <button className="AddBookForm-Button" onClick={this.props.handleAddGenreButton}>Add Genre</button>
        <div className="Genres">{renderedGenres}</div>
        <br />
        <span className="AddBookForm-ItemTitles">Keywords: </span>
        <input className="AddBookForm-Input" type="text" onChange={this.props.onInputChangeKeyword}/>
        <button className="AddBookForm-Button" onClick={this.props.handleAddKeywordButton}>Add Keyword</button>
        <div className="Keywords">{renderedKeywords}</div>
        <br />
        <span className="AddBookForm-ItemTitles">Date Published: </span>
        <input className="AddBookForm-Input" type="text" onChange={this.props.onInputChangeDatePublished}/>
        <br />
        <span className="AddBookForm-ItemTitles">Format: </span>
        <select className="AddBookForm-Select" required onChange={this.props.onInputChangeFormat}>
          <option value="book">Book</option>
          <option value="book-with-cd">Book w/CD</option>
          <option value="book-with-dvd">Book w/DVD</option>
          <option value="cd">CD</option>
          <option value="DVD">DVD</option>
        </select>
        <br />
        <span className="AddBookForm-ItemTitles">ISBN: </span>
        <input className="AddBookForm-Input" type="text" onChange={this.props.onInputChangeIsbn}/>
        <br />
        <span className="AddBookForm-ItemTitles">Location: </span>
        <input className="AddBookForm-Input" type="text" onChange={this.props.onInputChangeLocation}/>
        <br />
        <button className="AddBookForm-Button" onClick={this.props.handleSubmit}>Add to Library</button>
      </div>
    )
  }
}

export default AddBookForm;
