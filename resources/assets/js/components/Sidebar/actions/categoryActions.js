import { http } from 'utils'
import arrToTree from 'array-to-tree'
import CATEGORY_TYPES from './categoryActionTypes'

/**
 * Задать категории
 * @param categories
 */
const setCategories = (categories) => ({
  type: CATEGORY_TYPES.GET_ALL,
  categories
})

/**
 * Загрузить все категории
 * @return {function(*)}
 */
export const loadAll = () => {
  return async dispatch => {
    try {
      const url = window.laroute.route('category.index')
      const {data} = await http('get', url)

      const categories = arrToTree(data.categories)

      dispatch(setCategories(categories))
    } catch (err) {
      console.error(err)
    }
  }
}
