import CATEGORY_TYPES from '../actions/categoryActionTypes'

export const initialState = {
  goods: undefined,
  pagination: null,
  totalCategoryGoodsCount: null,
  goodsPerPage: null,
  goodsLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_TYPES.APPEND_GOODS: {
      let goods = []

      if (state.goods) { goods = state.goods }

      return {
        ...state,
        goods: [...goods, ...action.goods]
      }
    }

    case CATEGORY_TYPES.REVERT_STATE: {
      return initialState
    }

    case CATEGORY_TYPES.SKIP_GOODS: {
      return {...state, goods: []}
    }

    case CATEGORY_TYPES.UPDATE_TOTAL_CATEGORY_GOODS: {
      return {
        ...state,
        totalCategoryGoodsCount: action.totalCategoryGoodsCount
      }
    }

    case CATEGORY_TYPES.UPDATE_GOODS_PER_PAGE: {
      return {
        ...state,
        goodsPerPage: action.goodsPerPage
      }
    }

    default:
      return state
  }
}
