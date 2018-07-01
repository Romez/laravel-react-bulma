import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Loader } from '../../'
import { loadCategories } from '../actions/sidebarActions'

export default WrappedComponent => {
  class AsyncComponent extends React.Component {
    componentWillMount () {
      this.props.loadCategories()
    }

    render () {
      return (
        this.props.categories ? <WrappedComponent/> : <Loader/>
      )
    }
  }

  AsyncComponent.propTypes = {
    categories: PropTypes.array,
    loadCategories: PropTypes.func.isRequired
  }

  const mapStateToProps = state => ({
    categories: state.sidebarReducer.categories
  })

  const mapDispatchToProps = {
    loadCategories
  }

  return connect(mapStateToProps, mapDispatchToProps)(AsyncComponent)
}
