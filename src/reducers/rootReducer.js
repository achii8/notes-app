import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

const root = combineReducers({
  counter: counterReducer,
})

export default root
