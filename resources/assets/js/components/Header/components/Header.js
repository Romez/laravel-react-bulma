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
              <a className="navbar-link" href="#">
                Админка
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="#">
                  Категории
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Товары
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                     data-social-target="http://localhost:4000" target="_blank"
                     href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"/>
              </span>
                    <span>
                Tweet
              </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary"
                     href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
              <span className="icon">
                <i className="fas fa-download"/>
              </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
