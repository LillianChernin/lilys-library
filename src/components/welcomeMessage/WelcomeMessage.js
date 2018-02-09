import React, {Component} from 'react';
import './WelcomeMessage.css';

class WelcomeMessage extends Component {
  render() {
    return(
      <div className="WelcomeMessage">
        <h1 className="WelcomeMessage-Header">Welcome to Lily's Library</h1>
        <div className="WelcomeMessage-ParagraphDiv">
          <p className="WelcomeMessage-Paragraph">Check out the full book collection by clicking the books icon above.  Click the Browse button to look up books by genre.  Use the search bar above to search for books by various search parameters.  Below is today's random book of the day.</p>
          <p>Thanks for stopping by and happy reading!</p>
        </div>
      </div>
    )
  }
}

export default WelcomeMessage;
