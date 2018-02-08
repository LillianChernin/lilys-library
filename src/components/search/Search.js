import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
      <select onChange={this.props.onInputChangeSearchParameter} className="Search-Select" required name="searchOption">
        <option value="">Search by...</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="keyword">Keyword</option>
        <option value="genre">Genre</option>
        <option value="format">Format</option>
      </select>
      <input onChange={this.props.onInputChangeSearchTerm} className="Search-Input" type="text" placeholder="Enter search term here..."/>
      <button onClick={this.props.handleSearchButton} className="Search-Button">Search</button>
      </div>
    )
  }
}

export default Search;
