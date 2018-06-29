import { combineReducers } from 'redux'

import {categoriesReducer} from '../components/Sidebar'
import {adminReduces} from '../pages/Admin'


export default  combineReducers({
  categoriesReducer,
  admin: adminReduces
})
