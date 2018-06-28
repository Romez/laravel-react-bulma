import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Sidebar extends React.Component {

  render () {
    return (
      <div className={'container'}>
        Sidebar
      </div>
    )
  }
}

Sidebar.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
