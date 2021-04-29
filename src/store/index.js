import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = applyMiddleware(thunk)
const store = createStore(rootReducer, composeWithDevTools(enhancer))
export default store
