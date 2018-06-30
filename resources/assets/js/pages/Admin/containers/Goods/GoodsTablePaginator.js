import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import qs from 'query-string'

class GoodsTablePaginator extends React.Component {

  update = () => {
    console.log('up')
  }

  render () {
    const {currentPage, lastPage} = this.props.pagination

    return (
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        <Link
          onClick={this.update}
          to={window.laroute.route('admin.goods', {page: currentPage - 1})}
          className={'pagination-previous'}
          disabled={currentPage === 1}
        >
          Назад
        </Link>

        <Link
          to={window.laroute.route('admin.goods', {page: currentPage + 1})}
          className={'pagination-next'}
          disabled={currentPage === lastPage}
          onClick={this.update}
        >
          Вперед
        </Link>

        <ul className="pagination-list">
          <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
          <li><span className="pagination-ellipsis">&hellip;</span></li>
          <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
          <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
          <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
          <li><span className="pagination-ellipsis">&hellip;</span></li>
          <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
        </ul>
      </nav>
    )
  }
}

GoodsTablePaginator.propTypes = {
  pagination: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
  }).isRequired
}

const mapStateToProps = (state) => ({
  pagination: state.admin.goodsReducer.pagination
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsTablePaginator)
