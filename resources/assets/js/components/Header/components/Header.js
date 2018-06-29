import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.PureComponent {

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"
                 width="112"
                 height="28"/>
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span/>
            <span/>
            <span/>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to={window.laroute.route('home')}>Главная</Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item" to={window.laroute.route('admin')}>Админка</Link>

              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to={window.laroute.route('admin.category')}>Категории</Link>
                <Link className="navbar-item" to={window.laroute.route('admin.goods')}>Товары</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
