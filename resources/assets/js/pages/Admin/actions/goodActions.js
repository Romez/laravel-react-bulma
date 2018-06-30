import GOODS_TYPES from './goodActionTypes'
import { http } from '@utils'
import { GoodPaginationTransformer } from '../../../transformers'

/**
 * Обновить товары
 * @param goods
 */
const updateGoods = (goods) => ({
  type: GOODS_TYPES.UPDATE_GOODS,
  goods
})


/**
 * Обновить номер текущуей страницы
 * @param pagination
 */
const updatePagination = (pagination) => ({
  type: GOODS_TYPES.UPDATE_PAGINATION,
  pagination
})

/**
 * Удаление товара
 * @param id
 */
const deleteGood = (id) => ({
  type: GOODS_TYPES.REMOVE_GOOD,
  id
})

/**
 * Загрузка товаров
 * @param page
 * @returns {Function}
 */
export const uploadGoodsRequest = (page = 1) => {
  return async (dispatch) => {
    try {
      const {data} = await http('get', window.laroute.route('good.index', {page}))

      dispatch(updateGoods(data.goods.data))

      const pagination = GoodPaginationTransformer.fetch(data.goods)
      dispatch(updatePagination(pagination))
    } catch (e) {
      console.error(e)
    }
  }
}

/**
 * Запрос на удаление товара
 * @param id
 * @returns {Function}
 */
export const removeGoodRequest = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await http('delete', window.laroute.route('good.destroy', {good: id}))

      if (!data.success) { throw 'remove error'}

      dispatch(deleteGood(id))
    } catch (e) {
      console.error(e)
    }
  }
}

