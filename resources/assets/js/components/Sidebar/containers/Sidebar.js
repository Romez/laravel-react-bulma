import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withCategories } from '../decorators'
import { compose } from '@utils'
import Categories from '../components/Categories'

class Sidebar extends React.Component {

  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Категории
        </p>

        <Categories categories={this.props.categories}/>
      </aside>
    )
  }
}

Sidebar.propTypes = {
  categories: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  categories: state.categoriesReducer.categories
})

export default compose(
  withCategories,
  connect(mapStateToProps)
)(Sidebar)
