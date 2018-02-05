import React, {Component} from 'react';
import './FullBookDisplay.css';

class FullBookDisplay extends Component {
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
      dateAvailable = <h5 className="dateAvailable">Due: {this.props.dateDue}</h5>
    } else {
      loanStatus = <h5 className="Available">Available</h5>
      dateAvailable = <h5></h5>
    }
    return (
      <div className="FullBookDisplay">
        <h2>{this.props.title}</h2>
        <h3>{authorList}</h3>
        <img src={this.props.imageUrl} alt="book cover" />  
      </div>
    )
  }
}

export default FullBookDisplay;
