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
  static delete(book) {
    let request = axios.delete(`https://lilys-library-back-end.herokuapp.com/api/v1/books/${book._id}`);
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
