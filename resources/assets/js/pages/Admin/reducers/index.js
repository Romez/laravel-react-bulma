import { combineReducers } from 'redux'
import goodsReducer from './goodsReducer'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  goodsReducer,
  categoriesReducer
})
