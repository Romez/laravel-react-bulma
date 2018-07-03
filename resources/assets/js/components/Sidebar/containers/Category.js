import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'
import { uploadGoods, skipGoods } from '../../../pages/Category/actions/categoryActions'

class Category extends React.Component {
  /**
   * Переход на страницу категории
   * @param slug
   * @returns {function()}
   */
  goToPage = (slug) => {
    return () => {
      if (this.props.goods) {
        this.props.skipGoods()
        this.props.uploadGoods(slug)
      }
    }
  }

  render () {
    const {title, children = [], slug} = this.props.category
    return (
      <li className={'menu-list__item'}>
        <Link
          onClick={this.goToPage(slug)}
          to={window.laroute.route('category.slug', {slug})}
        >
          {title}
          {children.length > 0 && <span className="icon"><i className={'fa fa-angle-down'}/></span>}
        </Link>
        {children.length > 0 && <Categories categories={children} sub={true}/>}
      </li>
    )
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.array
  }).isRequired,
  goods: PropTypes.array,
  uploadGoods: PropTypes.func.isRequired,
  skipGoods: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  goods: state.categoryReducer.goods
})

const mapDispatchToProps = {
  uploadGoods,
  skipGoods
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
