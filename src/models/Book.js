import axios from 'axios';

class BookModel {
  static create(book) {
    let request = axios.post('https://lilys-library-back-end.herokuapp.com/api/v1/books', book);
    return request;
  }
  static all() {
    let request = axios.get('https://lilys-library-back-end.herokuapp.com/api/v1/books');
    return request;
  }
  static getOne(bookId) {
    let url = 'https://lilys-library-back-end.herokuapp.com/api/v1/books/' + bookId;
    let request = axios.get(url);
    return request;
  }
  static delete(book) {
    let url = 'https://lilys-library-back-end.herokuapp.com/api/v1/books/' + book._id;
    let request = axios.delete(url);
    return request;
  }
  static update(bookId, bookBody) {
    let url = 'https://lilys-library-back-end.herokuapp.com/api/v1/books/' + bookId;
    let request = axios.put(url, {
      body: bookBody
    });
    return request;
  }
  static updateLocation(bookId, newLocation) {
    let url = 'https://lilys-library-back-end.herokuapp.com/api/v1/books/' + bookId + '/update-location';
    let request = axios.put(url, {
      newLocation: newLocation
    });
    return request;
  }
  static updateHoldStatus(bookId, holdRequest) {
    let url = 'https://lilys-library-back-end.herokuapp.com/api/v1/books/' + bookId + '/update-hold-status';
    let request = axios.put(url, {
      body: holdRequest
    });
    return request;
  }
  static borrowBook(bookId, username) {
    let url = 'https://lilys-library-back-end.herokuapp.com/api/v1/books/' + bookId + '/borrow-book';
    console.log(url);
    let request = axios.put(url, {
      userName: username
    });
    return request;
  }
  static returnBook(bookId) {
    let url = 'https://lilys-library-back-end.herokuapp.com/api/v1/books/' + bookId + '/return-book';
    let request = axios.put(url);
    return request;
  }
}

export default BookModel;
