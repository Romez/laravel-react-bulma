import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Loader } from '../../../components'
import { uploadGoods, revertState } from '../actions/categoryActions'

export default WrappedComponent => {
  class AsyncComponent extends React.Component {
    componentWillMount() {
      const params = this.props.match.params
      this.props.uploadGoods(params.slug)
    }

    componentWillUnmount() {
      this.props.revertState()
    }

    render () {
      return (
        this.props.goods ? <WrappedComponent/> : <Loader/>
      )
    }
  }

  AsyncComponent.propTypes = {
    revertState: PropTypes.func.isRequired,
    uploadGoods: PropTypes.func.isRequired,
    goods: PropTypes.array
  }

  const mapStateToProps = state => ({
    goods: state.categoryReducer.goods
  })

  const mapDispatchToProps = {
    uploadGoods,
    revertState
  }

  return connect(mapStateToProps, mapDispatchToProps)(AsyncComponent)
}
