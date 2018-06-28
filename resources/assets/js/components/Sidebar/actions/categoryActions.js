import { http } from 'utils'

const CATEGORY_TYPES = {
  GET_ALL: 'CATEGORY--GET_ALL'
}

export default CATEGORY_TYPES

/**
 * Задать категории
 * @param categories
 */
const setCategories = (categories) => ({
  type: CATEGORY_TYPES.GET_ALL,
  categories
})

/**
 * Загрузить категории
 * @return {function(*)}
 */
export const loadAll = () => {
  return async dispatch => {
    try {
      const url = window.laroute.route('category.index')
      const {data} = await http('get', url)

      dispatch(setCategories(data.categories))
    } catch (err) {
      console.error(err)
    }
  }
}
