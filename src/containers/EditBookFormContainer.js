import React, {Component} from 'react';
import EditBookForm from '../components/editBookForm/EditBookForm'
import BookModel from '../models/Book';

class EditBookFormContainer extends Component {
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
      isbn: "",
      location: "",
      imageUrl: "",
      id: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddAuthorButton = this.handleAddAuthorButton.bind(this);
    this.handleAddGenreButton = this.handleAddGenreButton.bind(this);
    this.handleAddKeywordButton = this.handleAddKeywordButton.bind(this);
    this.handleDeleteAuthorButton = this.handleDeleteAuthorButton.bind(this);
    this.handleDeleteGenreButton = this.handleDeleteGenreButton.bind(this);
    this.handleDeleteKeywordButton = this.handleDeleteKeywordButton.bind(this);
    this.onInputChangeTitle = this.onInputChangeTitle.bind(this);
    this.onInputChangeAuthor = this.onInputChangeAuthor.bind(this);
    this.onInputChangeGenre = this.onInputChangeGenre.bind(this);
    this.onInputChangeKeyword = this.onInputChangeKeyword.bind(this);
    this.onInputChangeDatePublished = this.onInputChangeDatePublished.bind(this);
    this.onInputChangeFormat = this.onInputChangeFormat.bind(this);
    this.onInputChangeIsbn = this.onInputChangeIsbn.bind(this);
    this.onInputChangeLocation = this.onInputChangeLocation.bind(this);
    this.updateEditFormWithCurrentInfo = this.updateEditFormWithCurrentInfo.bind(this);
  }
  handleSubmit() {
    let self = this;
    let bookObject = {
      title: self.state.title,
      author: self.state.authors,
      genres: self.state.genres,
      keywords: self.state.keywords,
      datePublished: self.state.datePublished,
      format: self.state.format,
      isbn: self.state.isbn,
      location: self.state.location,
      imageUrl: self.state.imageUrl
    }
    BookModel.update(self.state.id, bookObject).then((res) => {
      self.setState({
        title: "",
        author: "",
        authors: [],
        genre: "",
        genres: [],
        keyword: "",
        keywords: [],
        datePublished: "",
        format: "book",
        isbn: "",
        location: ""
      })
      self.forceUpdate();
    })
  }
  handleAddAuthorButton(event) {
    let newArray = this.state.authors.slice();
    newArray.push(this.state.author);
    this.setState({
      authors: newArray
    })
    event.target.previousSibling.value = "";
  }
  handleAddGenreButton(event) {
    let newArray = this.state.genres.slice();
    newArray.push(this.state.genre);
    this.setState({
      genres: newArray
    })
    event.target.previousSibling.value = "";
  }
  handleAddKeywordButton(event) {
    let newArray = this.state.keywords.slice();
    newArray.push(this.state.keyword);
    this.setState({
      keywords: newArray
    })
    event.target.previousSibling.value = "";
  }
  handleDeleteAuthorButton(event) {
    let indexToDelete = Number(event.target.parentNode.className.split(' ')[1]);
    let newArray = this.state.authors.slice();
    newArray.splice(indexToDelete, 1);
    this.setState({
      authors: newArray
    })
  }
  handleDeleteGenreButton(event) {
    let indexToDelete = Number(event.target.parentNode.className.split(' ')[1]);
    let newArray = this.state.genres.slice();
    newArray.splice(indexToDelete, 1);
    this.setState({
      genres: newArray
    })
  }
  handleDeleteKeywordButton(event) {
    let indexToDelete = Number(event.target.parentNode.className.split(' ')[1]);
    let newArray = this.state.keywords.slice();
    newArray.splice(indexToDelete, 1);
    this.setState({
      keywords: newArray
    })
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
  }
  onInputChangeIsbn(event) {
    this.setState({
      isbn: event.target.value
    })
  }
  onInputChangeLocation(event) {
    this.setState({
      location: event.target.value
    })
  }
  updateEditFormWithCurrentInfo() {
    this.setState({
      title: this.props.book.title,
      authors: this.props.book.author,
      genres: this.props.book.genres,
      keywords: this.props.book.keywords,
      datePublished: this.props.book.datePublished,
      format: this.props.book.format,
      isbn: this.props.book.isbn,
      location: this.props.book.location,
      imageUrl: this.props.book.imageUrl,
      id: this.props.book._id
    })
  }

  render() {
    if (this.state.title === "") {
      this.updateEditFormWithCurrentInfo();
    }
    return (
      <div className="AddBookFormContainer">
        <EditBookForm
        title={this.state.title}
        author={this.state.author}
        authors={this.state.authors}
        genre={this.state.genre}
        genres={this.state.genres}
        keyword={this.state.keyword}
        keywords={this.state.keywords}
        datePublished={this.state.datePublished}
        format={this.state.format}
        isbn={this.state.isbn}
        location={this.state.location}
        handleSubmit={this.handleSubmit}
        handleAddAuthorButton={this.handleAddAuthorButton}
        handleAddGenreButton={this.handleAddGenreButton}
        handleAddKeywordButton={this.handleAddKeywordButton}
        deleteAuthor={this.handleDeleteAuthorButton}
        deleteGenre={this.handleDeleteGenreButton}
        deleteKeyword={this.handleDeleteKeywordButton}
        onInputChangeTitle={this.onInputChangeTitle}
        onInputChangeAuthor={this.onInputChangeAuthor}
        onInputChangeGenre={this.onInputChangeGenre}
        onInputChangeKeyword={this.onInputChangeKeyword}
        onInputChangeDatePublished={this.onInputChangeDatePublished}
        onInputChangeFormat={this.onInputChangeFormat}
        onInputChangeIsbn={this.onInputChangeIsbn}
        onInputChangeLocation={this.onInputChangeLocation}
        updateEditFormWithCurrentInfo={this.updateEditFormWithCurrentInfo}
        />
      </div>
    )
  }
}

export default EditBookFormContainer;
