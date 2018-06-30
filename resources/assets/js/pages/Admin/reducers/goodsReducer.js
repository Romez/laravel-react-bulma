import GOODS_TYPES from '../actions/goodActionTypes'

export const initialState = {
  goods: [],
  currentPage: 1,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GOODS_TYPES.UPDATE_GOODS: {
      return {
        ...state,
        goods: action.goods
      }
    }

    case GOODS_TYPES.REMOVE_GOOD: {
      const id = action.id
      const goods = state.goods.filter((good) => good.id !== id)
      return {
        ...state,
        goods
      }
    }

    case GOODS_TYPES.UPDATE_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }

    default:
      return state
  }
}
