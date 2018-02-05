import React, {Component} from 'react';
import AddBookForm from '../components/addBookForm/AddBookForm';
import BookModel from '../models/Book';

class AddBookFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      authors: [],
      genre: "",
      genres: [],
      keyword: "",
      keywords: [],
      datePublished: "",
      format: "book",
      imageUrl: "",
      location: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChangeTitle = this.onInputChangeTitle.bind(this);
    this.onInputChangeAuthor = this.onInputChangeAuthor.bind(this);
    this.onInputChangeGenre = this.onInputChangeGenre.bind(this);
    this.onInputChangeKeyword = this.onInputChangeKeyword.bind(this);
    this.onInputChangeDatePublished = this.onInputChangeDatePublished.bind(this);
    this.onInputChangeFormat = this.onInputChangeFormat.bind(this);
    this.onInputChangeImageUrl = this.onInputChangeImageUrl.bind(this);
    this.onInputChangeLocation = this.onInputChangeLocation.bind(this);
  }
  handleSubmit() {
    console.log('submit button was clicked!');
  }
  onInputChangeTitle(event) {
    this.setState({
      title: event.target.value
    })
  }
  onInputChangeAuthor(event) {
    this.setState({
      author: event.target.value
    })
    console.log(this.state.author);
  }
  onInputChangeGenre(event) {
    this.setState({
      genre: event.target.value
    })
  }
  onInputChangeKeyword(event) {
    this.setState({
      keyword: event.target.value
    })
  }
  onInputChangeDatePublished(event) {
    this.setState({
      datePublished: event.target.value
    })
  }
  onInputChangeFormat(event) {
    this.setState({
      format: event.target.value
    })
    console.log(this.state.format);
  }
  onInputChangeImageUrl(event) {
    this.setState({
      imageUrl: event.target.value
    })
  }
  onInputChangeLocation(event) {
    this.setState({
      location: event.target.value
    })
  }
  render() {
    return (
      <div className="AddBookFormContainer">
        <AddBookForm
        title={this.state.title}
        author={this.state.author}
        genre={this.state.genre}
        keyword={this.state.keyword}
        datePublished={this.state.datePublished}
        format={this.state.format}
        imageUrl={this.state.imageUrl}
        location={this.state.location}
        handleSubmit={this.handleSubmit}
        onInputChangeTitle={this.onInputChangeTitle}
        onInputChangeAuthor={this.onInputChangeAuthor}
        onInputChangeGenre={this.onInputChangeGenre}
        onInputChangeKeyword={this.onInputChangeKeyword}
        onInputChangeDatePublished={this.onInputChangeDatePublished}
        onInputChangeFormat={this.onInputChangeFormat}
        onInputChangeImageUrl={this.onInputChangeImageUrl}
        onInputChangeLocation={this.onInputChangeLocation}
        />
      </div>
    )
  }
}

export default AddBookFormContainer;
