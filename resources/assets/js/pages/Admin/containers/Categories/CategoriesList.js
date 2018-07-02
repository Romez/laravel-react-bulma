import React from 'react'
import PropTypes from 'prop-types'
import 'react-sortable-tree/style.css'
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree'
import { updateCategories, appendCategory } from '../../actions/categoryActions'
import { loadCategories as sidebarLoadCategories } from '../../../../components/Sidebar/actions/sidebarActions'
import { connect } from 'react-redux'
import { withCategories } from '../../decorators'
import { compose } from '@utils'
import { updateRequestsCategories, createRequestCategory } from '../../helpers'
import AddCategory from './AddCategory'

class CategoriesList extends React.Component {
  /**
   * Внести изменения в store
   * @param treeData
   */
  change = (treeData) => {
    this.props.updateCategories(treeData)
  }

  /**
   * Отправить изменения на сервере в случае изменения структуры дерева
   * @param data
   */
  update = async (data) => {
    await updateRequestsCategories(data.treeData)

    this.props.sidebarLoadCategories()
  }

  /**
   * Создать узел
   * @param value
   */
  create = async (value) => {
    const category = await createRequestCategory(value)

    this.props.appendCategory(category)

    this.props.sidebarLoadCategories()
  }

  /**
   * Удаление  узла
   * @param path
   * @return {function()}
   */
  remove = (path) => {
    return async () => {
      const treeData = removeNodeAtPath({
        treeData: this.props.categories,
        path,
        getNodeKey: ({treeIndex}) => treeIndex,
      })

      await updateRequestsCategories(treeData)

      this.props.updateCategories(treeData)

      this.props.sidebarLoadCategories()
    }
  }

  /**
   * Кнопки узла
   * @param node
   * @param path
   */
  buttons = ({node, path}) => ({
    buttons: [
      <span className="icon" onClick={this.remove(path)}>
        <i className="fa fa-trash"/>
      </span>,
    ],
  })

  render () {
    return (
      <div className={'admin-categories-list'}>
        <AddCategory create={this.create}/>

        <div style={{height: '100vh'}}>
          <SortableTree
            treeData={this.props.categories}
            onChange={this.change}
            onMoveNode={this.update}
            generateNodeProps={this.buttons}
          />
        </div>
      </div>
    )
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  updateCategories: PropTypes.func.isRequired,
  sidebarLoadCategories: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  categories: state.admin.categoriesReducer.categories
})

const mapDispatchToProps = {
  updateCategories,
  sidebarLoadCategories,
  appendCategory
}

export default compose(
  withCategories,
  connect(mapStateToProps, mapDispatchToProps)
)(CategoriesList)
