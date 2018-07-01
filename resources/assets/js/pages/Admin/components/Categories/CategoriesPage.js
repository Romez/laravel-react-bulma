import React from 'react'
import { compose } from '@utils'
import { CategoriesList } from '../../containers'

class CategoriesPage extends React.Component {
  render () {
    return (
      <section id={'admin-categories'}>
        <CategoriesList/>
      </section>
    )
  }
}

export default CategoriesPage
