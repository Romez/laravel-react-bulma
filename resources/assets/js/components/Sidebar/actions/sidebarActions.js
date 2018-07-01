import { http } from '@utils'
import CATEGORY_TYPES from './sidebarActionTypes'

/**
 * Задать категории
 * @param categories
 */
const setCategories = (categories) => ({
  type: CATEGORY_TYPES.GET_ALL_CATEGORIES,
  categories
})

/**
 * Загрузить все категории
 * @return {function(*)}
 */
export const loadCategories = () => {
  return async (dispatch) => {
    const url = window.laroute.route('category.index')
    const {data} = await http('get', url)

    dispatch(setCategories(data.categories))
  }
}
