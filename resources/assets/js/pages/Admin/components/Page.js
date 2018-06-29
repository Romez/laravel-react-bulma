import React from 'react'
import { Link } from 'react-router-dom'

class Page extends React.Component {
  render () {
    return (
      <div className={'columns'}>

        <div className="column is-half">
          <div className="box">
            <Link to={'#'}>
              <div className="title">Категории</div>
            </Link>
          </div>
        </div>

        <div className="column is-half">
          <div className="box">

            <Link to={'#'}>
              <div className="title">Товары</div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Page
