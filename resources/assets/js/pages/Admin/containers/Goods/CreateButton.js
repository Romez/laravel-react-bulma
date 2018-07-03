import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MODAL_CREATE_TYPE } from '../../constants/goods'
import { updateModalAction } from '../../actions/goodActions'

class CreateButton extends React.Component {
  create = () => this.props.updateModalAction(MODAL_CREATE_TYPE)

  render () {
    return (
      <button onClick={this.create} className="button is-success">Создать</button>
    )
  }
}

CreateButton.propTypes = {
  updateModalAction: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  updateModalAction
}

export default connect(null, mapDispatchToProps)(CreateButton)
