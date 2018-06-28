import React from 'react'
import PropTypes from 'prop-types'
import Categories from './Categories'

class Category extends React.Component {
  render () {
    const {name, children} = this.props.category
    return (
      <li>
        <a>{name}</a>
        {children && <Categories categories={children} sub={true}/>}
      </li>
    )
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.array
  }).isRequired
}

export default Category
