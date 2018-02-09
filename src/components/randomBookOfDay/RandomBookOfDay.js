import React, {Component} from 'react';
import './RandomBookOfDay.css';
import {Link} from 'react-router-dom';

class RandomBookOfDay extends Component {
  render() {
    let authorList;
    if (this.props.book.author.length > 2) {
      for (let i = 0; i < this.props.book.author.length; i++) {
        if (i === (this.props.book.author.length - 1)) {
          authorList = authorList + ", and " + this.props.book.author[i];
        } else if (i === 0) {
          authorList = this.props.book.author[i]
        } else {
          authorList = authorList + ", " + this.props.book.author[i];
        }
      }
    } else if (this.props.book.author.length === 2) {
      authorList = this.props.book.author[0] + " and " + this.props.book.author[1];
    } else if (this.props.author.book.length === 1) {
      authorList = this.props.book.author[0];
    }
    return (
      <div className="RandomBookOfDay">
        <h1 className="RandomBookOfDay-Header">Random Book of the Day!</h1>
        <Link className="RandomBook-Link" to={'/books/' +  this.props.book._id}><h2 className="RandomBookOfDay-Title">{this.props.book.title}</h2></Link>
        <h3 className="RandomBookOfDay-Author">By {authorList}</h3>
        <img className="RandomBookOfDay-Image" src={this.props.book.imageUrl}/>
      </div>
    )
  }
}

export default RandomBookOfDay;
