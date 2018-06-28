import React from 'react'
import PropTypes from 'prop-types'
import Category from './Category'
import cn from 'classnames'

class Categories extends React.Component {
  render () {
    return (
      <ul className={cn({'menu-list': !this.props.sub})}>
        {this.props.categories.map((category) => (<Category key={category.id} category={category} />))}
      </ul>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  sub: PropTypes.bool.isRequired
}

Categories.defaultProps = {
  sub: false
}

export default Categories
