import React from 'react'
import { Switch } from 'react-router-dom'

import { homeRouter } from '../pages/Home'
import { adminRouter } from '../pages/Admin'

const routes = (
  <Switch>
    {homeRouter}
    {adminRouter}
  </Switch>
)

export default routes
