import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeGood } from '../../actions/goodActions'

class GoodsActions extends React.Component {

  remove = () => {
    this.props.removeGood(this.props.id)
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
  id: PropTypes.number.isRequired,
  removeGood: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  removeGood
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsActions)
