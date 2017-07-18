import React, { Component } from 'react'
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: ''
    })
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <input type='submit' />
        </form> 
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
      </div>
    )
  }
}

export default ReviewInput
