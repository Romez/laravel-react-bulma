import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Loader } from '../../../components'
import { uploadCategories, revertState } from '../actions/categoryActions'

export default WrappedComponent => {
  class AsyncComponent extends React.Component {
    componentWillMount() {
      this.props.uploadCategories()
    }

    componentWillUnmount() {
      this.props.revertState()
    }

    render () {
      return (
        this.props.categories ? <WrappedComponent/> : <Loader/>
      )
    }
  }

  AsyncComponent.propTypes = {
    categories: PropTypes.array
  }

  const mapStateToProps = state => ({
    categories: state.admin.categoriesReducer.categories
  })

  const mapDispatchToProps = {
    uploadCategories,
    revertState
  }

  return connect(mapStateToProps, mapDispatchToProps)(AsyncComponent)
}
