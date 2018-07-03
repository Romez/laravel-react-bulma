import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GoodsTable } from '../../components'
import {GoodsTablePaginator, CreateButton, GoodsModalAction} from './'
import { compose } from '@utils'
import { withGoods } from '../../decorators'
import { MODAL_CREATE_TYPE, MODAL_UPDATE_TYPE, MODAL_VIEW_TYPE } from '../../constants/goods'

class GoodsPage extends React.Component {
  /**
   * Показавть пагинатор, если страниц больше 1
   */
  isPagesMoreThanOne = () => this.props.pagination.lastPage > 1

  render () {
    const {goods, pagination} = this.props

    return (
      <section>
        <CreateButton/>

        <GoodsTable goods={goods} from={pagination.from}/>

        {this.isPagesMoreThanOne() && <GoodsTablePaginator/>}

        <GoodsModalAction/>
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

const mapStateToProps = (state) => {
  const {goods, pagination} = state.admin.goodsReducer
  return {
    goods,
    pagination
  }
}

const mapDispatchToProps = {
}

export default compose(
  withGoods,
  connect(mapStateToProps, mapDispatchToProps)
)(GoodsPage)
