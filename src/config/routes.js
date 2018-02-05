import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import BookContainer from '../containers/BookContainer';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/books/book' component={BookContainer} />
  </Switch>
)
