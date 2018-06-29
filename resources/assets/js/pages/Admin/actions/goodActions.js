import GOODS_TYPES from './goodActionTypes'
import {http} from '@utils'

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