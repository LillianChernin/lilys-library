import React, {Component} from 'react';
import SearchResults from '../components/searchResults/SearchResults';

class SearchResultsContainer extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="SearchResultsContainer">
        <SearchResults
        bookList={this.props.location.state.referrer}
        />
      </div>
    )
  }
}

export default SearchResultsContainer;
