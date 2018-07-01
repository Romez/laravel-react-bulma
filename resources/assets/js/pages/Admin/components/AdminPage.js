import React from 'react'
import { Link } from 'react-router-dom'

class AdminPage extends React.Component {
  render () {
    return (
      <div className={'admin-category'}>
        <div className={'columns'}>
          <div className="column is-half">
              <Link className={'box'} to={window.laroute.route('admin.category')}>
                <div className="is-size-3">Категории</div>
              </Link>
          </div>

          <div className="column is-half">
              <Link className={'box'} to={window.laroute.route('admin.goods')}>
                <div className="is-size-3">Товары</div>
              </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminPage
