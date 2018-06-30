import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeGoodRequest, uploadGoodsRequest } from '../../actions/goodActions'

class GoodsActions extends React.Component {

  remove = async () => {
    await this.props.removeGoodRequest(this.props.id)

    this.props.uploadGoodsRequest(this.props.currentPage)
  }

  render () {
    return (
      <div className={'goods-actions'}>

        <span className="icon">
          <i className="fa fa-eye"/>
        </span>

        <span className="icon">
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
  id: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  currentPage: state.admin.goodsReducer.pagination.currentPage
})

const mapDispatchToProps = {
  removeGoodRequest,
  uploadGoodsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsActions)
