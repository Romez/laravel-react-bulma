import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class GoodsActions extends React.Component {
  render () {
    return (
      <div className={'goods-actions'}>

        <span className="icon">
          <i className="fa fa-eye"/>
        </span>

        <span className="icon">
          <i className="fa fa-pencil"/>
        </span>


        <span className="icon">
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

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsActions)
