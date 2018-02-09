import React, {Component} from 'react';
import RandomBookOfDayContainer from '../../containers/RandomBookOfDayContainer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <RandomBookOfDayContainer />
      </div>
    )
  }
}

export default Home;
