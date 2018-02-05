import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import BookContainer from '../containers/BookContainer';
import BooksContainer from '../containers/BooksContainer';
import AddBookFormContainer from '../containers/AddBookFormContainer';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/books' component={BooksContainer} />
    <Route exact path='/addbook' component={AddBookFormContainer} />
    <Route path='/books/:id' component={BookContainer} />
  </Switch>
)
