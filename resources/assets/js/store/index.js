import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import mainReducer from '../reducers'

export default createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)))
