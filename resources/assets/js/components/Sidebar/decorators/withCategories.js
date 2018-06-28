import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Loader } from 'components/Loader'
import { loadAll } from '../actions/categoryActions'

export default WrappedComponent => {
  class AsyncComponent extends React.Component {
    componentWillMount () {
      this.props.loadAll()
    }

    render () {
      return (
        this.props.categories ? <WrappedComponent/> : <Loader/>
      )
    }
  }

  AsyncComponent.propTypes = {
    categories: PropTypes.array,
    loadAll: PropTypes.func.isRequired
  }

  const mapStateToProps = state => ({
    categories: state.sideBarReducer.categories
  })

  const mapDispatchToProps = dispatch => ({
    loadAll: bindActionCreators(loadAll, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(AsyncComponent)
}