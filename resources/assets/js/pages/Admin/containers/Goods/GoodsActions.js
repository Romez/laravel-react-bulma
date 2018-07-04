import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeGoodRequest, uploadGoodsRequest, openForm } from '../../actions/goodActions'
import { MODAL_VIEW_TYPE } from '../../constants/goods'

class GoodsActions extends React.Component {

  /**
   * Просмотреть товар
   */
  view = () => this.props.openForm(MODAL_VIEW_TYPE, this.props.id)

  /**
   * Удаление товара
   * @returns {Promise<void>}
   */
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
  openForm: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentPage: state.admin.goodsReducer.pagination.currentPage
})

const mapDispatchToProps = {
  removeGoodRequest,
  uploadGoodsRequest,
  openForm
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsActions)
