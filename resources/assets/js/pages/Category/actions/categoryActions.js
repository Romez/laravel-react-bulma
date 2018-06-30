import CATEGORY_TYPES from './categoryActionTypes'

import { http } from '@utils'

/**
 * Добавить товары
 * @param goods
 */
const appendGoods = (goods) => ({
  type: CATEGORY_TYPES.APPEND_GOODS,
  goods
})

/**
 * Загрузить товары для категории
 * @param slug
 * @returns {function(*)}
 */
export const uploadGoods = (slug) => {
  return async (dispatch) => {
    const {data: {category}} = await http('get', window.laroute.route('category.show', {category: slug}))

    dispatch(appendGoods(category.goods))
  }
}

/**
 * Вернуть store в default
 */
export const revertState = () => ({
  type: CATEGORY_TYPES.REVERT_STATE
})

/**
 * Сброс всех товаров
 */
export const skipGoods = () => ({
  type: CATEGORY_TYPES.SKIP_GOODS
})
