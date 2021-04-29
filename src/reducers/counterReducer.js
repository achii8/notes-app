import {INCREMENT,DECREMENT} from '../actions/actionTypes'

const initialState = {
  counter: 0,
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}
