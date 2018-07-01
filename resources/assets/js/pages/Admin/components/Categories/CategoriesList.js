import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class CategoriesList extends React.Component {
  render () {
    return (
      <div>
        React
      </div>
    )
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

export default CategoriesList
