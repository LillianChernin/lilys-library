import React, {Component} from 'react';
import BrowseView from '../components/browseView/BrowseView';

class BrowseViewContainer extends Component {
  render() {
    return (
      <div className="BrowseViewContainer">
        <BrowseView />
      </div>
    )
  }
}

export default BrowseViewContainer;
