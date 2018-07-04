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
 * Сброс всей формы
 * @returns {{type: string}}
 */
const resetForm = () => ({
  type: GOODS_TYPES.RESET_FORM
})

/**
 * Задать категории
 * @param categories
 * @returns {{type: string, categories: *}}
 */
const updateCategories = (categories) => ({
  type: GOODS_TYPES.UPDATE_CATEGORIES,
  categories
})

/**
 * Удалить категории
 * @returns {{type: string, categories: Array}}
 */
const removeCategories = () => ({
  type: GOODS_TYPES.UPDATE_CATEGORIES,
  categories: []
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
const updateModalAction = (modalActionType, modalActionId = null) => ({
  type: GOODS_TYPES.UPDATE_MODAL_ACTION_TYPE,
  modalActionType,
  modalActionId
})

/**
 * Открыть форму
 * @param modalActionType
 * @param modalActionId
 * @returns {Function}
 */
export const openForm = (modalActionType, modalActionId = null) => {
  return async (dispatch) => {
    const {data} = await http('get', window.laroute.route('category.index', {'plain': true}))

    dispatch(updateCategories(data.categories))
    dispatch(updateModalAction(modalActionType, modalActionId))
  }
}

/**
 * Закрыть модальное окно
 * @returns {Function}
 */
export const closeModalAction = () => {
  return (dispatch) => {
    dispatch(updateModalAction(null, null))
    dispatch(resetForm())
    dispatch(removeCategories())
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

/**
 * Сброс ошибки поля формы
 * @param name
 * @return {function(*)}
 */
export const skipFormError = (name) => {
  return (dispatch) => {
    dispatch(updateFormError(name, ''))
  }
}
