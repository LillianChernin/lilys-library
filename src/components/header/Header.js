import React, {Component} from 'react';
import homeIcon from '../../images/home-icon.png';
import booksIcon from '../../images/books-icon.png';
import BrowseContainer from '../../containers/BrowseContainer';
import SearchContainer from '../../containers/SearchContainer';
import './Header.css';
import '../../containers/SearchContainer';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-main-title">
          <h1>Lily's Library</h1>
        </div>
        <div className="Header-icons">
          <img src={booksIcon} alt="books" />
          <img src={homeIcon} alt="house" />
        </div>
        <div>
          <SearchContainer />
          <BrowseContainer />
        </div>
      </div>
    )
  }
}

export default Header;
