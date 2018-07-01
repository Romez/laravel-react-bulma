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
 * Кол-во подгрузаемих товаров
 * @param goodsPerPage
 * @returns {{type: string, goodsPerPage: *}}
 */
const updateGoodsPerPage = (goodsPerPage) => ({
  type: CATEGORY_TYPES.UPDATE_GOODS_PER_PAGE,
  goodsPerPage
})

/**
 * Изменить статус загрузки товаров
 * @param goodsLoading
 * @returns {{type: string, goodsLoading: *}}
 */
const updateGoodsLoading = (goodsLoading) => ({
  type: CATEGORY_TYPES.UPDATE_GOODS_LOADING,
  goodsLoading
})

/**
 * Задать общее кол-во товаров для категории
 * @param totalCategoryGoodsCount
 * @returns {{type: string, totalCategoryGoodsCount: *}}
 */
const updateTotalCategoryCount = (totalCategoryGoodsCount) => ({
  type: CATEGORY_TYPES.UPDATE_TOTAL_CATEGORY_GOODS,
  totalCategoryGoodsCount
})

/**
 * Загрузить товары для категории
 * @param slug
 * @param page
 * @returns {function(*)}
 */
export const uploadGoods = (slug, page = 1) => {
  return async (dispatch) => {
    dispatch(updateGoodsLoading(true))

    const url =  window.laroute.route('category.show', {category: slug, page})
    const {data: {category, totalGoodsCount, goodsPerPage}} = await http('get', url)

    dispatch(updateGoodsPerPage(goodsPerPage))
    dispatch(updateTotalCategoryCount(totalGoodsCount))
    dispatch(appendGoods(category.goods))

    dispatch(updateGoodsLoading(false))
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
