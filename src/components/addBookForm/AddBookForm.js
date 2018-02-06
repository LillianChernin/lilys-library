import React, {Component} from 'react';
import './AddBookForm.css';

class AddBookForm extends Component {
  render() {
    let renderedAuthors = [];
    let renderedGenres = [];
    let renderedKeywords = [];
    for (let i = 0; i < this.props.authors.length; i++) {
      let className = "displayAuthor " + i;
      renderedAuthors.push(<div className={className}>{this.props.authors[i]} <button onClick={this.props.deleteAuthor} >X</button></div>);
    }
    for (let i = 0; i < this.props.genres.length; i++) {
      let className = "displayGenre " + i;
      renderedGenres.push(<div className={className} >{this.props.genres[i]} <button onClick={this.props.deleteGenre} >X</button></div>);
    }
    for (let i = 0; i < this.props.keywords.length; i++) {
      let className = "displayKeyword " + i;
      renderedKeywords.push(<div className={className} >{this.props.keywords[i]} <button onClick={this.props.deleteKeyword} >X</button></div>);
    }
    return (
      <div className="AddBookForm">
        <span>Book Title: </span>
        <input type="text" onChange={this.props.onInputChangeTitle}/>
        <br />
        <span>Author(s): </span>
        <input type="text" onChange={this.props.onInputChangeAuthor}/>
        <button onClick={this.props.handleAddAuthorButton}>Add Author</button>
        <div className="Authors">{renderedAuthors}</div>
        <br />
        <span>Genre(s): </span>
        <input type="text" onChange={this.props.onInputChangeGenre}/>
        <button onClick={this.props.handleAddGenreButton}>Add Genre</button>
        <div className="Genres">{renderedGenres}</div>
        <br />
        <span>Keywords: </span>
        <input type="text" onChange={this.props.onInputChangeKeyword}/>
        <button onClick={this.props.handleAddKeywordButton}>Add Keyword</button>
        <div className="Keywords">{renderedKeywords}</div>
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
