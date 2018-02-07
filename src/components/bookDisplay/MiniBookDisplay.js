import React, {Component} from 'react';
import './MiniBookDisplay.css';
import {Link} from 'react-router-dom';

class MiniBookDisplay extends Component {
  render() {
    let authorList;
    let loanStatus;
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
    if (this.props.onLoan) {
      loanStatus = <h5 className="OnLoan">On Loan</h5>
      dateAvailable = <h5 className="dateAvailable">Due: {this.props.dateDue.split('').slice(0,10).join('')}</h5>
    } else {
      loanStatus = <h5 className="Available">Available</h5>
      dateAvailable = <h5></h5>
    }
    return (
      <div className={"MiniBookDisplay " + this.props.id}>
        <Link className="Link" to={'/books/' + this.props.id}><div className="MiniBookDisplayInnerContent">
          <h3>{this.props.title}</h3>
          <img className="MiniBookCover" src={this.props.imageUrl} alt="book cover" />
          <h4> By <span className="MiniBookDisplay-AuthorList">{authorList}</span></h4>
          <h5>Location: {this.props.location}</h5>
          {loanStatus}
          {dateAvailable}
        </div></Link>
        <button className="PlaceHoldButton" onClick={this.props.handlePlaceHoldButton}>Place a Hold</button>
        <div className="buttonSpacer"></div>
        <button className="BorrowBookButton" onClick={this.props.handleBorrowBookButton}>Borrow Book</button>
      </div>
    )
  }
}

export default MiniBookDisplay;
