import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(r => r.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {reviews.map((r, i) => <Review key={i} review={r} store={this.props.store} />) }
      </ul>
    )
  }
}

export default Reviews;