import React from 'react'
import { Route } from 'react-router-dom'

import { CategoryPage } from './containers'

export default (
  <Route path={window.laroute.route('category.slug', {slug: ':slug'})} component={CategoryPage}/>
)