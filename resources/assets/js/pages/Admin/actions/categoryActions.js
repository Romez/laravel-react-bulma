import ADMIN_CATEGORY_TYPES from '../actions/categoryActionTypes'
import { http } from '@utils'
import { CategoriesToServerTransformer } from '../../../transformers'

/**
 * Задать категории
 * @param categories
 */
export const updateCategories = (categories) => ({
  type: ADMIN_CATEGORY_TYPES.UPDATE_CATEGORIES,
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

    dispatch(updateCategories(data.categories))
  }
}

/**
 * Вернуть к default state
 */
export const revertState = () => ({
  type: ADMIN_CATEGORY_TYPES.REVERT_STATE
})
