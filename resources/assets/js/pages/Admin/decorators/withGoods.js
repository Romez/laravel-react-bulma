import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Loader } from '../../../components'
import { uploadGoodsRequest } from '../actions/goodActions'
import qs from 'query-string'

export default WrappedComponent => {
  class AsyncComponent extends React.Component {
    componentWillMount() {
      const params = qs.parse(this.props.location.search)

      this.props.uploadGoodsRequest(params.page)
    }

    /**
     * Проверка наличия данных товаров
     * @returns {boolean}
     */
    isGoodsInReady = () => !!this.props.goods

    /**
     * Проверка наличия данных пагинации
     * @returns {boolean}
     */
    isPaginationInReady = () => !!this.props.pagination

    render () {
      return (
        this.isGoodsInReady() && this.isPaginationInReady() ? <WrappedComponent/> : <Loader/>
      )
    }
  }

  AsyncComponent.propTypes = {
    goods: PropTypes.array
  }

  const mapStateToProps = state => ({
    goods: state.admin.goodsReducer.goods,
    pagination: state.admin.goodsReducer.pagination
  })

  const mapDispatchToProps = {
    uploadGoodsRequest
  }

  return connect(mapStateToProps, mapDispatchToProps)(AsyncComponent)
}
