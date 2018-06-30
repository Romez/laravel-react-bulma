import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { uploadGoodsRequest } from '../../actions/goodActions'
import { GoodsTable, GoodsTablePaginator } from '../../components/Goods'
import qs from 'query-string'


class GoodsPage extends React.Component {
  componentWillMount() {
    const params = qs.parse(this.props.location.search)

    this.props.uploadGoodsRequest(params.page)
  }

  render () {
    return (
      <section>
        <GoodsTable goods={this.props.goods}/>

        <GoodsTablePaginator currentPage/>
      </section>
    )
  }
}

GoodsPage.propTypes = {
  goods: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  goods: state.admin.goodsReducer.goods,
  currentPage: state.admin.goodsReducer.currentPage
})

const mapDispatchToProps = {
  uploadGoodsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsPage)
