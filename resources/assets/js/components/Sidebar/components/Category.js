import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Categories from './Categories'

class Category extends React.Component {
  render () {
    const {name, parent_id, children} = this.props.category

    return (children ? <Categories categories={children} sub={true}/> : <li><a>{name}</a></li>
    )
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    parent_id: PropTypes.number
  }).isRequired
}

export default Category
