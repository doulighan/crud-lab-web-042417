import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((r, i) => {
          return <Restaurant key={i} restaurant={r} 
          store={this.props.store} /> 
          }
        )}
     </ul>
    )
  }
}

export default Restaurants