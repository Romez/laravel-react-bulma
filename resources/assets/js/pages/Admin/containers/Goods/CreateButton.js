import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MODAL_CREATE_TYPE } from '../../constants/goods'
import { openForm } from '../../actions/goodActions'

class CreateButton extends React.Component {
  /**
   * Открыть форму создания товара
   */
  openForm = () => this.props.openForm(MODAL_CREATE_TYPE)

  render () {
    return (
      <button onClick={this.openForm} className="button is-success">Создать</button>
    )
  }
}

CreateButton.propTypes = {
  openForm: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  openForm
}

export default connect(null, mapDispatchToProps)(CreateButton)
