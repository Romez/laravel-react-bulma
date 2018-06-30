import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GoodsTable } from '../../components/Goods'
import GoodsTablePaginator from './GoodsTablePaginator'
import { compose } from '@utils'
import { withGoods } from '../../decorators'

class GoodsPage extends React.Component {
  /**
   * Показавть пагинатор, если страниц больше 1
   */
  isPagesMoreThanOne = () => this.props.pagination.lastPage > 1

  render () {
    const {goods, pagination} = this.props

    return (
      <section>
        <GoodsTable goods={goods} from={pagination.from}/>

        {this.isPagesMoreThanOne() && <GoodsTablePaginator/>}
      </section>
    )
  }
}

GoodsPage.propTypes = {
  goods: PropTypes.array.isRequired,
  pagination: PropTypes.shape({
    lastPage: PropTypes.number.isRequired
  }).isRequired
}

const mapStateToProps = (state) => ({
  goods: state.admin.goodsReducer.goods,
  pagination: state.admin.goodsReducer.pagination
})

const mapDispatchToProps = {
}

export default compose(
  withGoods,
  connect(mapStateToProps, mapDispatchToProps)
)(GoodsPage)
