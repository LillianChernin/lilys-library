import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
      <select className="Search-Select" required name="searchOption">
        <option value="">Search by...</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="keyword">Keyword</option>
        <option value="genre">Genre</option>
        <option value="format">Format</option>
      </select>
      <input className="Search-Input" type="text" placeholder="Enter search term here..."/>
      <button className="Search-Button">Search</button>
      </div>
    )
  }
}

export default Search;
