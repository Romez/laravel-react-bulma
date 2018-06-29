import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Page, Category, Goods } from './components'

export default (
  <Switch>
    <Route path={window.laroute.route('admin')} component={Page} exact/>
    <Route path={window.laroute.route('admin.category')} component={Category}/>
    <Route path={window.laroute.route('admin.goods')} component={Goods}/>
  </Switch>
)