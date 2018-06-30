import { combineReducers } from 'redux'

import {categoriesReducer} from '../components/Sidebar'
import {adminReduces} from '../pages/Admin'
import {categoryReducer} from '../pages/Category'


export default  combineReducers({
  categoriesReducer,
  admin: adminReduces,
  categoryReducer
})
