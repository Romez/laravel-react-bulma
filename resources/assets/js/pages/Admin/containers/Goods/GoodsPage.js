import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GoodsTable } from '../../components/Goods'
import GoodsTablePaginator from './GoodsTablePaginator'
import { compose } from '@utils'
import { withGoods } from '../../decorators'

class GoodsPage extends React.Component {
  render () {
    return (
      <section>
        <GoodsTable goods={this.props.goods}/>

        <GoodsTablePaginator/>
      </section>
    )
  }
}

GoodsPage.propTypes = {
  goods: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  goods: state.admin.goodsReducer.goods
})

const mapDispatchToProps = {
}

export default compose(
  withGoods,
  connect(mapStateToProps, mapDispatchToProps)
)(GoodsPage)
