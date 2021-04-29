import { INCREMENT, DECREMENT } from './actionTypes'

export function inc() {
  return {
    type: INCREMENT,
  }
}

export const dec = () => {
  return {
    type: DECREMENT,
  }
}
