import ADMIN_CATEGORY_TYPES from '../actions/categoryActionTypes'
import arrToTree from 'array-to-tree'
import { http } from '@utils'

/**
 * Задать категории
 * @param categories
 */
const updateCategories = (categories) => ({
  type: ADMIN_CATEGORY_TYPES.UPDATE_CATEGORIES,
  categories
})

/**
 * Загрузить все категории
 * @return {function(*)}
 */
export const uploadCategories = () => {
  return async (dispatch) => {
    const url = window.laroute.route('category.index')
    const {data} = await http('get', url)

    const categories = arrToTree(data.categories)

    dispatch(updateCategories(categories))
  }
}

/**
 * Вернуть к default state
 */
export const revertState = () => ({
  type: ADMIN_CATEGORY_TYPES.REVERT_STATE
})
