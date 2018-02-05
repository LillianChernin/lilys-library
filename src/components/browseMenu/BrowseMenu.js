import React, {Component} from 'react';
import './BrowseMenu.css'
import BrowseMenuExpansion from './BrowseMenuExpansion';

class BrowseMenu extends Component {
  render() {
    let browseExpansion;
    if (this.props.clicked) {
      browseExpansion = <BrowseMenuExpansion />
    }
    return (
      <div className="BrowseMenu">
        <button className="BrowseButton" onClick={this.props.handleClick}>Browse</button>
        <div className="browseExpansion">{browseExpansion}</div>
      </div>
    )
  }
}

export default BrowseMenu;
