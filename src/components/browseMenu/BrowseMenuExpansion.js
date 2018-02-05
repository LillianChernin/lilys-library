import React, {Component} from 'react';
import './BrowseMenuExpansion.css';
import {Link} from 'react-router-dom';

class BrowseMenuExpansion extends Component {
  render() {
    let genreList = ["Art","Business","Christian","Classics","Cookbooks","Fantasy","Fiction","History","Horror","Music","Nonfiction","Poetry","Science","Science Fiction","Self Help","Young Adult"];
    let formats = ["Book","Book w/CD","Book w/DVD","CD","DVD"];
    let renderedGenreList;
    renderedGenreList = genreList.map((genre) => {
      return (
        <div>
        <Link to={('/browse/' + genre)}>{genre}</Link>
        <br />
        </div>
      )
    })
    return (
      <div className="BrowseMenuExpansion">
        <h2>Genres</h2>
        <div className="GenreList">{renderedGenreList}</div>
      </div>
    )
  }
}

export default BrowseMenuExpansion;
