import React, {Component} from 'react';
import './EditBookForm.css';

class EditBookForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
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
      <div className="EditBookForm">
        <h1 className="EditBookForm-MainHeader">Update Book</h1>
        <span className="EditBookForm-ItemTitles">Book Title: </span>
        <input className="EditBookForm-Input" type="text" onChange={this.props.onInputChangeTitle}/>
        <br />
        <span className="EditBookForm-ItemTitles">Author(s): </span>
        <input className="EditBookForm-Input" type="text" onChange={this.props.onInputChangeAuthor}/>
        <button className="EditBookForm-Button" onClick={this.props.handleAddAuthorButton}>Add Author</button>
        <div className="Authors">{renderedAuthors}</div>
        <br />
        <span className="EditBookForm-ItemTitles">Genre(s): </span>
        <input className="EditBookForm-Input" type="text" onChange={this.props.onInputChangeGenre}/>
        <button className="EditBookForm-Button" onClick={this.props.handleAddGenreButton}>Add Genre</button>
        <div className="Genres">{renderedGenres}</div>
        <br />
        <span className="EditBookForm-ItemTitles">Keywords: </span>
        <input className="EditBookForm-Input" type="text" onChange={this.props.onInputChangeKeyword}/>
        <button className="EditBookForm-Button" onClick={this.props.handleAddKeywordButton}>Add Keyword</button>
        <div className="Keywords">{renderedKeywords}</div>
        <br />
        <span className="EditBookForm-ItemTitles">Date Published: </span>
        <input className="EditBookForm-Input" type="text" onChange={this.props.onInputChangeDatePublished}/>
        <br />
        <span className="EditBookForm-ItemTitles">Format: </span>
        <select className="EditBookForm-Select" required onChange={this.props.onInputChangeFormat}>
          <option value="book">Book</option>
          <option value="book-with-cd">Book w/CD</option>
          <option value="book-with-dvd">Book w/DVD</option>
          <option value="cd">CD</option>
          <option value="DVD">DVD</option>
        </select>
        <br />
        <span className="EditBookForm-ItemTitles">ISBN: </span>
        <input className="EditBookForm-Input" type="text" onChange={this.props.onInputChangeIsbn}/>
        <br />
        <span className="EditBookForm-ItemTitles">Location: </span>
        <input className="EditBookForm-Input" type="text" onChange={this.props.onInputChangeLocation}/>
        <br />
        <button className="EditBookForm-Button" onClick={this.props.handleSubmit}>Update Book</button>
      </div>
    )
  }
}

export default EditBookForm;
