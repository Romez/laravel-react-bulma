import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { AdminPage, CategoriesPage } from './components'
import { GoodsPage } from './containers'

export default (
  <Switch>
    <Route path={window.laroute.route('admin')} component={AdminPage} exact/>
    <Route path={window.laroute.route('admin.category')} exact component={CategoriesPage}/>
    <Route path={window.laroute.route('admin.goods')} exact component={GoodsPage}/>
  </Switch>
)