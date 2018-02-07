import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import BookContainer from '../containers/BookContainer';
import BooksContainer from '../containers/BooksContainer';
import AddBookFormContainer from '../containers/AddBookFormContainer';
import BrowseViewContainer from '../containers/BrowseViewContainer';
import BooksOnLoanContainer from '../containers/BooksOnLoanContainer';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/books' component={BooksContainer} />
    <Route exact path='/addbook' component={AddBookFormContainer} />
    <Route exact path='/return' component={BooksOnLoanContainer} />
    <Route path='/books/:id' component={BookContainer} />
    <Route path='/browse/genre/:id' component={BrowseViewContainer} />
    <Route path='/browse/format/:id' component={BrowseViewContainer} />
  </Switch>
)
