import React from 'react'
import { Switch } from 'react-router-dom'

import { homeRouter } from '../pages/Home'

const routes = (
  <Switch>
    {homeRouter}
  </Switch>
)

export default routes
