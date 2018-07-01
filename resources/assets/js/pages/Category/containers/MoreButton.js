import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import cn from 'classnames'
import { uploadGoods } from '../actions/categoryActions'
import { compose } from '@utils'

class MoreButton extends React.Component {

  /**
   * Загрузить еще товаров
   */
  upload = () => {
    const {goodsCount, goodsPerPage} = this.props
    const nextPage = (goodsCount / goodsPerPage) + 1

    const params = this.props.match.params
    this.props.uploadGoods(params.slug, nextPage)
  }

  render () {
    return (
      <div className={'buttons has-addons is-centered'}>
        <button
          onClick={this.upload}
          className={cn('button', 'is-info', 'is-outlined', 'is-large', {'is-loading': this.props.goodsLoading})}
        >
          Еще
        </button>
      </div>
    )
  }
}

MoreButton.propTypes = {
  goodsCount: PropTypes.number.isRequired,
  goodsPerPage: PropTypes.number.isRequired,
  goodsLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  const {goods, goodsPerPage, goodsLoading} = state.categoryReducer
  return {
    goodsCount: goods.length,
    goodsPerPage,
    goodsLoading
  }
}

const mapDispatchToProps = {
  uploadGoods
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MoreButton)
