import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Page, Category } from './components'
import { Goods } from './containers'

export default (
  <Switch>
    <Route path={window.laroute.route('admin')} component={Page} exact/>
    <Route path={window.laroute.route('admin.category')} exact component={Category}/>
    <Route path={window.laroute.route('admin.goods')} exact component={Goods}/>
  </Switch>
)