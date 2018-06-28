import React from 'react'
import { Route } from 'react-router-dom'

import Page from './components/Page'

export default (
  <Route path={window.laroute.route('home')} component={Page}/>
)