import React, {Component} from 'react';
import homeIcon from '../../images/home-icon.png';
import booksIcon from '../../images/books-icon.png';
import BrowseContainer from '../../containers/BrowseContainer';
import SearchContainer from '../../containers/SearchContainer';
import './Header.css';
import '../../containers/SearchContainer';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="topHeader">
          <div className="Header-main-title">
            <h1 className="Header-main-heading"><Link className="Link" to={'/'}>Lily's Library</Link></h1>
          </div>
          <div className="spacer"></div>
          <div className="Header-icons">
            <Link to={'/books'}><img src={booksIcon} alt="books" className="Header-icon"/></Link>
            <Link to={'/'}><img src={homeIcon} alt="house" className="Header-icon"/></Link>
          </div>
        </div>
        <div className="bottomHeader">
          <SearchContainer />
          <BrowseContainer />
        </div>
      </div>
    )
  }
}

export default Header;
