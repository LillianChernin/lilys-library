import React, {Component} from 'react';
import BrowseMenu from '../components/browseMenu/BrowseMenu';

class BrowseContainer extends Component  {
  constructor () {
    super();
    this.state = {
      browseButtonClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log('button was clicked!');
    this.setState({
      browseButtonClicked: !(this.state.browseButtonClicked)
    })
    console.log(this.state.browseButtonClicked);
  }
  render() {
    return (
      <BrowseMenu
        clicked={this.state.browseButtonClicked}
        handleClick={this.handleClick}
      />
    )
  }
}

export default BrowseContainer;
