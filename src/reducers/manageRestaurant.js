
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      const rest = {text: action.text, id: cuid()}
      return {...state, restaurants: state.restaurants.concat(rest) }

    case 'DELETE_RESTAURANT':
      const filteredRest = state.restaurants.filter(r => r.id !== action.id)
      return {...state, restaurants: filteredRest}

    case 'ADD_REVIEW':
      const review = {text: action.text, restaurantId: action.restaurantId, id: cuid()}
      return {...state, reviews: state.reviews.concat(review)}

    case 'DELETE_REVIEW':
      console.log('deleting review: ', action)
      const filteredRev = state.reviews.filter(r => r.id !== action.id)
      return {...state, reviews: filteredRev}

    default: 
      return state
  }
}