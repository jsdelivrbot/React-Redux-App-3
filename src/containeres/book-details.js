import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
  render() {
    if (!this.props.activeBook) {
      return (
        <div>
          <h3>Active book:</h3>
          <h2>Please select book title</h2>
        </div>
      );
    }

    return (
      <div>
        <h3>Active book:</h3>
        <h2>{this.props.activeBook.title}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetails);