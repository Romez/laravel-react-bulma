import { combineReducers } from 'redux'

import {sidebarReducer} from '../components/Sidebar'
import {adminReduces} from '../pages/Admin'
import {categoryReducer} from '../pages/Category'


export default  combineReducers({
  sidebarReducer,
  admin: adminReduces,
  categoryReducer
})
