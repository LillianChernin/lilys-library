import React, {Component} from 'react';
import './FullBookDisplay.css';

class FullBookDisplay extends Component {
  render() {
    let authorList;
    let loanStatus;
    let genresList;
    let keywordsList;
    let dateAvailable;
    if (this.props.author.length > 2) {
      for (let i = 0; i < this.props.author.length; i++) {
        if (i === (this.props.author.length - 1)) {
          authorList = authorList + ", and " + this.props.author[i];
        } else if (i === 0) {
          authorList = this.props.author[i]
        } else {
          authorList = authorList + ", " + this.props.author[i];
        }
      }
    } else if (this.props.author.length === 2) {
      authorList = this.props.author[0] + " and " + this.props.author[1];
    } else if (this.props.author.length === 1) {
      authorList = this.props.author[0];
    }
    if (this.props.genres.length > 2) {
      for (let i = 0; i < this.props.genres.length; i++) {
        if (i === (this.props.genres.length - 1)) {
          genresList = genresList + ", and " + this.props.genres[i];
        } else if (i === 0) {
          genresList = this.props.genres[i]
        } else {
          genresList = genresList + ", " + this.props.genres[i];
        }
      }
    } else if (this.props.genres.length === 2) {
      genresList = this.props.genres[0] + " and " + this.props.genres[1];
    } else if (this.props.genres.length === 1) {
      genresList = this.props.genres[0];
    }
    if (this.props.keywords.length > 2) {
      for (let i = 0; i < this.props.keywords.length; i++) {
        if (i === (this.props.keywords.length - 1)) {
          keywordsList = keywordsList + ", and " + this.props.keywords[i];
        } else if (i === 0) {
          keywordsList = this.props.keywords[i]
        } else {
          keywordsList = keywordsList + ", " + this.props.keywords[i];
        }
      }
    } else if (this.props.keywords.length === 2) {
      keywordsList = this.props.keywords[0] + " and " + this.props.keywords[1];
    } else if (this.props.keywords.length === 1) {
      keywordsList = this.props.keywords[0];
    }
    if (this.props.onLoan) {
      loanStatus = <h5 className="OnLoan">On Loan</h5>
      dateAvailable = <h5 className="dateAvailable">Due: {this.props.dateDue.split('').slice(0,10).join('')}</h5>
    } else {
      loanStatus = <h5 className="Available">Available</h5>
      dateAvailable = <h5></h5>
    }
    return (
      <div className="FullBookDisplay">
        <button className="PlaceHoldButton" onClick={this.props.handlePlaceHoldButton}>Place Hold</button>
        <div className="ButtonSpacer"></div>
        <button className="BorrowBookButton" onClick={this.props.handleBorrowBookButton}>Borrow Book</button>
        <h2 className="BookTitle">{this.props.title}</h2>
        <h3 className="BookAuthors">Author: {authorList}</h3>
        <h3 className="BookLocation">Location: {this.props.location}</h3>
        <button className="EditBookLocationButton" onClick={this.props.handleEditBookLocationButton}>Edit Location</button>
        {loanStatus}
        {dateAvailable}
        <h4 className="BookGenres">Genre: <span className="genreList">{genresList}</span></h4>
        <h4 className="BookKeywords">Keywords: <span className="keywordList">{keywordsList}</span></h4>
        <h4 className="BookDatePublished">Date Published: <span className="datePublished">{this.props.datePublished}</span></h4>
        <img className="bookDisplayImage" src={this.props.imageUrl} alt="book cover" />
        <br />
        <br />
        <button className="EditBookButton" onClick={this.props.handleEditBookButton}>Edit Book</button>
        <div className="ButtonSpacer"></div>
        <button className="DeleteBookButton" onClick={this.props.handleDeleteBookButton}>Delete Book</button>
      </div>
    )
  }
}

export default FullBookDisplay;
