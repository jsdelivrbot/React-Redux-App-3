import React, { Component } from 'react';

import BookList from '../containeres/book-list';
import BookDetails from '../containeres/book-details';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}
