import React, { Component } from 'react'

class Review extends Component {

  handleDelete(e) {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }
  
  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button type='submit' onClick={() => this.handleDelete()}>Delete</button>
      </div>
    )
  }
}

export default Review