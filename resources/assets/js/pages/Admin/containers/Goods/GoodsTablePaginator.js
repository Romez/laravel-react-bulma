import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { uploadGoodsRequest } from '../../actions/goodActions'

class GoodsTablePaginator extends React.Component {

  /**
   * Проверить корректность страницы
   */
  isValidPage = (page) => {
    return (page > 0) && page <= this.props.pagination.lastPage
  }

  goToPage = (page) => {
    return () => {
      if (!this.isValidPage(page)) { return }
      this.props.uploadGoodsRequest(page)
    }
  }

  getCenterPages = () => {
    const {lastPage, currentPage} = this.props.pagination

    let pages = []

    if (lastPage === 3) {
      pages.push(2)
    }

    if (lastPage > 4) {
      if (lastPage === currentPage) {
        pages = [currentPage - 3, currentPage - 2, currentPage - 1]
      } else if ((lastPage - 1) === currentPage) {
        pages = [currentPage - 2, currentPage - 1, currentPage]
      } else if (currentPage > 3) {
        pages = [currentPage - 1, currentPage, currentPage + 1]
      } else {
        pages = [2, 3, 4]
      }
    }

    return pages
  }

  render () {
    const {currentPage, lastPage} = this.props.pagination

    const prevPage = currentPage === 1 ? 1 : currentPage - 1
    const nextPage = currentPage === lastPage ? currentPage : currentPage + 1

    const centerPages = this.getCenterPages()

    return (
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        <Link
          onClick={this.goToPage(prevPage)}
          to={window.laroute.route('admin.goods', {page: prevPage})}
          className={'pagination-previous'}
          disabled={currentPage === 1}
        >
          Назад
        </Link>

        <Link
          to={window.laroute.route('admin.goods', {page: nextPage})}
          className={'pagination-next'}
          disabled={currentPage === lastPage}
          onClick={this.goToPage(nextPage)}
        >
          Вперед
        </Link>

        <ul className={'pagination-list'}>
          {/* First Page */}
          <li>
            <Link
              onClick={this.goToPage(1)}
              to={window.laroute.route('admin.goods', {page: 1})}
              className={cn('pagination-link', {
                'is-current': currentPage === 1
              })}
              aria-label={`Goto page ${1}`}
            >
              1
            </Link>
          </li>

          {/* Dots */}
          {(currentPage > 3 && lastPage > 5) && <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>}

          {centerPages.map((page) => (
            <li key={page}>
              <Link
                to={window.laroute.route('admin.goods', {page: page})}
                className={cn('pagination-link', {'is-current': currentPage === page})}
                onClick={this.goToPage(page)}
                aria-label={`Goto page ${page}`}
              >
                {page}
              </Link>
            </li>
          ))}

          {/* Dots */}
          {lastPage > 5 && <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>}

          {/* Last Page */}
          {<li>
            <Link
              to={window.laroute.route('admin.goods', {page: lastPage})}
              className={cn('pagination-link', {
                'is-current': currentPage === lastPage
              })}
              onClick={this.goToPage(lastPage)}
            >
              {lastPage}
            </Link>
          </li>}
        </ul>
      </nav>
    )
  }
}

GoodsTablePaginator.propTypes = {
  uploadGoodsRequest: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
  }).isRequired
}

const mapStateToProps = (state) => ({
  pagination: state.admin.goodsReducer.pagination
})

const mapDispatchToProps = {
  uploadGoodsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsTablePaginator)
