import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeGoodRequest, uploadGoodsRequest, updateModalAction } from '../../actions/goodActions'
import { MODAL_VIEW_TYPE, MODAL_UPDATE_TYPE } from '../../constants/goods'

class GoodsActions extends React.Component {

  view = () => {
    this.props.updateModalAction(MODAL_VIEW_TYPE)
  }

  update = () => {
    this.props.updateModalAction(MODAL_UPDATE_TYPE)
  }

  remove = async () => {
    await this.props.removeGoodRequest(this.props.id)

    this.props.uploadGoodsRequest(this.props.currentPage)
  }

  render () {
    return (
      <div className={'goods-actions'}>
        <span className="icon" onClick={this.view}>
          <i className="fa fa-eye"/>
        </span>

        <span className="icon" onClick={this.update}>
          <i className="fa fa-pencil"/>
        </span>

        <span className="icon" onClick={this.remove}>
          <i className="fa fa-trash"/>
        </span>
      </div>
    )
  }
}

GoodsActions.propTypes = {
  id: PropTypes.number.isRequired,
  uploadGoodsRequest: PropTypes.func.isRequired,
  updateModalAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentPage: state.admin.goodsReducer.pagination.currentPage
})

const mapDispatchToProps = {
  removeGoodRequest,
  uploadGoodsRequest,
  updateModalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsActions)
