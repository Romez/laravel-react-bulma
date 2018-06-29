import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { uploadGoods } from '../../actions/goodActions'
import { GoodsTable } from '../../components/Goods'


class GoodsPage extends React.Component {
  componentWillMount() {
    this.props.uploadGoods()
  }

  render () {
    return (
      <section>
        <GoodsTable goods={this.props.goods}/>
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
  uploadGoods
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsPage)
