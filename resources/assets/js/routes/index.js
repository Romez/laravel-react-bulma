import React from 'react'
import { Switch } from 'react-router-dom'

import { homeRouter } from '../pages/Home'
import { adminRouter } from '../pages/Admin'
import { categoryRouter } from '../pages/Category'

const routes = (
  <Switch>
    {homeRouter}
    {categoryRouter}
    {adminRouter}
  </Switch>
)

export default routes
