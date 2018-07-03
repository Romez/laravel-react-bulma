import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import { MODAL_CREATE_TYPE, MODAL_UPDATE_TYPE, MODAL_VIEW_TYPE } from '../../constants/goods/index'
import {closeModalAction} from '../../actions/goodActions'

class GoodsModalAction extends React.Component {
  close = () => {
    this.props.closeModalAction()
  }

  render () {
    return (
      <div className={cn('modal', {'is-active': !!this.props.modalActionType})}>
        <div onClick={this.close} className="modal-background"/>
        <div className="modal-content">

        </div>
        <button onClick={this.close} className="modal-close is-large" aria-label="close"/>
      </div>
    )
  }
}

GoodsModalAction.propTypes = {
  modalActionType: PropTypes.oneOf([
    MODAL_CREATE_TYPE,
    MODAL_UPDATE_TYPE,
    MODAL_VIEW_TYPE
  ]),
  closeModalAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  modalActionType: state.admin.goodsReducer.modalActionType
})

const mapDispatchToProps = {
  closeModalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsModalAction)
