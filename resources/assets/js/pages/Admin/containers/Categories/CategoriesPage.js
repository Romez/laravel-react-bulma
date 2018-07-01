import React from 'react'
import { connect } from 'react-redux'
import { withCategories } from '../../decorators'
import { compose } from '@utils'
import { CategoriesList } from '../../components'

class CategoriesPage extends React.Component {
  render () {
    return (
      <section>
        <CategoriesList categories={this.props.categories}/>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.admin.categoriesReducer.categories
})

const mapDispatchToProps = {

}

export default compose(
  withCategories,
  connect(mapStateToProps, mapDispatchToProps)
)(CategoriesPage)
