import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Loader } from '../../'
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
    categories: state.categoriesReducer.categories
  })

  const mapDispatchToProps = {
    loadAll
  }

  return connect(mapStateToProps, mapDispatchToProps)(AsyncComponent)
}
