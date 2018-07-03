import GOODS_TYPES from '../actions/goodActionTypes'

export const initialState = {
  goods: [],
  pagination: null,
  modalActionType: null,
  modalActionId: null
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

    case GOODS_TYPES.UPDATE_PAGINATION: {
      return {
        ...state,
        pagination: action.pagination
      }
    }

    case GOODS_TYPES.REVERT_STATE: {
      return initialState
    }

    case GOODS_TYPES.UPDATE_MODAL_ACTION_TYPE: {
      return {
        ...state,
        modalActionType: action.modalActionType,
        modalActionId: action.modalActionId
      }
    }

    default:
      return state
  }
}
