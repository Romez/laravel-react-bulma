import GOODS_TYPES from '../actions/goodActionTypes'

export const initialState = {
  goods: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GOODS_TYPES.UPDATE_GOODS: {
      return {
        ...state,
        goods: action.goods
      }
    }

    default:
      return state
  }
}
