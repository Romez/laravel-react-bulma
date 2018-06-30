import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class CategoryPage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        CategoryPage
      </div>
    )
  }
}

CategoryPage.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
