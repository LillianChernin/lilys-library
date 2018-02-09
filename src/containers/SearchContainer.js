import React, {Component} from 'react';
import Search from '../components/search/Search';
import BookModel from '../models/Book';
import {Redirect} from 'react-router-dom';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchParameter: "title",
      searchTerm: "",
      searchCompletedOneResult: false,
      searchCompletedMultiResult: false,
      result: "",
      results: ""
    }
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.onInputChangeSearchParameter = this.onInputChangeSearchParameter.bind(this);
    this.onInputChangeSearchTerm = this.onInputChangeSearchTerm.bind(this);
  }
  handleSearchButton(event) {
    let self = this;
    let allBooks;
    let results = [];
    let flag = 'i';
    let searchTerm = this.state.searchTerm;
    let re = new RegExp(searchTerm, flag);
    let searchParameter = this.state.searchParameter.toLowerCase();
    BookModel.all().then((res) => {
      allBooks = res.data;
      if (searchParameter === 'title' || searchParameter === 'format') {
        for (let i = 0; i < allBooks.length; i++) {
          if (allBooks[i][searchParameter].match(re)) {
            console.log(allBooks[i]);
            results.push(allBooks[i]);
          }
        }
      } else {
        for (let i = 0; i < allBooks.length; i++) {
          for (let k = 0; k < allBooks[i][searchParameter].length; k++) {
            if (allBooks[i][searchParameter][k].match(re)) {
              console.log(allBooks[i]);
              results.push(allBooks[i]);
            }
          }
        }
      }
      if (results.length === 1) {
        self.setState({
          result: results[0],
          searchCompletedOneResult: true
        })
      } else if (results.length > 1) {
        self.setState({
          results: results,
          searchCompletedMultiResult: true
        })
      }
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
    if (this.state.searchCompletedOneResult) {
      this.setState({
        searchCompletedOneResult: false
      })
      return (
        <Redirect to={'/books/' + this.state.result._id}/>
      )
    }
    if (this.state.searchCompletedMultiResult) {
      this.setState({
        searchCompletedMultiResult: false
      })
      return (
        <Redirect to={{
                pathname: '/search-results',
                state: { referrer: this.state.results }
            }} />)
    }
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
