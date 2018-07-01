import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

class NoGoods extends React.Component {
  render () {
    return (
      <div className={cn('has-text-centered', {
        'is-invisible': !this.props.isNoGoods
      })}>
        Товаров нет
      </div>
    )
  }
}

NoGoods.propTypes = {
  isNoGoods: PropTypes.bool.isRequired
}

export default NoGoods
