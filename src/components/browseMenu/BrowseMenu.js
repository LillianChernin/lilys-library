import React, {Component} from 'react';
import './BrowseMenu.css'
import {Link} from 'react-router-dom';

class BrowseMenu extends Component {
  render() {
    return (
      <div className="BrowseMenu">
        <Link to={'/browse'}><button className="BrowseButton">Browse</button></Link>
      </div>
    )
  }
}

export default BrowseMenu;
