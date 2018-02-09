import React, {Component} from 'react';
import RandomBookOfDayContainer from '../../containers/RandomBookOfDayContainer';
import WelcomeMessage from '../welcomeMessage/WelcomeMessage';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <WelcomeMessage />
        <RandomBookOfDayContainer />
      </div>
    )
  }
}

export default Home;
