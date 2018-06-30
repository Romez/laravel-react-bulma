import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from '@utils'
import { withGoods } from '../decorators'
import { GoodCard } from '../components'

class CategoryPage extends React.Component {
  constructor (props) {
    super(props)
  }

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
      </section>
    )
  }
}

CategoryPage.propTypes = {
  goods: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  goods: state.categoryReducer.goods
})

const mapDispatchToProps = (dispatch) => ({})

export default compose(
  withGoods,
  connect(mapStateToProps, mapDispatchToProps)
)(CategoryPage)
