import React from 'react'
import PropTypes from 'prop-types'
import Categories from './Categories'

class Category extends React.Component {
  render () {
    const {name, children, id, parent_id} = this.props.category
    return (
      <li className={'menu-list__item'}>
        <a>
          {name}
          {children && <span className="icon"><i className={'fa fa-angle-down'}/></span>}
        </a>
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
