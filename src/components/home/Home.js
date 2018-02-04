import React, {Component} from 'react';
import Header from '../header/Header';
import BooksContainer from '../../containers/BooksContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <BooksContainer />
      </div>
    )
  }
}

export default Home;
