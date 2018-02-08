import React, {Component} from 'react';
import Search from '../components/search/Search';
import BookModel from '../models/Book';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchParameter: "Title",
      searchTerm: ""
    }
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.onInputChangeSearchParameter = this.onInputChangeSearchParameter.bind(this);
    this.onInputChangeSearchTerm = this.onInputChangeSearchTerm.bind(this);
  }
  handleSearchButton(event) {
    let searchBody = {};
    searchBody.searchParameter = this.state.searchParameter;
    searchBody.searchTerm = this.state.searchTerm;
    let self = this;
    BookModel.search(searchBody).then((res) => {
      console.log(res);
    })
  }
  onInputChangeSearchParameter(event) {
    this.setState({
      searchParameter: event.target.value
    })
  }
  onInputChangeSearchTerm(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }
  render() {
    return (
      <Search
        handleSearchButton={this.handleSearchButton}
        onInputChangeSearchParameter={this.onInputChangeSearchParameter}
        onInputChangeSearchTerm={this.onInputChangeSearchTerm}
      />
    )
  }
}

export default SearchContainer;
