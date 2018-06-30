import GOODS_TYPES from './goodActionTypes'
import { http } from '@utils'

/**
 * Загрузка товаров
 * @param page
 * @returns {Function}
 */
export const uploadGoods = (page = 1) => {
  return async (dispatch) => {
    try {
      const {data} = await http('get', window.laroute.route('good.index'), {page})

      const goods = data.goods.data

      dispatch({
        type: GOODS_TYPES.UPDATE_GOODS,
        goods
      })
    } catch (e) {
      console.error(e)
    }
  }
}

/**
 * Удаление товара
 * @param id
 * @returns {Function}
 */
export const removeGood = (id) => {
  return async (dispatch) => {

    console.log(id)

    try {
      const {data} = await http('delete', window.laroute.route('good.destroy', {good: id}))

      if (!data.success) { throw 'remove error'}

      dispatch({
        type: GOODS_TYPES.REMOVE_GOOD,
        id
      })
    } catch (e) {
      console.error(e)
    }
  }
}
