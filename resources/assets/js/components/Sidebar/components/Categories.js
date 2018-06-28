import React from 'react'
import PropTypes from 'prop-types'
import Category from './Category'
import arrayToTree from 'array-to-tree'

class Categories extends React.Component {
  render () {
    return (
      <ul className="menu-list">
        {this.props.sub && (<li><a>{'TEST'}</a></li>)}

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
