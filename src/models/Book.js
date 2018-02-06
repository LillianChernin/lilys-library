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
    let request = axios.get(`https://lilys-library-back-end.herokuapp.com/api/vi/books/${bookId}`);
    return request;
  }
  static delete(book) {
    let url = 'https://lilys-library-back-end.herokuapp.com/api/v1/books/' + book[0]._id;
    let request = axios.delete(url);
    return request;
  }
  static update(bookId, bookBody) {
    let request = axios.put(`https://lilys-library-back-end.herokuapp.com/api/v1/books/${bookId}`, {
      body: bookBody
    });
    return request;
  }
}

export default BookModel;
