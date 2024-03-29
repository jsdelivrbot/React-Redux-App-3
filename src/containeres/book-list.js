import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-md-3">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    // this.props.book
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // this.props.selectBook
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

