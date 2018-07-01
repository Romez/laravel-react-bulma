import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from '@utils'
import { withGoods } from '../decorators'
import { GoodCard, NoGoods } from '../components'
import MoreButton from './MoreButton'

class CategoryPage extends React.Component {
  /**
   * Есть ли товары в категории
   * @returns {boolean}
   */
  hasGoods = () => this.props.goods.length > 0

  /**
   * Проверить что не все товары загружены
   * @returns {boolean}
   */
  hasNotLoadedGoods = () => this.props.totalCategoryGoodsCount > this.props.goods.length

  render () {
    return (
      <section>
        <div className={'columns is-multiline'}>
            {this.props.goods.map((good) => (
              <div key={good.id} className="column is-one-third">
                <GoodCard good={good}/>
              </div>
            ))}
        </div>

        {this.hasNotLoadedGoods() && <MoreButton/>}

        <NoGoods isNoGoods={!this.hasGoods()}/>
      </section>
    )
  }
}

CategoryPage.propTypes = {
  goods: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  goods: state.categoryReducer.goods,
  totalCategoryGoodsCount: state.categoryReducer.totalCategoryGoodsCount
})

const mapDispatchToProps = (dispatch) => ({})

export default compose(
  withGoods,
  connect(mapStateToProps, mapDispatchToProps)
)(CategoryPage)
