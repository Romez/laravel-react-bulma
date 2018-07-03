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

/**
 * Вернуть к default state
 */
export const revertState = () => ({
  type: GOODS_TYPES.REVERT_STATE
})

/**
 * Установить тип содержимого открываемого модального окна
 * @param modalActionType
 * @param modalActionId
 * @returns {{type: string, modalActionType: *}}
 */
export const updateModalAction = (modalActionType, modalActionId = null) => ({
  type: GOODS_TYPES.UPDATE_MODAL_ACTION_TYPE,
  modalActionType,
  modalActionId
})

/**
 * Закрыть модальное окно
 * @returns {Function}
 */
export const closeModalAction = () => {
  return (dispatch) => {
    dispatch(updateModalAction(null, null))
  }
}

/**
 * Изменить значение поля формы
 * @param name
 * @param value
 */
export const updateFormValue = (name, value) => ({
  type: GOODS_TYPES.UPDATE_FORM_VALUE,
  name,
  value
})

/**
 * Задать ошибку для поля
 * @param name
 * @param value
 */
export const updateFormError = (name, value) => ({
  type: GOODS_TYPES.UPDATE_FORM_ERROR,
  name,
  value
})