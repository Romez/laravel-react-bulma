import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {Sidebar} from './components/Sidebar'
import cn from 'classnames'

import store from './store'
import routes from './routes'

import '../sass/app.scss'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <main className={cn('section', 'columns')}>
            <div className={cn('column', 'is-one-fifth')}>
              <Sidebar/>
            </div>

            <div className="column">
              {routes}
            </div>
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDom.render(<App/>, document.querySelector('#app'))
